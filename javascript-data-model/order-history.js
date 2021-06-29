var orderHistory = [
  {
    total: 34.00,
    orderNo: '114-890738978597489-289789347',
    dateOrdered: '08-04-2020',
    dateDelivered: '08-08-2020',
    deliveryComment: '',
    shippingAddress: 'JS Masher',
    productReview: true,
    items: [
      {
        name: 'JavaScript for impatient programmers',
        price: 31.55,
        returnWindow: '09-07-2020',
        productSupport: false,
        image: 'image.com',
        author: ' Dr. Axel Rauschmayer'
      }
    ]
  },
  {
    total: 44.53,
    orderNo: '114-890738978597489-909789347',
    dateOrdered: '07-19-2020',
    dateDelivered: '07-20-2020',
    deliveryComment: 'Your package was delivered. It was handed directly to a resident.',
    shippingAddress: 'JS Masher',
    productReview: true,
    items: [
      {
        name: 'The Timeless Way of Building',
        price: 41.33,
        returnWindow: '08-19-2020',
        productSupport: false,
        image: 'image.com',
        author: 'Christopher Alexander'
      }
    ]
  },
  {
    total: 17.22,
    orderNo: '114-700738978597489-909789347',
    dateOrdered: '07-04-2020',
    dateDelivered: '07-07-2020',
    deliveryComment: 'Your package was delivered. It was handed directly to a resident.',
    shippingAddress: 'JS Masher',
    productReview: true,
    items: [
      {
        name: 'Gamecube Controller Adapter',
        price: 15.98,
        returnWindow: '08-05-2020',
        productSupport: false,
        image: 'image.com',
        author: null
      }
    ]
  },
  {
    total: 138.93,
    orderNo: '114-700738978597489-909000047',
    dateOrdered: '07-03-2020',
    dateDelivered: '07-05-2020',
    deliveryComment: '',
    shippingAddress: 'JS Masher',
    productReview: true,
    items: [
      {
        name: 'Gamecube Controller',
        price: 94.95,
        returnWindow: '08-04-2020',
        productSupport: true,
        image: 'image.com',
        author: null
      },
      {
        name: 'Gamecube Controller Adapter',
        price: 33.99,
        returnWindow: '08-04-2020',
        productSupport: false,
        image: 'image.com',
        author: null
      }
    ]
  }
];

console.log("The second order's author is", orderHistory[1].items[0].author);
