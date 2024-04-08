const express = require('express');
const router = express.Router(); 
const feedController = require('../controllers/feedController');

// GET /feeds
router.get('/getFeeds', feedController.get_feeds);

// POST /feed
router.post('/addFeed', feedController.add_feed);

// PUT/feed
router.put('/updateFeed/:id', feedController.update_feed)

// DELETE/feed
router.delete('/deleteFeed/:id', feedController.delete_feed);

module.exports = router;