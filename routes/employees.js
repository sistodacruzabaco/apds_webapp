const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET /employees
router.get('/getEmployees', async (req, res) => {

  try {
  
    return await res.status(200).json(await prisma.employee.findMany());

  } catch (error) {
    return await res.status(500).json(error);
  }
});

// POST /employee
router.post('/addEmployee', async (req, res) => {
  try {

    console.log(req.body);

    const {firs_name, last_name, gender, address, phone_number, provenance, 
        date_birth, date_start, date_end, user, project} = req.body;

    // const data = {
    //     firs_name,
    //     last_name,
    //     gender,
    //     address,
    //     phone_number,  
    //     provenance,
    //     date_birth,
    //     date_start,
    //     date_end
    // }

    // const newEmployee = await prisma.employee.create({
    //     data: {data, User: { connect: {id: userId}}, Project: { connect: {id: projectId}}
    //     }
    // })

    const newEmployee = await prisma.employee.create({
      data:{
          firs_name,
          last_name,
          gender,
          address,
          phone_number,  
          provenance,
          date_birth,
          date_start,
          date_end, 
          User: {
            connect:{
              user_id : user
            }
          },
          Project: {
            connect:{
              project_id : project
            }
          }
      }
    })
    return await res.status(200).json(newEmployee);

  } catch (error) {
    return await res.status(500).json(error);
  }
});

module.exports = router;