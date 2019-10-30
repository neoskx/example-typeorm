import {isMongo} from '../../utils';
import AddressClass from './Address';
import AddressSQL from './Address.sql';

let Address:any;
if (isMongo()) {
    Address = AddressClass;
}else{
    Address = AddressSQL;
}

export default Address;