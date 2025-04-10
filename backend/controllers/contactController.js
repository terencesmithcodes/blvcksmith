const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

// @desc    Submit a contact form
// @route   POST /api/contact
// @access  Public
const submitContact = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  // Create contact
  const contact = await Contact.create({
    name,
    email,
    message,
  });

  if (contact) {
    res.status(201).json({
      _id: contact._id,
      name: contact.name,
      email: contact.email,
      message: contact.message,
    });
  } else {
    res.status(400);
    throw new Error('Invalid contact data');
  }
});

// @desc    Get all contact submissions
// @route   GET /api/contact
// @access  Private (would require auth in real app)
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({}).sort({ createdAt: -1 });
  res.status(200).json(contacts);
});

module.exports = {
  submitContact,
  getContacts,
};