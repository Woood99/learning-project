import { StateSchema } from 'app/providers/StoreProvider';

export const getUser = (state: StateSchema) => state.user;
export const getUserAuthData = (state: StateSchema) => state.user.authData;
