const express = require('express');
const cors = require('cors');

const projectRouters = require('./routes/projectRoutes');
const employeeRouters = require('./routes/employeeRoutes');
const feedRouters = require('./routes/feedRoutes');
const userRouters = require('./routes/userRoutes');
const donationRouters = require('./routes/donationRoutes');
const partnerRouters = require('./routes/partnerRoutes');

const app = express();
app.use(express.json()); // Parse JSON request bodies\
app.use(cors());

app.use('/api', userRouters); // Use the /api prefix for your routes
app.use('/api', projectRouters); 
app.use('/api', employeeRouters); 
app.use('/api', feedRouters);  
app.use('/api', donationRouters);
app.use('/api', partnerRouters);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
