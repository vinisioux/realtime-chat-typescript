import React from 'react';

import Header from '../../components/Header';
import UsersList from '../../components/UsersList';
import Chat from '../../components/Chat';
// import Chat2 from '../../components/Chat2';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <UsersList />
        <Chat />
        {/* <Chat2 /> */}
      </Content>
    </Container>
  );
};

export default Home;
