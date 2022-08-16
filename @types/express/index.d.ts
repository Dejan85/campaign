declare global {
  namespace Express {
    interface Request {
      user: {
        name: any;
      };
    }
  }
}
