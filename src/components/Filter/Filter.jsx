import React from 'react';
import { nanoid } from "nanoid";
import { FormContainer, Input, Label } from "components/Form/Form.styled";
import PropTypes from 'prop-types';


export const Filter = ({ value, onChange }) => {
   
   const filterId = nanoid();
    
return (
      <FormContainer>
        <Label htmlFor={filterId}>Find contacts by name</Label>
        <Input
          id={filterId}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </FormContainer>
    );
  }

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


// export class Filter extends Component {
//   filterId = nanoid();

//   render() {
//     const { value, onChange } = this.props;

//     return (
//       <FormContainer>
//         <Label htmlFor={this.filterId}>Find contacts by name</Label>
//         <Input
//           id={this.filterId}
//           type="text"
//           name="filter"
//           value={value}
//           onChange={onChange}
//         />
//       </FormContainer>
//     );
//   }
// }
// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };