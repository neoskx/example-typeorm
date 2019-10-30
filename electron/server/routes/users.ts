/*
 * Copyright (C) 2017 Jason Henderson
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE file for details.
 */

var express = require('express');
var router = express.Router();
import {createUser, getUsers} from '../dbControllers/UsersCtr';

/* GET users listing. */
router.post('/users', async function(req, res, next) {
  let user = req.body;
  user = await createUser(user.firstName, user.lastName, user.isActive, user.profile, user.photos);
  res.json(user);
});

router.get('/users', async (req, res, next)=>{
  try{
    let users = await getUsers();
    res.json(users);
  }catch(err){
    res.json(err);
  }
})

module.exports = router;
