
var express = require('express');
var router = express.Router();
import {createPhoto, getPhotos} from '../dbControllers/PhotoMetadataCtr';

/* GET users listing. */
router.post('/photos', async function(req, res, next) {
  let photo = await createPhoto();
  res.json(photo);
});

router.get('/photos', async function(req, res, next) {
  let metadatas = await getPhotos();
  res.json(metadatas);
});

export default router;