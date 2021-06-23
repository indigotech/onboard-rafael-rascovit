import { useQuery } from '@apollo/client';
import { UserDetail, UserQuery } from 'apollo-client/service';
import { Button } from 'components/button';
import { LoadIndicator } from 'components/loading';
import { WrapperUserDetails } from 'pages/user-details/styles';
import React from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

export const UserDetails: React.FC = () => {
  const history = useHistory();
  const id = useParams();
  const { data, loading, error } = useQuery<UserDetail>(UserQuery, { variables: id });

  return (
    <WrapperUserDetails>
      <Button type='button' onClick={() => history.goBack()}>
        Voltar
      </Button>
      {loading ? (
        <LoadIndicator className='loadIndicator' height={100} width={100} color='black' />
      ) : error ? (
        <p className='errorMessage'>{error.message}</p>
      ) : (
        <div className='card'>
          <p className='cardTitle'>{data?.user.name}</p>
          <ul>
            <li>E-mail: {data?.user.email}</li>
            <li>Data de nascimento: {data?.user.birthDate}</li>
            <li>Telefone: {data?.user.phone}</li>
            <li>Função: {data?.user.role}</li>
          </ul>
        </div>
      )}
    </WrapperUserDetails>
  );
};
