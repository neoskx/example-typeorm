/*
 * Copyright (C) 2017 Jason Henderson
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE file for details.
 */

var express = require('express');
var router = express.Router();
import {createUser} from '../dbControllers/UsersCtr';
const uuidv4 = require('uuid/v4');

/* GET users listing. */
router.post('/users', async function(req, res, next) {
  let user = req.body;
  user = await createUser(uuidv4(), user.firstName, user.lastName, user.isActive);
  res.json(user);
});

module.exports = router;
