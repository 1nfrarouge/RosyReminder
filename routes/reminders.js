const express = require('express');
const router = express.Router();
const remindersCtrl = require('../controllers/reminders');


// All paths start with /reminders

// GET /reminders  (index action/functionality)
router.get('/', remindersCtrl.index);
// GET /reminders/new (new action)
router.get('/new', remindersCtrl.new);
// POST /reminders (create action)
router.post('/', remindersCtrl.create);

module.exports = router;