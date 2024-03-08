const db = require("../model/helper");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  try {
    let result = await db("SELECT * FROM table_volunteers"); 
    res.status(200).send(result.data); // send data to client.
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});



router.post("/", async (req, res) => {
  // The request's body is available in req.body. done with object destructuring.
  const { first_name, last_name, phone_number, sign_up_date, shift_time, items_to_donate } = req.body;
  // sql syntax is tested & correct
  const sql = `
    INSERT INTO table_volunteers (first_name, last_name, phone_number, sign_up_date, shift_time, items_to_donate)
    VALUES ('${first_name}', '${last_name}', '${phone_number}', '${sign_up_date}', '${shift_time}', '${items_to_donate}')
    `; 
  try {
    await db(sql); 
    let result = await db("SELECT * FROM table_volunteers"); 
    res.status(201).send(result.data); // send data to client. 201 means new resource created.
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;

