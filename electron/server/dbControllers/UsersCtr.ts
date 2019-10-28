import {getRepository} from 'typeorm';
import {User} from '../entity/User'

export async function createUser(globalId: string, firstName: string, lastName:string, isActive: boolean){
    try{
        const user = new User();
        user.globalId = globalId;
        user.firstName = firstName;
        user.lastName = lastName;
        user.isActive = !!isActive;
        await getRepository(User).save(user);
        return user;
    }catch(err){
        throw err;
    }
}