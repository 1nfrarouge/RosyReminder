const Reminder = require('../models/reminder');


module.exports = {
    index,
    new: newReminder
};

async function index(req, res) {
    const reminders = await Reminder.find({user: req.user._id});
    res.render('reminders/index', { reminders });
}

function newReminder(req, res) {
    res.render('reminders/new');
}