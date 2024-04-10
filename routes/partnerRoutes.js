const express = require('express');
const router = express.Router();
const partnerController = require('../controllers/partnerController');

// GET /partners
router.get('/getPartners', partnerController.get_partners);

// POST /partner
router.post('/addPartner', partnerController.add_partner);

// PUT or UPDATE /partner
router.put('/updatePartner/:id', partnerController.update_partner);

// DELETE/partner
router.delete('/deletePartner/:id', partnerController.delete_partner);

module.exports = router;