import {IDynamicField} from './dynamic-field';

export interface IDynamicSection {
    title: string
    fields: IDynamicField[]
    okFn?: () => Promise<any>
}
