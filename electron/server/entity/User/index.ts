import {isMongo} from '../../utils';
import UserMongo from './User.mongodb';
import UserSQL from './User.mongodb';

let User:any;
if (isMongo()) {
    User = UserMongo;
}else{
    User = UserSQL;
}

export default User;