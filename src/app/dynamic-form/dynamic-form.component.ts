import {Component, Input, OnInit} from '@angular/core';
import {IDynamicForm}             from '../types/dynamic-form';

@Component({
    selector   : 'dyn-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls  : ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
    
    @Input() form: IDynamicForm;
    
    constructor() {
        window['DynamicFormComponent'] = this;
    }
    
    ngOnInit(): void {
        
        //region Maybe Useful in the future
        // this.formGroup = new FormGroup({
        //     model   : new FormControl(this.form.model),
        //     sections: new FormArray(
        //         this.form.sections
        //             .map(section => {
        //                 const fields = section.fields
        //                                       .reduce((prev, curr) => {
        //                                           prev[curr.propertyName] = new FormControl('');
        //
        //                                           return prev;
        //                                       }, {});
        //                 return new FormGroup(fields);
        //             }))
        // });
        //endregion
        
    }
    
    
}
