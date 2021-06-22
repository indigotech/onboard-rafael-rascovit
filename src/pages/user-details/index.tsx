import { useLazyQuery } from '@apollo/client';
import { UserDetail, UserQuery } from 'apollo-client/service';
import { Button } from 'components/button';
import { LoadIndicator } from 'components/loading';
import { WrapperUserDetails } from 'pages/user-details/styles';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

export const UserDetails: React.FC = () => {
  const history = useHistory();
  const id = useParams();
  const [getUser, { data, loading, error }] = useLazyQuery<UserDetail>(UserQuery);

  useEffect(() => {
    getUser({ variables: id });
  }, [getUser, id]);

  if (loading) {
    return (
      <WrapperUserDetails>
        <Button type='button' onClick={() => history.goBack()}>
          Voltar
        </Button>
        <LoadIndicator className='loadIndicator' height={100} width={100} color='black' />
      </WrapperUserDetails>
    );
  }
  if (error) {
    return (
      <WrapperUserDetails>
        <Button type='button' onClick={() => history.goBack()}>
          Voltar
        </Button>
        <p className='errorMessage'>{error.message}</p>
      </WrapperUserDetails>
    );
  }
  return (
    <WrapperUserDetails>
      <Button type='button' onClick={() => history.goBack()}>
        Voltar
      </Button>
      <div className='card'>
        <p className='cardTitle'>{data?.user.name}</p>
        <ul>
          <li>E-mail: {data?.user.email}</li>
          <li>Data de nascimento: {data?.user.birthDate}</li>
          <li>Telefone: {data?.user.phone}</li>
          <li>Função: {data?.user.role}</li>
        </ul>
      </div>
    </WrapperUserDetails>
  );
};
