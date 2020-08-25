import {Component, OnInit} from '@angular/core';
import {FieldTypes}        from '../../types/field-types';
import {IDynamicForm}      from '../../types/dynamic-form';
import {IUser}             from '../../types/user';
import {Validators}        from '@angular/forms';

@Component({
    selector   : 'dyn-user-form',
    templateUrl: './user-form.component.html',
    styleUrls  : ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
    
    user: IUser = {
        favoriteColor: '',
        firstName    : '',
        lastName     : '',
        age          : 0
    };
    
    constructor() {
        window['UserForm'] = this;
    }
    
    userForm: IDynamicForm = {
        model   : this.user,
        title   : 'User Form',
        sections: [
            {
                title : 'User Details',
                fields: [
                    {
                        type        : FieldTypes.Text,
                        propertyName: 'firstName',
                        placeholder : 'Enter your first name',
                        label       : 'First Name',
                        validators  : [Validators.required, Validators.minLength(2), Validators.maxLength(10)]
                    },
                    {
                        type        : FieldTypes.Text,
                        propertyName: 'lastName',
                        placeholder : 'Enter your last name',
                        label       : 'Last Name',
                        validators  : [Validators.required, Validators.minLength(2), Validators.maxLength(10)]
                    },
                    {
                        type        : FieldTypes.Text,
                        propertyName: 'age',
                        placeholder : 'Enter your age',
                        label       : 'Age',
                        validators  : [Validators.required, Validators.min(18)]
                    },
                    {
                        type        : FieldTypes.Color,
                        propertyName: 'favoriteColor',
                        label       : 'What is your favorite number?'
                    }
                ]
            }
        ]
        
    };
    
    ngOnInit(): void {
    }
    
}
