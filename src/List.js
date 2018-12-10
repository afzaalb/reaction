import React from 'react';

const List = ({items}) => (
  items.map(i => <li key={i}>{i}</li>)
);

export default List;
