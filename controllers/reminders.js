const Reminder = require('../models/reminder');


module.exports = {
    index,
    new: newReminder,
    create
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
    try {
        await Reminder.create(req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect('/reminders');
}
