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
// DELETE /reminders/:id	remindersCtrl.delete (delete action)
router.delete('/:id', remindersCtrl.delete);
// GET	/reminders/:id/edit	remindersCtrl.edit (edit action)
router.get('/:id/edit', remindersCtrl.edit);
// PUT	/reminders/:id	remindersCtrl.update (update action)
router.put('/:id', remindersCtrl.update);

module.exports = router;