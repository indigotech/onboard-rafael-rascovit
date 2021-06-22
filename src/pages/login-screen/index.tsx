import { useMutation } from '@apollo/client';
import { Login, LoginMutation } from 'apollo-client/service';
import { Button } from 'components/button';
import { Form } from 'components/form';
import { Input } from 'components/input';
import { LoadIndicator } from 'components/loading';
import { WrapperLoginScreen } from 'pages/login-screen/styles';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { emailValidate, passwordValidate } from 'validations';

export const LoginScreen: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMessage, setEmailMessage] = useState(false);
  const [passwordMessage, setPassMessage] = useState(false);
  const [loginMessage, setLogMessage] = useState(false);
  const [errorMessage, setError] = useState('');
  const [userLogin, { data, loading }] = useMutation<Login>(LoginMutation, {
    onCompleted(response) {
      sessionStorage.setItem('token', response.login.token);
      history.push('/users-list');
    },
  });

  const inputValidate = () => {
    setLogMessage(false);
    if (!emailValidate(email)) {
      setEmailMessage(true);
    } else {
      setEmailMessage(false);
    }
    if (!passwordValidate(password)) {
      setPassMessage(true);
    } else {
      setPassMessage(false);
    }
    return emailValidate(email) && passwordValidate(password);
  };

  const callLogin = async () => {
    try {
      await userLogin({ variables: { email, password } });
    } catch (errorResponse) {
      setLogMessage(true);
      setError(errorResponse.message);
    }
  };

  const handleUserLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValidate()) {
      callLogin();
    }
  };

  return (
    <WrapperLoginScreen>
      <Form title='Bem-vindo(a) à Taqtile!' onSubmit={handleUserLogin}>
        <Input
          label='E-mail'
          name='email'
          placeholder='Digite seu e-mail aqui'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailMessage && <p className='errorMessage'>E-mail inválido</p>}
        <Input
          label='Senha'
          name='password'
          placeholder='******'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {passwordMessage && (
          <p className='errorMessage'>A senha precisa conter 7 dígitos com pelo menos uma letra e um número</p>
        )}
        {loading && <LoadIndicator height={50} width={50} color='black' />}
        {!loading && <Button type='submit'>Entrar</Button>}
        {data && <p>{data.login.user.name}</p>}
        {loginMessage && <p className='errorMessage'>{errorMessage}</p>}
      </Form>
    </WrapperLoginScreen>
  );
};
