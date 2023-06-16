import React from "react";
import PropTypes from 'prop-types';
import { Button, ContactItem, ListItem } from "./ContactsList.styled";
export const ContactsList=({contacts, onDelete })=>{
        return (
            <ListItem>
                {contacts.map(({ name, number, id }) => {
                    return (
                        <ContactItem key={id}>
                            <span>
                                {name}: {number}
                            </span>
                            <Button type="button" onClick={() => onDelete(id)}>
                                Delete
                            </Button>
                        </ContactItem>
                    );
                })}
            </ListItem>
        )
}
    
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// export class ContactsList extends Component {
//     render() {
//         const { contacts, onDelete } = this.props;
//         return (
//             <ListItem>
//                 {contacts.map(({ name, number, id }) => {
//                     return (
//                         <ContactItem key={id}>
//                             <span>
//                                 {name}: {number}
//                             </span>
//                             <Button type="button" onClick={() => onDelete(id)}>
//                                 Delete
//                             </Button>
//                         </ContactItem>
//                     );
//                 })}
//             </ListItem>
//         )
//     }
// }
