export interface ILoginSchema {
   username: string;
   password: string;
   isLoading: boolean;
   error?: string;
}

export type ILoginCredentials = Pick<ILoginSchema, 'username' | 'password'>;
