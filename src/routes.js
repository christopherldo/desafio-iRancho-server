const express = require('express');
const router = express.Router();

const {
  pessoaController,
  animalController
} = require('./app/controllers');

const {
  pessoaValidator,
  animalValidator
} = require('./app/validators');

// Know if server is on by requesting this route
router.get('/ping', (req, res) => {
  res.json({
    pong: true,
  });
});

/* 
 * Pessoa related routes
 */
router.get('/pessoa/:id',
  pessoaValidator.readById,
  pessoaController.readById,
);

router.put('/pessoa/:id',
  pessoaValidator.update,
  pessoaController.update,
);

router.patch('/pessoa/:id',
  pessoaValidator.toggleActivate,
  pessoaController.toggleActivate,
);

router.delete('/pessoa/:id',
  pessoaValidator.delete,
  pessoaController.delete,
);

router.get('/pessoa/',
  pessoaController.readAll,
);

router.post('/pessoa/',
  pessoaValidator.create,
  pessoaController.create,
);

/* 
 * Animal related routes
 */
router.get('/animal/:id',
  animalValidator.readById,
  animalController.readById,
);

router.put('/animal/:id',
  animalValidator.update,
  animalController.update,
);

router.delete('/animal/:id',
  animalValidator.delete,
  animalController.delete,
);

router.get('/animal/',
  animalController.readAll,
);

router.post('/animal/',
  animalValidator.create,
  animalController.create,
);

module.exports = router;