const http = require('http');
const app = require('./app');
const { sendMail } = require('./services/sendMail');
const initJobs = require('./jobs');

const PORT = process.env.PORT ?? 5000;
const HOST = process.env.HOST ?? 'localhost';

const httpServer = http.createServer(app);

httpServer.listen(PORT, HOST, () =>
  console.log(`Server is listening http://${HOST}:${PORT}`)
);

// sendMail();

// initJobs();
