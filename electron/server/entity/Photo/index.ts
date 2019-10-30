import {isMongo} from '../../utils';
import PhotoClass from './Photo';
import PhotoSQL from './Photo.sql';

let Photo:any;
if (isMongo()) {
    Photo = PhotoClass;
}else{
    Photo = PhotoSQL;
}

export default Photo;