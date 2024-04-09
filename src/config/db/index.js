const { mongoose } = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/blog_courses');
    console.log('connect success');
  } catch (err) {
    console.log(err);
  }
}

module.exports = { connect };
