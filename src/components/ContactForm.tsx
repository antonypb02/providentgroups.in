import { useCallback, useState, type FormEvent } from 'react';

// ✅ ADDED — Vite injects this at build time from REACT_APP_GOOGLE_SCRIPT_URL (see vite.config.ts)
const SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL;

type FieldErrors = {
  name?: string;
  phone?: string;
  email?: string;
};

const emailOk = (v: string) => {
  if (!v.trim()) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
};

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetForm = useCallback(() => {
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setFieldErrors({});
  }, []);

  // ✅ ADDED — client-side validation (name + phone required; email format when present)
  const validate = useCallback((): boolean => {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = 'Name is required';
    if (!phone.trim()) next.phone = 'Phone is required';
    if (!emailOk(email)) next.email = 'Enter a valid email address';
    setFieldErrors(next);
    return Object.keys(next).length === 0;
  }, [name, phone, email]);

  // ✅ ADDED — POST to Google Apps Script; payload is JSON inside form field (reliable CORS with GAS web apps)
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSuccess(false);
      setSubmitError(null);
      if (!validate()) return;

      const url = SCRIPT_URL?.trim();
      if (!url) {
        setSubmitError('Contact form is not configured. Set REACT_APP_GOOGLE_SCRIPT_URL for production.');
        return;
      }

      setLoading(true);
      try {
        const payload = {
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          message: message.trim(),
        };

        const res = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          body: new URLSearchParams({ json: JSON.stringify(payload) }),
        });

        const raw = await res.text();
        let data: { ok?: boolean; error?: string; message?: string } = {};
        try {
          data = raw ? JSON.parse(raw) : {};
        } catch {
          throw new Error('Unexpected response from server');
        }

        if (!res.ok || data.ok === false) {
          throw new Error(data.error || `Request failed (${res.status})`);
        }

        setSuccess(true);
        resetForm();
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
        setSubmitError(msg);
      } finally {
        setLoading(false);
      }
    },
    [email, message, name, phone, resetForm, validate]
  );

  return (
    <form className="contact-form mt-lg" onSubmit={handleSubmit} noValidate>
      <h3 className="text-xl font-bold mb-md">Contact Form</h3>

      {success && (
        <p className="mb-md text-primary font-semibold" role="status">
          Thank you — your message was sent successfully.
        </p>
      )}
      {submitError && (
        <p className="mb-md text-red-600 text-sm" role="alert">
          {submitError}
        </p>
      )}

      <div className="form-group">
        <label htmlFor="contact-name">Name*</label>
        <input
          type="text"
          id="contact-name"
          name="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          placeholder="Your Name"
          autoComplete="name"
          aria-invalid={!!fieldErrors.name}
          aria-describedby={fieldErrors.name ? 'contact-name-err' : undefined}
          disabled={loading}
        />
        {fieldErrors.name && (
          <span id="contact-name-err" className="text-red-600 text-xs block mt-sm">
            {fieldErrors.name}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="contact-phone">Phone*</label>
        <input
          type="tel"
          id="contact-phone"
          name="phone"
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
          placeholder="Your Phone"
          autoComplete="tel"
          aria-invalid={!!fieldErrors.phone}
          aria-describedby={fieldErrors.phone ? 'contact-phone-err' : undefined}
          disabled={loading}
        />
        {fieldErrors.phone && (
          <span id="contact-phone-err" className="text-red-600 text-xs block mt-sm">
            {fieldErrors.phone}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="contact-email">Email</label>
        <input
          type="email"
          id="contact-email"
          name="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          placeholder="Your Email"
          autoComplete="email"
          aria-invalid={!!fieldErrors.email}
          aria-describedby={fieldErrors.email ? 'contact-email-err' : undefined}
          disabled={loading}
        />
        {fieldErrors.email && (
          <span id="contact-email-err" className="text-red-600 text-xs block mt-sm">
            {fieldErrors.email}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(ev) => setMessage(ev.target.value)}
          placeholder="Your Message"
          rows={4}
          disabled={loading}
        />
      </div>

      <button type="submit" className="btn-primary w-full" disabled={loading} aria-busy={loading}>
        {loading ? 'Sending…' : 'Submit'}
      </button>
    </form>
  );
}
