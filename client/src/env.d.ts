/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly TEST: string;

}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}