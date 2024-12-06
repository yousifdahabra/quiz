import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import { requestAPI } from '../../utlis/request';
import {useNavigate} from "react-router-dom";

const providers = [{ id: 'credentials', name: 'Email and Password' }];


export default function CredentialsSignInPage() {
    const navigate = useNavigate();

    const signIn = async (provider, formData) => {
        localStorage.clear();
    
        const result = await requestAPI({
            route: "login",
            method: "POST",
            body: formData,
        })
    
        if (result) {
            localStorage.setItem('token', result.data.token)
            localStorage.setItem('user', JSON.stringify(result.data.user))
            navigate('/quiz_list')
    
         }  
        console.log(result)
        
    };
  const theme = useTheme();
  return (
    <AppProvider theme={theme}>
      <SignInPage signIn={signIn} providers={providers} />
    </AppProvider>
  );
}