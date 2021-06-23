import { useQuery } from '@apollo/client';
import { UserDetail, UserQuery } from 'apollo-client/service';
import { LinkComponent } from 'components/Link';
import { LoadIndicator } from 'components/loading';
import { WrapperUserDetails } from 'pages/user-details/styles';
import React from 'react';
import { useParams } from 'react-router';

export const UserDetails: React.FC = () => {
  const id = useParams();
  const { data, loading, error } = useQuery<UserDetail>(UserQuery, { variables: id });

  return (
    <WrapperUserDetails>
      <div>
        <LinkComponent to='/users-list'>Voltar</LinkComponent>
      </div>
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
