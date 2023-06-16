import React, { Component } from "react";
import { nanoid } from "nanoid";
import { FormContainer, Input, Label } from "components/Form/Form.styled";
import PropTypes from 'prop-types';

export class Filter extends Component {
  filterId = nanoid();

  render() {
    const { value, onChange } = this.props;

    return (
      <FormContainer>
        <Label htmlFor={this.filterId}>Find contacts by name</Label>
        <Input
          id={this.filterId}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </FormContainer>
    );
  }
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};