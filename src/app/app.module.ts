import {BrowserModule} from '@angular/platform-browser';
import {NgModule}      from '@angular/core';

import {AppRoutingModule}        from './app-routing.module';
import {AppComponent}            from './app.component';
import {UserFormComponent}       from './my-forms/user-form/user-form.component';
import {DynamicFormComponent}    from './dynamic-form/dynamic-form.component';
import {DynamicSectionComponent} from './dynamic-form/dynamic-section/dynamic-section.component';
import {ReactiveFormsModule}     from '@angular/forms';
import {FormsModule}             from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        UserFormComponent,
        DynamicFormComponent,
        DynamicSectionComponent
    ],
    imports     : [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers   : [],
    bootstrap   : [AppComponent]
})
export class AppModule {
}
