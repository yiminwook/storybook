declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: "development" | "production" | "test";
      readonly TZ?: string;

      // public
      /** @Example - http://localhost:3000 */
      readonly NEXT_PUBLIC_FRONT_URL: string;
    }
  }
}

export {};
