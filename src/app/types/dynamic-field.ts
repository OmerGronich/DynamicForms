import {FieldTypes}  from './field-types';
import {ValidatorFn} from '@angular/forms';

export interface IDynamicField {
    type: FieldTypes
    propertyName: string
    placeholder?: string
    label: string
    validators?: ValidatorFn[]
}
