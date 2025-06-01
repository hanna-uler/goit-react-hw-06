import Contact from '../Contact/Contact';
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';

export default function ContactList() {
    const contacts = useSelector((state) => state.contacts.items);
    return (
        <ul className={css.container}>
            {contacts.map((contact) => {
                return <li className={css.contactItem}
                    key={contact.id}>
                    <Contact name={contact.name} number={contact.number} id={contact.id} />
                </li>;
            })}
        </ul>
    )
}