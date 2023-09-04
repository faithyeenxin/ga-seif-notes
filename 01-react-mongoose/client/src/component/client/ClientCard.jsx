import React from 'react';

const ClientCard = ({ clients }) => {
  return (
    <>
      {clients?.map((client, idx) => (
        <div
          key={idx}
          style={{ borderWidth: 1, borderStyle: 'solid', padding: 10 }}
        >
          <h1>email: {client.email}</h1>
          <h2>username: {client.username}</h2>
        </div>
      ))}
    </>
  );
};

export default ClientCard;
