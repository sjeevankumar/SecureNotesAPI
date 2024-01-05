const express = require('express');
const noteController = require('../controllers/noteController');
const authenticateUser = require('../middlewares/authenticateUser')

const router = express.Router();

// Use router.route for the '/api/notes' route
router.route('/')
  .get(authenticateUser,noteController.getAllNotes)
  .post(authenticateUser,noteController.createNote);

// Use router.route for the '/api/notes/:id' route
router.route('/:id')
  .get(authenticateUser,noteController.getNoteById)
  .put(authenticateUser,noteController.updateNote)
  .delete(authenticateUser,noteController.deleteNote);

// Handle the '/api/notes/:id/share' route separately
router.post('/:id/share', authenticateUser,noteController.shareNote);

module.exports = router;
