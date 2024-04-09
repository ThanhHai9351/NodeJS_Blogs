const Course = require('../models/Course');
const { mutipleMongoToOject } = require('../../util/mongoose');

class SiteController {
  index(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render('home', { courses: mutipleMongoToOject(courses) }),
      )
      .catch((err) => next(err));
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
