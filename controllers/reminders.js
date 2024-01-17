const Reminder = require('../models/reminder');


module.exports = {
    index,
    new: newReminder,
    create,
    delete: deleteReminder
};

async function index(req, res) {
    const reminders = await Reminder.find({user: req.user._id});
    res.render('reminders/index', { reminders });
}

function newReminder(req, res) {
    res.render('reminders/new');
}

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.date += 'T00:00';
    try {
        await Reminder.create(req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect('/reminders');
}

async function deleteReminder(req, res) {
    await Reminder.findOneAndDelete(
      // Query object that ensures the book was created by the logged in user
      {_id: req.params.id, user: req.user._id}
    );
    // Deleted reminder, so must redirect to index
    res.redirect('/reminders');
  }