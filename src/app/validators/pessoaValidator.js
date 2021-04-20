const {
  checkSchema
} = require('express-validator');

const {
  pessoaService
} = require('../services');

module.exports = {
  create: checkSchema({
    no_pessoa: {
      trim: true,
      isLength: {
        options: {
          min: 2,
        },
      },
      errorMessage: 'O nome precisa conter pelo menos 2 caracteres',
    },
    no_email: {
      isEmail: true,
      normalizeEmail: true,
      errorMessage: 'O e-mail da pessoa precisa ser um e-mail válido',
      custom: {
        options: async value => {
          let pessoa;

          try {
            pessoa = await pessoaService.getPessoaByEmail(value);
          } catch (error) {
            throw new Error(error.message);
          };

          if (pessoa) {
            throw new Error('Esse e-mail não está disponível para cadastro');
          };

          return true;
        },
      },
    },
    endereco: {
      trim: true,
      isLength: {
        options: {
          min: 2,
        },
      },
      errorMessage: 'O endereço precisa conter pelo menos 2 caracteres',
    },
    sexo: {
      notEmpty: true,
      errorMessage: 'O sexo precisa ser preenchido',
      custom: {
        options: async value => {
          if (value) {
            const acceptedValues = ['M', 'F'];

            if (acceptedValues.includes(value) === false) {
              throw new Error('O valor do sexo precisa ser M ou F');
            };

            return true;
          };
        },
      },
    },
  }),
  readById: checkSchema({
    id: {
      notEmpty: true,
      isInt: true,
      toInt: true,
      errorMessage: 'O id precisa ser um número inteiro',
      custom: {
        options: async value => {
          if (await pessoaService.readById(value) === null) {
            throw new Error('Pessoa não encontrada');
          };

          return true;
        },
      },
    },
  }),
  update: checkSchema({
    id: {
      notEmpty: true,
      isInt: true,
      toInt: true,
      errorMessage: 'O id precisa ser um número inteiro',
      custom: {
        options: async value => {
          if (await pessoaService.readById(value) === null) {
            throw new Error('Pessoa não encontrada');
          };

          return true;
        },
      },
    },
    no_pessoa: {
      optional: true,
      trim: true,
      isLength: {
        options: {
          min: 2,
        },
      },
      errorMessage: 'O nome precisa conter pelo menos 2 caracteres',
    },
    no_email: {
      optional: true,
      isEmail: true,
      normalizeEmail: true,
      errorMessage: 'O e-mail da pessoa precisa ser um e-mail válido',
      custom: {
        options: async (value, {
          req
        }) => {
          let pessoa;

          try {
            pessoa = await pessoaService.getPessoaByEmail(value);
          } catch (error) {
            throw new Error(error.message);
          };

          if (pessoa) {
            if (pessoa.id !== req.params.id) {
              throw new Error('Esse e-mail já está em uso');
            };

            return true;
          };

          return true;
        },
      },
    },
    endereco: {
      optional: true,
      trim: true,
      isLength: {
        options: {
          min: 2,
        },
      },
      errorMessage: 'O endereço precisa conter pelo menos 2 caracteres',
    },
    sexo: {
      optional: true,
      notEmpty: true,
      errorMessage: 'O sexo precisa ser preenchido',
      custom: {
        options: async value => {
          if (value) {
            const acceptedValues = ['M', 'F'];

            if (acceptedValues.includes(value) === false) {
              throw new Error('O valor do sexo precisa ser M ou F');
            };

            return true;
          };
        },
      },
    },
  }),
  delete: checkSchema({
    id: {
      notEmpty: true,
      isInt: true,
      toInt: true,
      errorMessage: 'O id precisa ser um número inteiro',
      custom: {
        options: async value => {
          if (await pessoaService.readById(value) === null) {
            throw new Error('Pessoa não encontrada');
          };

          return true;
        },
      },
    },
  }),
};