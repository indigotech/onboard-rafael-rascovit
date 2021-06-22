import { useLazyQuery } from '@apollo/client';
import { UsersQuery, UsersQueryDataInterface, User } from 'apollo-client/service';
import { Button } from 'components/button';
import { LoadIndicator } from 'components/loading';
import { Select } from 'components/select';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { WrapperUserList } from './styles';

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
  const history = useHistory();
  const [usersArray, setUsersArray] = useState<User[]>([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [getUsers, { data, loading, error }] = useLazyQuery<UsersQueryDataInterface>(UsersQuery, {
    fetchPolicy: 'network-only',
    variables: { offset, limit },
    onCompleted: () => {
      if (data === undefined) {
        return;
      }
      setUsersArray([...usersArray, ...data.users.nodes]);
      setShowMoreButton(data.users.pageInfo.hasNextPage);
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
    <WrapperUserList>
      <div>
        <Button type='button'>
          <Link to='/user-add' className='linkClass'>
            Adicionar usuário
          </Link>
        </Button>
        <div className='usersList'>
          {usersArray.map((user) => (
            <div className='cardList' key={user.id} onClick={() => history.push(`/user-details/${user.id}`)}>
              <p className='cardTitle'>{user.name}</p>
              <ul className='userList'>
                <li>{user.email}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      {loading && <LoadIndicator className='loadIndicator' height={100} width={100} color='black' />}
      {!loading && (
        <div className='loadMore'>
          <Select
            value={limit}
            onChange={handleLimit}
            label='Número de usuários a carregar: '
            options={limitOptions}
          ></Select>
          {showMoreButton && (
            <Button onClick={loadMoreUsers} type='button' className='loadMoreButton'>
              Carregar mais
            </Button>
          )}
        </div>
      )}
    </WrapperUserList>
  );
};
