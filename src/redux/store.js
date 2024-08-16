import {legacy_createStore} from 'redux';
import {contactsReducer} from './reducers/contacts';

export const store = legacy_createStore(contactsReducer);
