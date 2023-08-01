const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController')
const healthContainer = require('../controllers/healthReminderPageController');





router.get('/', homeController.home);
router.use('/', healthContainer.home )

module.exports = router;