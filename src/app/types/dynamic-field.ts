import {FieldTypes}  from './field-types';
import {ValidatorFn} from '@angular/forms';

export interface IDynamicField {
    type: FieldTypes
    propertyName: string
    label: string
    placeholder?: string
    validators?: ValidatorFn[]
}
