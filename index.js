const express = require('express');
const cors = require('cors');
<<<<<<< HEAD
// const { PrismaClient } = require('@prisma/client');
// const { Prisma } = require('@prisma/client');
// const prisma = new PrismaClient();
=======
>>>>>>> 7fa7e61922128072750d00b90fcb43d94825f2c8

const projectRouters = require('./routes/projectRoutes');
const employeeRouters = require('./routes/employeeRoutes');
const feedRouters = require('./routes/feedRoutes');
const userRouters = require('./routes/userRoutes');

const app = express();
<<<<<<< HEAD
app.use(express.json()); // Parse JSON request bodies
app.use(cors());
// app.get('/cors', (req, res) => {
//   res.set('Access-Control-Allow-Origin', '*');
// });
app.use('/api', usersRouter); // Use the /api prefix for your routes
app.use('/api', projectsRouter); 
app.use('/api', EmployeesRouter); 
=======
app.use(express.json()); // Parse JSON request bodies\
app.use(cors());

app.use('/api', userRouters); // Use the /api prefix for your routes
app.use('/api', projectRouters); 
app.use('/api', employeeRouters); 
app.use('/api', feedRouters);  
>>>>>>> 7fa7e61922128072750d00b90fcb43d94825f2c8

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
