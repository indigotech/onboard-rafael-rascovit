import { gql, useMutation } from '@apollo/client';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Wrapper } from 'pages/login-screen/styles';
import React, { useState } from 'react';
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMessage, setEmailMessage] = useState(false);
  const [passwordMessage, setPassMessage] = useState(false);
  const [loginMessage, setLogMessage] = useState(false);
  const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!) {
      login(data: { email: $email, password: $password }) {
        token
        user {
          id
          name
          phone
          birthDate
          email
          role
        }
      }
    }
  `;
  const [errorMessage, setError] = useState('');
  const [userLogin, { data, loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted(response) {
      sessionStorage.setItem('token', response.login.token);
    },
  });

  const inputValidate = () => {
    setLogMessage(false);
    if (!emailRegex.test(email)) {
      setEmailMessage(true);
    } else {
      setEmailMessage(false);
    }
    if (!passRegex.test(password)) {
      setPassMessage(true);
    } else {
      setPassMessage(false);
    }
    return emailRegex.test(email) && passRegex.test(password);
  };

  const callLogin = async () => {
    try {
      await userLogin({ variables: { email, password } });
    } catch (errorResponse) {
      setLogMessage(true);
      setError(errorResponse.message);
    }
  };

  return (
    <Wrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          inputValidate() ? callLogin() : null;
        }}
      >
        <h1>Bem-vindo(a) à Taqtile!</h1>
        <label>E-mail</label>
        {emailMessage && <p className='errorMessage'>E-mail inválido</p>}
        <Input
          name='email'
          placeholder='Digite seu e-mail aqui'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Senha</label>
        {passwordMessage && (
          <p className='errorMessage'>A senha precisa conter 7 dígitos com pelo menos uma letra e um número</p>
        )}
        <Input
          name='password'
          placeholder='******'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {loading && <p>loading...</p>}
        {!loading && <Button type='submit'>Entrar</Button>}
        {data && <p>{data.login.user.name}</p>}
        {loginMessage && <p className='errorMessage'>{errorMessage}</p>}
      </form>
    </Wrapper>
  );
};
