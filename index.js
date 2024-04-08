const express = require('express');
const cors = require('cors');
// const { PrismaClient } = require('@prisma/client');
// const { Prisma } = require('@prisma/client');
// const prisma = new PrismaClient();

const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const EmployeesRouter = require('./routes/employees');

const app = express();
app.use(express.json()); // Parse JSON request bodies
app.use(cors());
// app.get('/cors', (req, res) => {
//   res.set('Access-Control-Allow-Origin', '*');
// });
app.use('/api', usersRouter); // Use the /api prefix for your routes
app.use('/api', projectsRouter); 
app.use('/api', EmployeesRouter); 

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
