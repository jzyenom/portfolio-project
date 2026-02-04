export interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface ILoginInput {
  email: string;
  password: string;
}

// export interface IUserResponse {
//   message?: string;
//   error?: string;
//   token?: string;
//   user?: {
//     _id: string;
//     name: string;
//     email: string;
//     role: string;
//   };
// }
export interface IUserResponse {
  message?: string;
  error?: string;
  token?: string;
  user?: IUser;
}