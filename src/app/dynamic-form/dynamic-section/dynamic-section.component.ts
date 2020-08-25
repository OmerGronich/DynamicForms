import {FieldTypes}                                                                  from '../../types/field-types';
import {IDynamicSection}                                                             from '../../types/dynamic-section';
import {Component, forwardRef, Input}                                                from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';

@Component({
    selector   : 'dyn-dynamic-section',
    templateUrl: './dynamic-section.component.html',
    styleUrls  : ['./dynamic-section.component.css'],
    providers  : [{
        provide    : NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DynamicSectionComponent),
        multi      : true
    }]
})
export class DynamicSectionComponent implements ControlValueAccessor {
    _model = {};
    
    set model(val) {
        this._model = val;
        this.change(val);
        this.touch(val);
    }
    
    FieldTypes = FieldTypes;
    
    @Input() section: IDynamicSection;
    formGroup: FormGroup;
    
    constructor() {
        window['DynamicSection'] = this;
    }
    
    
    ngOnInit(): void {
        
        const fields = this.section.fields.reduce((prev, curr) => {
            
            prev[curr.propertyName] = new FormControl('', curr.validators || []);
            
            return prev;
        }, {});
        
        this.formGroup = new FormGroup(fields);
        
        this.formGroup.valueChanges.subscribe(model => {
            this.model = model;
        });
        
        //region Might be useful
        // this.fields = Object.entries(this.section.controls).map((entry) => {
        //     const field        = {},
        //           propertyName = entry[0],
        //           formControl  = entry[1];
        //
        //     field[propertyName] = formControl;
        //
        //     return field;
        // });
        //endregion
    }
    
    writeValue(val: any): void {
        this.model = val;
    }
    
    change: any = () => {
    };
    
    touch: any = () => {
    };
    
    registerOnChange(fn: any): void {
        this.change = fn;
    }
    
    registerOnTouched(fn: any): void {
        this.touch = fn;
    }
    
    setDisabledState(isDisabled: boolean): void {
    }
    
}
