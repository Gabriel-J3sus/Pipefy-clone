import React from 'react';

import { Container, Addicon } from './styles';

const List = () => {
  return (
    <Container>
      <header>
        <h2>Tarefas</h2>
        <button type="button">
          <Addicon />
        </button>
      </header>
    </Container>
  );
};

export default List;
