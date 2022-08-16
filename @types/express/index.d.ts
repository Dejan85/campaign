export {};

declare global {
  namespace Express {
    interface Request {
      tours: any;
      tour: any;
      user: { name: string; email: string };
    }
  }
}
