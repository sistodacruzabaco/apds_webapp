const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET /projects
router.get('/getProjects', async (req, res) => {

  try {
    // console.log('projectos');
    return await res.status(200).json(await prisma.project.findMany());

  } catch (error) {
    return await res.status(500).json(error);
  }
});

// POST /project
router.post('/addProject', async (req, res) => {
  try {

    const {
      project_name,
      budget,
      balance_available,
      local_implementation,
      date_start,
      date_end,
      project_code,
      account_number_project,
      project_status,
      type_currency      
    } = req.body;

    console.log(req.body)

    const data = {
      project_name : project_name,
      budget : budget,
      balance_available : balance_available,
      local_implementation : local_implementation,
      date_start : date_start,
      date_end : date_end,
      project_code : project_code,
      account_number_project : account_number_project,
      project_status : project_status,
      type_currency : type_currency,
    }

    const newProject = await prisma.project.create({
      data: data,
    })

    return await res.status(200).json(newProject);

  } catch (error) {
    return await res.status(500).json(error);
  }
});

module.exports = router;