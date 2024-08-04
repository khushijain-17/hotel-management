const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./db');

app.use(bodyParser.json());

app.post('/book', (req, res) => {
  const { user_id, room_id, check_in, check_out } = req.body;

  const query = 'INSERT INTO bookings (user_id, room_id, check_in, check_out) VALUES (?, ?, ?, ?)';
  connection.query(query, [user_id, room_id, check_in, check_out], (err, result) => {
    if (err) {
      res.status(500).send('Error booking room');
    } else {
      res.status(200).send('Room booked successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
