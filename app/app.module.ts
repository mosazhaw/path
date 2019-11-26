import {NgModule, ModuleWithProviders, Injector} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FileUploadComponent} from "./path-framework/form/field/file-upload/file-upload.component";
import {FormComponent} from "./path-framework/form/form.component";
import {ButtonGroupComponent} from "./path-framework/page/element/button-group/button-group.component";
import {ChartComponent} from "./path-framework/page/element/chart/chart.component";
import {AutoCompleteComponent} from "./path-framework/form/field/auto-complete/auto-complete-field.component";
import {TextFieldComponent} from "./path-framework/form/field/text/text-field.component";
import {DateFieldComponent} from "./path-framework/form/field/date/date-field.component";
import {RadioGroupComponent} from "./path-framework/form/field/radio/radio-group.component";
import {CheckboxGroupComponent} from "./path-framework/form/field/checkbox/checkbox-group.component";
import {FormFieldLabelComponent} from "./path-framework/form/field/form-field-label.component";
import {ProgressBarComponent} from "./path-framework/form/field/progress-bar/progress-bar.component";
import {LabelFieldComponent} from "./path-framework/form/field/label/label-field.component";
import {FieldListFieldComponent} from "./path-framework/form/field/fieldList/field-list-field.component";
import {NumberFieldComponent} from "./path-framework/form/field/number/number-field.component";
import {TranslationFieldComponent} from "./path-framework/form/field/translation/translation-field.component";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {DraggableDirective} from "./path-framework/form/draggable.directive";
import {BackButtonComponent} from "./path-framework/page/element/button/back-button.component";
import {LinkButtonComponent} from "./path-framework/page/element/button/link-button.component";
import {PageDeleteButtonComponent} from "./path-framework/page/element/button/page-delete-button.component";
import {ButtonComponent} from "./path-framework/page/element/button/button.component";
import {PageLabelComponent} from "./path-framework/page/element/label/page-label.component";
import {ListComponent} from "./path-framework/page/element/list/list.component";
import {CustomDirective} from "./path-framework/page/element/custom/custom.directive";
import {CustomContainerComponent} from "./path-framework/page/element/custom/custom-container.component";
import {ElementListComponent} from "./path-framework/page/element/element-list/element-list.component";
import {BreadcrumbComponent} from "./path-framework/page/element/breadcrumb/breadcrumb.component";

@NgModule({
    imports:      [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        BrowserAnimationsModule,
        BsDatepickerModule.forRoot(),
        TooltipModule.forRoot()
    ],
    declarations: [
        DraggableDirective,
        LabelFieldComponent,
        FieldListFieldComponent,
        FormComponent,
        ChartComponent,
        AutoCompleteComponent,
        ProgressBarComponent,
        TextFieldComponent,
        TranslationFieldComponent,
        NumberFieldComponent,
        DateFieldComponent,
        RadioGroupComponent,
        CheckboxGroupComponent,
        FormFieldLabelComponent,
        BackButtonComponent,
        LinkButtonComponent,
        PageDeleteButtonComponent,
        ButtonComponent,
        PageLabelComponent,
        ListComponent,
        CustomDirective,
        CustomContainerComponent,
        ElementListComponent,
        ButtonGroupComponent,
        BreadcrumbComponent,
        FileUploadComponent
    ],
    exports:      [
        DraggableDirective,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        BsDatepickerModule,
        TooltipModule,
        LabelFieldComponent,
        FieldListFieldComponent,
        FormComponent,
        ChartComponent,
        AutoCompleteComponent,
        ProgressBarComponent,
        TextFieldComponent,
        TranslationFieldComponent,
        NumberFieldComponent,
        DateFieldComponent,
        RadioGroupComponent,
        CheckboxGroupComponent,
        FormFieldLabelComponent,
        BackButtonComponent,
        LinkButtonComponent,
        PageDeleteButtonComponent,
        ButtonComponent,
        PageLabelComponent,
        ListComponent,
        CustomDirective,
        CustomContainerComponent,
        ElementListComponent,
        ButtonGroupComponent,
        BreadcrumbComponent,
        FileUploadComponent
    ],
})
export class AppModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: AppModule, providers: []};
    }
}
