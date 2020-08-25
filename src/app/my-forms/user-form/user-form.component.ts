import {Component, OnInit} from '@angular/core';
import {FieldTypes}        from '../../types/field-types';
import {IDynamicForm}      from '../../types/dynamic-form';
import {IUser}             from '../../types/user';

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
        age          : 24
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
                        label       : 'First Name'
                    },
                    {
                        type        : FieldTypes.Text,
                        propertyName: 'lastName',
                        placeholder : 'Enter your last name',
                        label       : 'Last Name'
                    },
                    {
                        type        : FieldTypes.Number,
                        propertyName: 'age',
                        placeholder : 'Enter your age',
                        label       : 'Age'
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
