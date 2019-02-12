import express from 'express';
import User from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import config from '../config'
import axios from 'axios'

let router = express.Router();

router.post('/', (req, res) => {
  const { identifier, password } = req.body;

  User.query({
    where: { username: identifier },
    orWhere: { email: identifier }
  }).fetch().then(user => {
    if (user) {
      if (bcrypt.compareSync(password, user.get('password_digest'))) {
        console.log('success login')
        const token = jwt.sign({
          id: user.get("id"),
          username: user.get("username")
        }, config.jwtSecret)
        console.log("TOKEN: " + token)
        res.json({ token })

      } else {
        res.status(401).json({ errors: { form: "Invalid Credentials" } })
      }
    } else {
      res.status(401).json({ errors: { form: "Invalid Credentials" } })
    }
  })
});

// facebook login
router.post('/facebook', (req, res) => {

  if (req.body.access_token) {
    var accessToken = req.body.access_token;

    axios.get(`https://graph.facebook.com/me?access_token=${accessToken}`)
      .then((data) => {
        if (!data.data.error) {
          var payload = {
            id: data.data.id,
            username: data.data.name
          };
          const token = jwt.sign(payload, config.jwtSecret);
          res.json({
            token: token
          });
        } else {
          res.sendStatus(401);
        }
      }).catch((err) => {
        console.log(err);
        res.status(401).json({ errors: { form: "Invalid Credentials" } })
      });
  } else {
    res.status(401).json({ errors: { form: "Invalid Credentials" } })
  }
})

export default router;