const express = require('express');
const router = express.Router();
const donationController = require('../controllers/activityController');

// GET / Activities
router.get('/getActivities', donationController.get_activities);

// POST /Activities
router.post('/addActivity', donationController.add_activity);

// PUT or UPDATE / Activity
router.put('/updateActivity/:id', donationController.update_activity);

// DELETE/ Activity
router.delete('/deleteActivity/:id', donationController.delete_donation);

module.exports = router;