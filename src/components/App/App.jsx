// import { useState, useMemo, useEffect } from 'react'
import ContactList from '../ContactList/ContactList'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
// import { useDebounce } from 'use-debounce';
import css from './App.module.css'
  
export default function App() {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
    </div>
  )
  // const [contacts, setContacts] = useState(() => {
  //   let savedContacts = window.localStorage.getItem("saved-contacts");
  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   } else {
  //     return initContacts;
  //   }
  // })
  // const [searchQuery, setSearchQuery] = useState("");
  // const [debouncedSearchQuery] = useDebounce(searchQuery, 300);
  
 

  // useEffect(() => {
  //   window.localStorage.setItem("saved-contacts", JSON.stringify(contacts))
  // }, [contacts]);
  
  // const visibleContacts = useMemo(() => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()))
  // }, [debouncedSearchQuery, contacts]);

}