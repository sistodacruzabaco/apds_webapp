const express = require('express');
// const { PrismaClient } = require('@prisma/client');

const app = express();
// const prisma = new PrismaClient();

const usersRouter = require('./routes/users');

app.use(express.json()); // Parse JSON request bodies
app.use('/api', usersRouter); // Use the /api prefix for your routes


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});