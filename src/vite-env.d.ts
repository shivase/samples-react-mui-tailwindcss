/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_APP_API_MOCKING: string;
  readonly VITE_COMPLETE_GUIDE_FIREBASE_APIKEY: string;
  readonly VITE_COMPLETE_GUIDE_FIREBASE_AUTHDOMAIN: string;
  readonly VITE_COMPLETE_GUIDE_FIREBASE_PROJECTID: string;
  readonly VITE_COMPLETE_GUIDE_FIREBASE_APPID: string;
  readonly VITE_FIREBASE_AUTHENTICATION_FIREBASE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
