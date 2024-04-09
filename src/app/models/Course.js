const { mongoose } = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String, minLenght: 1 },
    description: { type: String, minLenght: 1, maxLenght: 10000 },
    image: { type: String },
    slug: { type: String, slug: 'name' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Courses', Course);
