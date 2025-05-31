import Contact from '../Contact/Contact';
import css from './ContactList.module.css'

export default function ContactList({ contacts, deleteContact }) {
    return (
        <ul className={css.container}>
            {contacts.map((contact) => {
                return <li className={css.contactItem}
                    key={contact.id}>
                    <Contact deleteContact={deleteContact} name={contact.name} number={contact.number} id={contact.id} />
                </li>;
            })}
        </ul>
    )
}

// we need contacts array here
// do we need query here?..
// + deleting action


// goit example with tasks:

// // src/components/TaskList/TaskList.js

// // 1. Імпортуємо хук
// import { useSelector } from 'react-redux';
// import { Task } from '../Task/Task';

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case 'active':
//       return tasks.filter((task) => !task.completed);
//     case 'completed':
//       return tasks.filter((task) => task.completed);
//     default:
//       return tasks;
//   }
// };

// export const TaskList = () => {
// 	// 2. Отримуємо масив завдань із стану Redux
//   const tasks = useSelector((state) => state.tasks.items);

//   // 3. Отримуємо значення фільтра із стану Redux
//   const statusFilter = useSelector((state) => state.filters.status);

//   // 4. Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
//   const visibleTasks = getVisibleTasks(tasks, statusFilter);

//   return (
//     <ul className={css.list}>
//       {visibleTasks.map((task) => (
//         <li className={css.listItem} key={task.id}>
//           <Task task={task} />
//         </li>
//       ))}
//     </ul>
//   );
// };
