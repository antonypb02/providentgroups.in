/**
 * Google Apps Script — contact form → Google Sheet
 *
 * Setup (script must be bound to the spreadsheet — open the Sheet → Extensions → Apps Script):
 * 1. Create a Google Sheet (or use existing). Header row: Timestamp | Name | Phone | Email | Message
 * 2. Paste this file in the project → Save
 * 3. Run `setupSheetHeaders` once from the editor (select function, Run) to add headers if missing
 * 4. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone (required for public form)
 * 5. Copy the Web app URL → Vercel / .env as REACT_APP_GOOGLE_SCRIPT_URL
 */

// ✅ ADDED — parse JSON from URL-encoded `json` field (avoids browser CORS preflight on raw JSON POST) or from application/json body
function parseIncoming_(e) {
  if (!e) return null;
  try {
    if (e.parameter && e.parameter.json) {
      return JSON.parse(e.parameter.json);
    }
    if (e.postData && e.postData.contents) {
      var type = (e.postData.type || '').toLowerCase();
      if (type.indexOf('application/json') !== -1) {
        return JSON.parse(e.postData.contents);
      }
    }
  } catch (err) {
    return null;
  }
  return null;
}

// ✅ ADDED — uniform JSON HTTP output
function jsonOut_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// ✅ ADDED — POST handler (public webhook)
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var data = parseIncoming_(e);
    if (!data) {
      return jsonOut_({ ok: false, error: 'Invalid or missing JSON payload' });
    }

    var name = String(data.name || '').trim();
    var phone = String(data.phone || '').trim();
    var email = String(data.email || '').trim();
    var message = String(data.message || '').trim();

    if (!name || !phone) {
      return jsonOut_({ ok: false, error: 'Name and phone are required' });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([new Date(), name, phone, email, message]);

    return jsonOut_({ ok: true, message: 'Saved' });
  } catch (err) {
    return jsonOut_({ ok: false, error: String(err.message || err) });
  } finally {
    lock.releaseLock();
  }
}

// ✅ ADDED — optional health check (open web app URL in browser)
function doGet() {
  return jsonOut_({ ok: true, ping: true, service: 'contact-sheet-webhook' });
}

// ✅ ADDED — one-time: ensure row 1 has headers (run from Apps Script editor)
function setupSheetHeaders() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var headers = sheet.getRange(1, 1, 1, 5).getValues()[0];
  var empty = headers.join('').length === 0;
  if (empty) {
    sheet.getRange(1, 1, 1, 5).setValues([['Timestamp', 'Name', 'Phone', 'Email', 'Message']]);
  }
}
