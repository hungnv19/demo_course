const express = require('express');
const router = express.Router();

const courseController = require('../app/controller/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/edit/:id', courseController.edit);
router.put('/update/:id', courseController.update);
router.delete('/delete/:id', courseController.delete);
router.get('/:slug', courseController.show);


module.exports = router;
