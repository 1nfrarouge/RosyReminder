const Reminder = require('../models/reminder');


module.exports = {
    index
};

async function index(req, res) {
    const reminders = await Reminder.find({user: req.user._id});
    res.render('reminders/index', { reminders });
}
