const User = require("../models/User");

const addContactDetails = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newDetails = new User({
      name,
      email,
      subject,
      message,
    });

    await newDetails.save();
    res.json({
      message:
        "Thank you! Your message has been submitted. Someone from our team will contact you shortly",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  addContactDetails,
};
