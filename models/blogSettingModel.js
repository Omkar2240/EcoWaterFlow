const mongoose = require("mongoose");

// for collection data of blogs
const blogSettingSchema = mongoose.Schema({
  blog_title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  blog_image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("BlogSetting", blogSettingSchema); // for using globally
