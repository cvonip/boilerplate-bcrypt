'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt = require('bcrypt');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  if (err) throw err;
  bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
    if (err) throw err;
    // res == true
  });
  bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
    if (err) throw err;
    // res == false
  });
});



//END_ASYNC

//START_SYNC



//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
