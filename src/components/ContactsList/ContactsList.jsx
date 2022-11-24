import { useSelector } from 'react-redux';
// import { ListContacts } from './ContactsList.styled';

import { ContactPerson } from 'components/ContactPerson/ContactPerson';
import { SelectVisibleContacts } from 'redux/Contacts/selectors';
// import { List } from './ContactsList.styled';
import { Box } from '@mui/material';

export const ContactList = () => {
  const list = useSelector(SelectVisibleContacts);

  return (
    <>
      {list && (
        <Box sx={{ width: '100%' }}>
          {list.map(({ id, name, number }) => (
            <ContactPerson key={id} id={id} name={name} number={number} />
          ))}
        </Box>
      )}
    </>
  );
};

// return (
//   <>
//     {list && (
//       <List>
//         {list.map(({ id, name, number }) => (
//           <ContactPerson key={id} id={id} name={name} number={number} />
//         ))}
//       </List>
//     )}
//   </>
// );
