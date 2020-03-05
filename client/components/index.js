/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export { default as Navbar } from './navbar';
export { default as UserHome } from './user-home';
export { default as BoatList } from './boatList';
export { default as SingleBoat } from './singleBoat';
export { default as GuestHome } from './guest-home';
export { default as Cart } from './cart';
export { default as allUsersAdminView } from './allUsersAdminView';
export { default as Payment } from './payment';

export { Login, Signup } from './auth-form';
