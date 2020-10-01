import { MdLocalPizza as icon } from 'react-icons/md';

export default {
  // name in schema
  name: 'pizza',
  // human readable name
  title: 'Pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza',
    },
  ],
};
