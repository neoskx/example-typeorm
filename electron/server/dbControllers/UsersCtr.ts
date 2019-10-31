const uuidv4 = require("uuid/v4");
import { getRepository } from "typeorm";

import { isMongo, isSQLite } from "../utils";
import User from "../entity/User";
import Profile from "../entity/User/Profile";
import Photo from "../entity/Photo";
import PhotoClass from "../entity/Photo/Photo";
import AddressClass from '../entity/Address/Address';
import Address from '../entity/Address';

export async function createUser(
  firstName: string,
  lastName: string,
  isActive: boolean,
  profile: Profile,
  photos: PhotoClass[],
  address: AddressClass
) {
  try {
    const user = new User();
    if (isMongo()) {
      user.globalId = uuidv4();
      user.firstName = firstName;
      user.lastName = lastName;
      user.isActive = !!isActive;
      user.profile = new Profile();
      user.profile.about = profile.about;
      user.profile.education = profile.education;
      user.profile.career = profile.career;
      user.photos = photos.map(photo => {
        return new Photo(photo.url, photo.description, photo.size);
      });
      user.address = address;
    } else {
      user.globalId = uuidv4();
      user.firstName = firstName;
      user.lastName = lastName;
      user.isActive = !!isActive;
      user.profile = profile;
      user.photos = [];
      for (let i = 0; i < photos.length; i++) {
        let photo = photos[i];
        let p = new Photo();
        p.globalId = uuidv4();
        p.url = photo.url;
        p.description = photo.description;
        p.size = photo.size;
        await getRepository(Photo).save(p);
        user.photos.push(p);
      }
      let addr = new Address();
      addr.globalId = uuidv4();
      addr.streetAddress = address.streetAddress;
      addr.city = address.city;
      addr.state = address.state;
      addr.zipCode = address.zipCode;
      await getRepository(Address).save(addr);
      user.address = addr;
    }

    await getRepository(User).save(user);
    // await user.save();
    return user;
  } catch (err) {
    throw err;
  }
}

export async function getUsers() {
  try {
    let users: object;
    if (isMongo()) {
      users = await getRepository(User).find();
    } else {
      users = await getRepository(User).find({ relations: ["photos", "address"] });
    }
    return users;
  } catch (err) {
    throw err;
  }
}
