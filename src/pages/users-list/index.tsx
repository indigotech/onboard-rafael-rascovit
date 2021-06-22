import { useLazyQuery } from '@apollo/client';
import { UsersQuery, UsersQueryDataInterface, User } from 'apollo-client/service';
import { Button } from 'components/button';
import { LoadIndicator } from 'components/loading';
import { Select } from 'components/select';
import React, { useEffect, useState } from 'react';
import { Wrapper } from './styles';

const limitOptions = [
  {
    name: '05',
    value: 5,
  },
  {
    name: '10',
    value: 10,
  },
  {
    name: '15',
    value: 15,
  },
  {
    name: '20',
    value: 20,
  },
];

export const UsersList: React.FC = () => {
  const [usersArray, setUsersArray] = useState<User[]>([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [getUsers, { data, loading, error }] = useLazyQuery<UsersQueryDataInterface>(UsersQuery, {
    variables: { offset, limit },
    onCompleted: () => {
      if (data === undefined) {
        return;
      }
      setUsersArray([...usersArray, ...data.users.nodes]);
    },
  });

  useEffect(() => {
    getUsers();
  }, [getUsers, offset]);

  const loadMoreUsers = () => {
    setOffset(offset + limit);
  };

  const handleLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUsersArray([]);
    setLimit(+e.target.value);
    setOffset(0);
  };

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <Wrapper>
      <div>
        {usersArray.map((user) => (
          <ul className='userList' key={user.id}>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </ul>
        ))}
      </div>
      {loading && <LoadIndicator className='loadIndicator' height={100} width={100} color='black' />}
      {!loading && (
        <div className='loadMore'>
          <Select value={limit} onChange={handleLimit} label='Usuários na tela: ' options={limitOptions}></Select>
          <Button onClick={loadMoreUsers} type='button' className='loadMoreButton'>
            Carregar mais
          </Button>
        </div>
      )}
    </Wrapper>
  );
};
