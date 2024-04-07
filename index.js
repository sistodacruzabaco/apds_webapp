const express = require('express');
// const { PrismaClient } = require('@prisma/client');
// const { Prisma } = require('@prisma/client');
// const prisma = new PrismaClient();
const cors = require('cors');

const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const EmployeesRouter = require('./routes/employees');


const app = express();

app.use(cors());
app.use(express.json()); // Parse JSON request bodies
app.use('/api', usersRouter); // Use the /api prefix for your routes
app.use('/api', projectsRouter); 
app.use('/api', EmployeesRouter); 

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
