'use strict';


/* dependencies */
const mongoose = require('mongoose');


function wipe(done) {
  if (mongoose.connection && mongoose.connection.dropDatabase) {
    mongoose.connection.dropDatabase(done);
  } else {
    done();
  }
}


//setup database
before(function (done) {
  const options = { useNewUrlParser: true };
  mongoose.connect('mongodb://localhost/emis-incident-type', options, done);
});


// clear database
before(wipe);


// clear database
after(wipe);
