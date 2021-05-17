import { createSelector } from '@reduxjs/toolkit'

export const loading = ({ phonebook }) => phonebook.loading;

export const getFilter = (state) => state.phonebook.filter;

export const getContacts = (state) => state.phonebook.contacts;

export const filteredContacts = createSelector(
    [getFilter, getContacts],
    (filter, contacts) => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    }
)

// export const filteredContacts = (state) => {
//     const contacts = getContacts(state);
//     const filter = getFilter(state);

//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
// }
