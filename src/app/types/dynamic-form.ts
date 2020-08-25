import {IUser}           from './user';
import {IDynamicSection} from './dynamic-section';

export interface IDynamicForm {
    model: IUser,
    title: string,
    sections: IDynamicSection[]
}
