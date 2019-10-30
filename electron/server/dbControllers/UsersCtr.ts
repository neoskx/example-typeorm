import {getRepository} from 'typeorm';
// import {User} from '../entity/User';

import { getDBType } from "../dbConfiguration";
import config from "../config";

let User:any;
if (getDBType() === config.DEFAULT_MONGODB.type) {
    User = require('../entity/User/User.mongodb').default;
}else{
    User = require('../entity/User/User.sql').default;
}
console.log(User);

export async function createUser(globalId: string, firstName: string, lastName:string, isActive: boolean){
    try{
        const user = new User();
        user.globalId = globalId;
        user.firstName = firstName;
        user.lastName = lastName;
        user.isActive = !!isActive;
        user.profile = { name: "John", nickname: "Malkovich" };
        await getRepository(User).save(user);
        // await user.save();
        return user;
    }catch(err){
        throw err;
    }
}