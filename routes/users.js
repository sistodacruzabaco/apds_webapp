const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET /users
router.get('/getUsers', async (req, res) => {

  try {
  
    return await res.status(200).json(await prisma.user.findMany());

  } catch (error) {
    return await res.status(500).json(error);
  }
});

// POST /users
router.post('/addUser', async (req, res) => {
  console.log("post");

  try {
    const newUser = await prisma.user.create({
      data: {
        username: 'Alice',
        email: 'alice@prisma.io',
        hashed_password: '1234567890',
      },
    })

    return await res.status(200).json({ success: true });

  } catch (error) {
    return await res.status(500).json(error);
  }
});

module.exports = router;