export default {
  project: {
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
  unwind: {
    $unwind: '$category',
  },
  matchResult: {
    $match: {
      category: '',
    },
  },
  group: {
    $group: {
      _id: {
        year: '$year',
        category: '$category',
      },
      total: {
        $sum: '$amount',
      },
    },
  },
  sortGroup: {
    $sort: {
      '_id.year': 1,
    },
  },
};
