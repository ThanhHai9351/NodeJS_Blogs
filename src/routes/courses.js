const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const courseController = require('../app/controllers/CourseController');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/create', courseController.create);
router.get('/edit/:slug', courseController.edit);
router.get('/update', courseController.update);
router.delete('/:id', courseController.destroy);
router.get('/store', courseController.store);
router.get('/:slug', courseController.show);

module.exports = router;
