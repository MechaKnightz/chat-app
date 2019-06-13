import {User} from './user';
import {Action} from './action';

export interface Message {
    user?: User;
    content?: any;
    action?: Action;
}