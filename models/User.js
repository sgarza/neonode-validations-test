var User = Class('User').inherits(Argon.KnexModel)({


  // READ https://github.com/tgriesser/checkit
  validations : {
    name : ['required']
  },

  storage : (new Argon.Storage.Knex({
    tableName : 'Users'
  })),
  
  prototype : {

  }
});

module.exports = User;
