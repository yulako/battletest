module.exports = {
  // Category 1: Primary Project Information
  server_location: '../server.js', // server imported form server folder
  PORT: 8000, // the port the server is using
  model_location: '../model.js', // import model form server/database folder

  functionForTesting: [ // specify all the parameter we need to generate the test file
    {
      route: '/products', // endpoint that we will be testing
      method: 'GET', // request method
      vectors: [
        {
          section: 'body', // the part of the request we will our info
          rule: 'choose_one', // how we are generating our request. if we choose one then for the rest of the test we will use one payload
          key: 'product_category', // req.body[key] = payload (one element in the array)
          payload: ['shoes', 'bags', 'belts'],
          payload_default: ['shoes'],
        },
        {
          section: 'body',
          rule: 'choose_many',
          key: 'season',
          payload: ['summer', 'winter', 'fall', 'spring'], // req.body[key] = payload ( send and empty,and p_def if p_d_o is false  else we send only p_def)
          payload_default: [['summer', 'spring'], ['summer']],
          payload_default_only: true,
        },
        {
          section: 'body',
          rule: 'choose_range',
          key: ['min_price', 'max_price'],
          payload: [[0, 10], [100, 1000]],
          payload_default: [[0, 100], [10, 1000]], // p_d_o === false [10, 100], [0, 1000], and the payload default
        },
        {
          section: 'body',
          rule: 'choose_each', // test all the entire payload array
          key: 'file_type', // how the user wants the response object formatted
          payload: ['json', 'csv'],
          payload_default: ['json'],
          payload_default_only: true, // we only test the payload_defauly
        },
      ],
    },
  ],
};
