module.exports = class Us {

  schema() {
    return {
      name: {type: String, required: true},
      contact: {
        phone: String,
        mail: {
          hq: String,
          support: String
        }
      },
      place: {
        city: {type: String},
        adress: {type: String},
        postcode: {type: Number}
      },
      about: {
        header: {type: String},
        texts: {type: Array}
      },
      jobs: {
        header: {type: String},
        texts: {type: Array}
      }
    };
  }
};
