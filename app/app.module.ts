import {NgModule, ModuleWithProviders, Injector} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FileUploadComponent} from "./path-framework/form/field/file-upload/file-upload.component";
import {SliderFieldComponent} from "./path-framework/form/field/slider/slider-field.component";
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
import {CastPipe} from "./path-framework/utility/cast-pipe";

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
        FileUploadComponent,
        SliderFieldComponent,
        CastPipe,
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
        FileUploadComponent,
        SliderFieldComponent,
        CastPipe
    ],
})
export class AppModule {
    static forRoot(): ModuleWithProviders<any> {
        return {ngModule: AppModule, providers: []};
    }
}

// TODO create proper public api
export * from "./path-framework/path-app.component"
export * from "./path-framework/pathinterface"
export * from "./path-framework/service/path.service"
export * from "./path-framework/service/translation.service"
export * from "./path-framework/form/field/auto-complete/auto-complete-field.component";
export * from "./path-framework/form/field/button/cancel-button";
export * from "./path-framework/form/field/button/form-delete-button";
export * from "./path-framework/form/field/button/ok-button";
export * from "./path-framework/form/field/button/previous-button";
export * from "./path-framework/form/field/checkbox/checkbox-group.component";
export * from "./path-framework/form/field/date/date-field.component";
export * from "./path-framework/form/field/fieldList/field-list-field.component";
export * from "./path-framework/form/field/file-upload/file-upload.component";
export * from "./path-framework/form/field/form-field";
export * from "./path-framework/form/field/form-field-label.component";
export * from "./path-framework/form/field/label/label-field.component";
export * from "./path-framework/form/field/number/number-field.component";
export * from "./path-framework/form/field/progress-bar/progress-bar.component";
export * from "./path-framework/form/field/radio/radio-group.component";
export * from "./path-framework/form/field/slider/slider-field.component";
export * from "./path-framework/form/field/text/text-field.component";
export * from "./path-framework/form/field/translation/translation-field.component";
export * from "./path-framework/form/form.component";
export * from "./path-framework/form/draggable.directive";
export * from "./path-framework/page/element/breadcrumb/breadcrumb.component";
export * from "./path-framework/page/element/button/back-button.component";
export * from "./path-framework/page/element/button/link-button.component";
export * from "./path-framework/page/element/button/button-detail";
export * from "./path-framework/page/element/button/button.component";
export * from "./path-framework/page/element/button/page-delete-button.component";
export * from "./path-framework/page/element/button-group/button-group.component";
export * from "./path-framework/page/element/chart/chart.component";
export * from "./path-framework/page/element/custom/custom-container-page-element";
export * from "./path-framework/page/element/custom/custom-container.component";
export * from "./path-framework/page/element/custom/custom.directive";
export * from "./path-framework/page/element/element-list/element-list.component";
export * from "./path-framework/page/element/inline-form/inline-form";
export * from "./path-framework/page/element/label/page-label.component";
export * from "./path-framework/page/element/list/list.component";
export * from "./path-framework/page/element/page-element";
export * from "./path-framework/utility/cast-pipe"











