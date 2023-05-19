import { ContactForm, ContactList, Filter } from 'components';
import {
  TitleStyled,
  SubtitleStyled,
} from '../components/ContactForm/ContactForm.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from 'redux/contactsOperations';

export const App = () => {
  const dispatch = useDispatch();
  const isContacts = useSelector(state => Boolean(state.phoneBook.contacts.length));


  useEffect(() => {
    !isContacts && dispatch(getContact());
  }, [dispatch, isContacts]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <TitleStyled>Phonebook</TitleStyled>
      <ContactForm />
      <SubtitleStyled>Contacts</SubtitleStyled>
      <Filter />
      <ContactList />
    </div>
  );
};
