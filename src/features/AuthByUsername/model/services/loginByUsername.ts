import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ILoginCredentials } from '../types/loginSchema';
import { IUser, userActions } from 'entities/User';
import { i18nInstance } from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

export const loginByUsername = createAsyncThunk<IUser, ILoginCredentials, { rejectValue: string }>(
   'login/loginByUsername',
   async (authData, thunkAPI) => {
      try {
         const response = await axios.post<IUser>('http://localhost:8000/login', authData);

         if (!response.data) {
            throw new Error();
         }

         localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
         thunkAPI.dispatch(userActions.setAuthData(response.data));

         return response.data;
      } catch (error) {
         console.log(error);
         return thunkAPI.rejectWithValue(i18nInstance.t('Вы ввели неверный логин или пароль'));
      }
   }
);
