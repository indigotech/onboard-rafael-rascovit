import { gql, useQuery } from '@apollo/client';
import { LoadIndicator } from 'components/loading';
import React from 'react';
import { Wrapper } from './styles';

export const UsersList: React.FC = () => {
  const GET_USERS = gql`
    query GetUsers {
      users(pageInfo: { offset: 0, limit: 10 }) {
        nodes {
          id
          name
          phone
          birthDate
          email
          role
        }
        count
        pageInfo {
          offset
          limit
          hasNextPage
          hasPreviousPage
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_USERS);

  if (loading) {
    return <LoadIndicator height={100} width={100} type='ThreeDots' color='black' />;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <Wrapper>
      {data.users.nodes.map(
        (user: { id: string; name: string; email: string; phone: string; birthDate: string; role: string }) => (
          <ul className='userList' key={user.id}>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </ul>
        ),
      )}
      ;
    </Wrapper>
  );
};
