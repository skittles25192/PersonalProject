const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Temple API'
  },
  host: 'localhost:3000',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./Routes/index.js'];

// generate swagger.json
//swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
 swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
   await import('./server.js');
 });