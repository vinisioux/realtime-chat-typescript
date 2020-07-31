import React, { useEffect, useState, useCallback } from 'react';

import api from '../../services/api';

import { useAuth } from '../../hooks/auth';

import { Container, Title, Separator, UserContent } from './styles';

interface User {
  _id: string;
  name: string;
  username: string;
  status: 'online' | 'offline';
}

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const { user: userAuth } = useAuth();

  const loadUsers = useCallback(() => {
    api.get('users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const handleChangeStatus = useCallback(
    async (newStatus: string) => {
      await api.put('status', {
        newStatus,
      });

      loadUsers();
    },
    [loadUsers]
  );

  return (
    <Container>
      <Title>Usuários</Title>
      <Separator />
      {users.map((user) => (
        <UserContent
          key={user._id}
          status={user.status}
          isUserAuth={user._id === userAuth._id}
        >
          <strong>
            {user.username} {user._id === userAuth._id && <span>~ you</span>}
          </strong>
          <button
            type='button'
            disabled={user._id !== userAuth._id}
            onClick={() =>
              handleChangeStatus(
                user.status === 'offline' ? 'online' : 'offline'
              )
            }
          />
        </UserContent>
      ))}
    </Container>
  );
};

export default UsersList;
