export default [
  {
    $project: {
      category: '$category',
      amount: '$amount',
      year: {
        $substr: ['$date', 0, 4],
      },
      month: {
        $substr: ['$date', 5, 2],
      },
      day: {
        $substr: ['$date', 8, 2],
      },
    },
  },
  {
    $unwind: '$category',
  },
  {
    $match: {
      category: '',
    },
  },
];
