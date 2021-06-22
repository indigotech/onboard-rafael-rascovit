import React, { useState } from 'react';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Container, Content } from './styles';

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMessage, setEmailMessage] = useState(false);
  const [passwordMessage, setPassMessage] = useState(false);
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;

  const inputValidate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setEmailMessage(true);
    }
    if (!passRegex.test(password)) {
      setPassMessage(true);
    }
  };

  return (
    <Container>
      <Content>
        <form onSubmit={(e) => inputValidate(e)}>
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
          <Button type='submit'>Entrar</Button>
        </form>
      </Content>
    </Container>
  );
};
