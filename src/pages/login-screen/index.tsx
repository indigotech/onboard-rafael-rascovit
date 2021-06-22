import React from 'react';
import { Button } from '../../components/button';
import { Input } from '../../components/input';

export const LoginScreen: React.FC = () => {
  return (
    <form>
      <h1>Bem-vindo(a) à Taqtile!</h1>
      <label>E-mail</label>
      <Input name='email' placeholder='Digite seu e-mail aqui' type='text' />
      <label>Senha</label>
      <Input name='password' placeholder='******' type='password' />
      <Button type='submit'>Entrar</Button>
    </form>
  );
};
