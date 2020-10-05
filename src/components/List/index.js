import React from 'react';

import Card from '../Card';

import { Container, Addicon } from './styles';

export default function List({ data }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <Addicon />
          </button>
        )}
      </header>

      <ul>
        { data.cards.map(card => <Card key={card.id} data={card} />)}
      </ul>
    </Container>
  );
};
