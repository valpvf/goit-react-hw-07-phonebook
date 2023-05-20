import { useDispatch, useSelector } from 'react-redux';

import { BtnStyled } from 'components/ContactForm/ContactForm.styled';
import { ItemStyled, ListStyled } from './ContactList.styled';
import { getContact, removeContact } from 'redux/contactsOperations';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  const isContacts = useSelector(state => Boolean(state.contacts.length));

  
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const showContacts = () => {
    if (!filter) return contacts;
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const renderContacts = showContacts();
useEffect(() => {
    !isContacts && dispatch(getContact());
  }, [dispatch, isContacts]);

  return (
    <ListStyled>
      {renderContacts.map(el => (
        <ItemStyled key={el.id}>
          {el.name}: {el.number}
          <BtnStyled onClick={() => dispatch(removeContact(el.id))}>
            Delete
          </BtnStyled>
        </ItemStyled>
      ))}
    </ListStyled>
  );
};

export default ContactList;
