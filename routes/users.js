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

    const {email, hashed_password, role} = req.body;
    const hashedPassword = await bcrypt.hash(hashed_password,10);

    const isEmailUnique = await prisma.user.findUnique({
      where:{
        email: email
      }
    });
  
    if(isEmailUnique){
      return await res.status(400).json({message: "There is a user with this email"});
    }

    const data = {
      email: email,
      hashed_password: hashedPassword,
      role : role
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
  const {id} = req.params;

  try{
    const {
      // email, 
      hashed_password, 
      role
    } = req.body;
    
    const hashedPassword = await bcrypt.hash(hashed_password,10);

    const isUserExists = await prisma.user.findUnique({
      where:{
        id
      }
    });
  
    if(!isUserExists){
      return await res.status(400).json({message: "This user does no longer exists!"});
    }

    const updatedUser = await prisma.user.update({
      where:{
        id
      },

      data : {
        // email: email,
        hashed_password: hashedPassword,
        role: role,
      }
    })
    return await res.status(200).json(updatedUser);

  }catch(error){
    return await res.status(500).json(error);
  }
})


// DELETE/user
router.delete('/deleteUser/:id', async (req, res) => {
  const {id} = req.params;

  try{
    const isUserExists = await prisma.user.findUnique({
      where:{
        id
      }
    });
  
    if(!isUserExists){
      return await res.status(400).json({message: "This user does no longer exists!"});
    }

    const deletedUser = await prisma.user.delete({
      where:{
        id
      }
    })
    // return await res.status(200).json({success:true});
    return await res.status(200).json({deletedUser});

  }catch(error){
    return await res.status(500).json(error);
  }
})

module.exports = router;