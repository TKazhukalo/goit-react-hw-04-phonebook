import React from "react";
import { Component } from "react";
import { nanoid } from "nanoid";
import { Container } from "./App.styled";
import { ContactsList } from "components/ContactsList/ContactsList";
import { Filter } from "components/Filter/Filter";
import { Form } from "components/Form/Form";
import { Section } from "components/Section/Section";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',

  
  }
  componentDidMount() {
    // console.log('Mount')
    const savedContactList = JSON.parse(localStorage.getItem('contacts'));
    if (savedContactList) {
      this.setState({
        contacts: savedContactList})
    }
  }
    componentDidUpdate(prevProps, prevState) {
     // console.log('update')
      if (prevState.contacts !== this.state.contacts) {
        window.localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
      }
    }
  
  handleCreateContacts = (currentValue) => {
    const alreadyContacts = this.state.contacts.some(
      obj => obj.name === currentValue.name);
    alreadyContacts ? alert(`${currentValue.name} is already in contacts`) :
      this.setState(prevState => {
        const newContact = {
          name: currentValue.name,
          number: currentValue.number,
          id: nanoid(),
      
        };
        return { contacts: [...prevState.contacts, newContact] };
      });
  };
    
  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  changeFilter = evt => {
    this.setState({ filter: evt.target.value });
  }
  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filtredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
   
    return (
      <Container>
        <Section title="Phonebook">
          <Form onSubmit={this.handleCreateContacts} />
        </Section>

        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={filtredContacts}
            onDelete={this.handleDeleteContact}
          />
        </Section>
      </Container>
    );
  }
};
