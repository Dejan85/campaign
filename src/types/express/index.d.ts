export {};

declare global {
  namespace Express {
    export interface Request {
      user: { name: string; email: string; password: string };
    }
  }
}
