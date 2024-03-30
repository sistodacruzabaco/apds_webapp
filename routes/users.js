const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

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

// POST /user
router.post('/addUser', async (req, res) => {
  try {

    const {username, email, hashed_password} = req.body;
    const hashedPassword = await bcrypt.hash(hashed_password,10);

    const data = {
      username: username,
      email: email,
      hashed_password: hashedPassword,
    }

    const newUser = await prisma.user.create({
      data: data,
    })

    return await res.status(200).json(newUser);

  } catch (error) {
    return await res.status(500).json(error);
  }
});

// PUT/user
router.put('/updateUser/:id', async (req, res) => {

  try{
    const {username, email, hashed_password} = req.body;
    const hashedPassword = await bcrypt.hash(hashed_password,10);
    const {id} = req.params;

    const updatedUser = await prisma.user.update({
      where:{
        id:id,
      },

      data : {
        username: username,
        email: email,
        hashed_password: hashedPassword,
      }

    })
    return await res.status(200).json(updatedUser);
  }catch(erro){
    return await res.status(500).json(error);
  }
})


// DELETE/user
router.delete('/deleteUser/:id', async (req, res) => {

  try{
    const {id} = req.params;

    const deletedUser = await prisma.user.delete({
      where:{
        id:id,
      }
    })

    return await res.status(200).json({success:true});

  }catch(error){
    return await res.status(500).json(error);
  }
})

module.exports = router;