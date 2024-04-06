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

    // console.log(req.body)

    const data = {
      project_name: project_name,
      budget: budget,
      balance_available: balance_available,
      local_implementation: local_implementation,
      date_start: date_start,
      date_end: date_end,
      project_code: project_code,
      account_number_project: account_number_project,
      project_status: project_status,
      type_currency: type_currency,
    }

    const isProjectNameUnique = await prisma.project.findUnique({
        where:{
          project_name : project_name,
        }
    });
    
    if(isProjectNameUnique){
      return await res.status(400).json({message: "This Project is already exists!"});
    }

    // console.log(project_name);

    const newProject = await prisma.project.create({
      data: data,
    })

    return await res.status(200).json(newProject);

  } catch (error) {
    return await res.status(500).json(error);
  }
});

// PUT/project
router.put('/updateProject/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const data = req.body;

    const isProjectExists = await prisma.project.findUnique({
      where:{
        id : id,
      }
    });
  
    if(!isProjectExists){
      return await res.status(400).json({message: "This Project does not exists!"});
    }

    const updatedProject = await prisma.project.update({
      where: {
        id: id,
      },
      data: data,
    })
    return await res.status(200).json(updatedProject);

  } catch (error) {
    return await res.status(500).json(error);
  }
})

// DELETE/project
router.delete('/deleteProject/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const isProjectExists = await prisma.project.findUnique({
      where:{
        id : id,
      }
    });
  
    if(!isProjectExists){
      return await res.status(400).json({message: "This Project does not exists!"});
    }

    const deletedProject = await prisma.project.delete({
      where: {
        id: id,
      },
    })
    return await res.status(200).json(deletedProject);

  } catch (error) {
    return await res.status(500).json(error);
  }
})

router.get('/getUniqueProjectByName/:project_name', async(req,res)=>{
  const {project_name} = req.params;

  try{
    const isProjectUniqueName = await prisma.project.findUnique({
      where:{
        project_name : project_name,
      }
  });
  
  if(!isProjectUniqueName){
    return await res.status(400).json({message: "This Project does not exist!"});
  }
  return await res.status(200).json(isProjectUniqueName);

  }catch(error){
    return await res.status(500).json(error);
  };
});

module.exports = router;