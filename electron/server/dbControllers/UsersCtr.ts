import {getRepository} from 'typeorm';
import User from '../entity/User';

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
