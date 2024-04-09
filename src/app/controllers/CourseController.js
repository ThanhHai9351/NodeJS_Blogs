const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', {
          course: course.toObject(),
        });
      })
      .catch(next);
  }

  create(req, res, next) {
    res.render('courses/create');
  }

  store(req, res, next) {
    const data = req.query;
    const course = new Course(data);
    course
      .save()
      .then(() => res.redirect('/'))
      .catch((err) => {});
  }

  edit(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/edit', {
          course: course.toObject(),
        });
      })
      .catch(next);
  }

  update(req, res, next) {
    Course.updateOne({ name: req.query.name }, req.query)
      .then(() => {
        res.redirect('/');
      })
      .catch(next);
  }

  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(()=>res.redirect('back'))
      .catch(next);
  }
}

module.exports = new CourseController();
