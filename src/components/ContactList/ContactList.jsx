import React from 'react';
import PropTypes from 'prop-types';
import { IoTrashOutline } from 'react-icons/io5';

import { List, Item, Contact, Button } from './ContactList.styled';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <Item key={id}>
          <Contact>
            {name}: {number}
          </Contact>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            <IoTrashOutline />
          </Button>
        </Item>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
