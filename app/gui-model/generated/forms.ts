import * as path from './../../path-framework/path';

// TODO in future versions these classes will be generated from gui model

export class ProjectForm implements path.IForm {

    private _project:path.FormField;
    private _quickScanCase:path.AutoCompleteField;
    private _startDate:path.FormField;
    private _endDate:path.FormField;
    private _customerProjectLeader:path.AutoCompleteField;
    private _deloitteProjectLeader:path.AutoCompleteField;
    private _industrySegment:path.AutoCompleteField;
    private _benchmarking:path.RadioGroup;
    private _monitoring:path.RadioGroup;
    private _comment:path.FormField;

    get project():path.FormField {
        return this._project;
    }

    set project(value:path.FormField) {
        this._project = value;
    }

    get quickScanCase():path.AutoCompleteField {
        return this._quickScanCase;
    }

    set quickScanCase(value:path.AutoCompleteField) {
        this._quickScanCase = value;
    }

    get startDate():path.FormField {
        return this._startDate;
    }

    set startDate(value:path.FormField) {
        this._startDate = value;
    }

    get endDate():path.FormField {
        return this._endDate;
    }

    set endDate(value:path.FormField) {
        this._endDate = value;
    }

    get customerProjectLeader():path.AutoCompleteField {
        return this._customerProjectLeader;
    }

    set customerProjectLeader(value:path.AutoCompleteField) {
        this._customerProjectLeader = value;
    }

    get deloitteProjectLeader():path.AutoCompleteField {
        return this._deloitteProjectLeader;
    }

    set deloitteProjectLeader(value:path.AutoCompleteField) {
        this._deloitteProjectLeader = value;
    }

    get industrySegment():path.AutoCompleteField {
        return this._industrySegment;
    }

    set industrySegment(value:path.AutoCompleteField) {
        this._industrySegment = value;
    }

    get benchmarking():path.RadioGroup {
        return this._benchmarking;
    }

    set benchmarking(value:path.RadioGroup) {
        this._benchmarking = value;
    }

    get monitoring():path.RadioGroup {
        return this._monitoring;
    }

    set monitoring(value:path.RadioGroup) {
        this._monitoring = value;
    }

    get comment():path.FormField {
        return this._comment;
    }

    set comment(value:path.FormField) {
        this._comment = value;
    }
}

export class CustomerForm implements path.IForm {

    private _companyName:path.TextField;
    private _street:path.TextField;
    private _postalCode:path.TextField;
    private _city:path.TextField;
    private _comments:path.TextField;

    get companyName():path.TextField {
        return this._companyName;
    }

    set companyName(value:path.TextField) {
        this._companyName = value;
    }

    get street():path.TextField {
        return this._street;
    }

    set street(value:path.TextField) {
        this._street = value;
    }

    get postalCode():path.TextField {
        return this._postalCode;
    }

    set postalCode(value:path.TextField) {
        this._postalCode = value;
    }

    get city():path.TextField {
        return this._city;
    }

    set city(value:path.TextField) {
        this._city = value;
    }

    get comments():path.TextField {
        return this._comments;
    }

    set comments(value:path.TextField) {
        this._comments = value;
    }
}