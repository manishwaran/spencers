export default {
  serviceHeaders: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  expensesTableHeader: [
    { header: 'Title', accessor: 'title' },
    { header: 'Amount', accessor: 'amount' },
    { header: 'Category', accessor: 'category' },
    { header: 'Notes', accessor: 'notes' },
  ],
  defaultCategory: [
    'Fuel',
    'Food',
    'Shopping',
    'Electronics',
    'Subscriptions',
  ],
};
