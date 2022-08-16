export interface CreateUserI {
  name: string;
  email: string;
  password: string;
}

export interface UpdateUserI {
  name?: string;
  email?: string;
  password?: string;
  id: string;
}
