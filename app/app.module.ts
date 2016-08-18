import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {FormComponent} from './path-framework/form/form.component';
import {ChartComponent} from './path-framework/page/element/chart/chart.component';
import {AutoCompleteComponent} from "./path-framework/form/field/auto-complete/auto-complete-field.component";
import {TextFieldComponent} from "./path-framework/form/field/text/text-field.component";
import {DateFieldComponent} from "./path-framework/form/field/date/date-field.component";
import {RadioGroupComponent} from "./path-framework/form/field/radio/radio-group.component";
import {CheckboxGroupComponent} from "./path-framework/form/field/checkbox/checkbox-group.component";
import {FormFieldLabelComponent} from "./path-framework/form/field/form-field-label.component";
import {ProgressBarComponent} from "./path-framework/form/field/progress-bar/progress-bar.component";
import {LabelFieldComponent} from "./path-framework/form/field/label/label-field.component";
import {FieldListFieldComponent} from "./path-framework/form/field/fieldList/field-list-field.component";

@NgModule({
    imports:      [BrowserModule, HttpModule, FormsModule, CommonModule],
    declarations: [AppComponent, LabelFieldComponent, FieldListFieldComponent, FormComponent, ChartComponent, AutoCompleteComponent, ProgressBarComponent, TextFieldComponent, DateFieldComponent, RadioGroupComponent, CheckboxGroupComponent, FormFieldLabelComponent],
    bootstrap:    [AppComponent],
})
export class AppModule {}