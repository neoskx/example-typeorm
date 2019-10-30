const uuidv4 = require('uuid/v4');
// import { Photo } from "../entity/Photo";
// import { PhotoMetadata } from "../entity/PhotoMetadata";

export async function createPhoto() {
  try {
    // create a photo
    // let photo = new Photo();
    // photo.globalId = uuidv4();
    // photo.name = "Me and Bears";
    // photo.views = 100;
    // photo.description = "I am near polar bears";
    // photo.filename = "photo-with-bears.jpg";
    // photo.isPublished = true;

    // // create a photo metadata
    // let metadata = new PhotoMetadata();
    // metadata.globalId = uuidv4();
    // metadata.height = 640;
    // metadata.width = 480;
    // metadata.compressed = true;
    // metadata.comment = "cybershoot";
    // metadata.orientation = "portait";
    // metadata.photo = photo; // this way we connect them

    // await photo.save();
    // await metadata.save();
    // return metadata;
  } catch (err) {
    throw err;
  }
}

export async function getPhotos(){
    try{
        // const metadatas = await PhotoMetadata.find({relations: ["photo"]});
        // return metadatas;
    }catch(err){
        throw err;
    }
}
