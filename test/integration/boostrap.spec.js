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
  mongoose.connect('mongodb://localhost/emis-incident-type', done);
});


// clear database
before(wipe);


// clear database
after(wipe);
