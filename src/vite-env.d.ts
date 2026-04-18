/// <reference types="vite/client" />

// ✅ ADDED — matches vite.config `define` for Google Apps Script webhook URL
declare const process: {
  env: {
    REACT_APP_GOOGLE_SCRIPT_URL: string;
  };
};
