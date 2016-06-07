import * as path from './../../path-framework/path';

// TODO in future versions these classes will be generated from gui model

export class ProjectForm implements path.IForm {

    private _project:path.FormField;
    private _startDate:path.FormField;
    private _endDate:path.FormField;
    private _customerProjectLeader:string;
    private _deloitteProjectLeader:string;
    private _industrySegment:string;
    private _benchmarking:path.RadioGroup;
    private _monitoring:path.RadioGroup;
    private _comment:path.FormField;

    get project():path.FormField {
        return this._project;
    }

    set project(value:path.FormField) {
        this._project = value;
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

    get customerProjectLeader():string {
        return this._customerProjectLeader;
    }

    set customerProjectLeader(value:string) {
        this._customerProjectLeader = value;
    }

    get deloitteProjectLeader():string {
        return this._deloitteProjectLeader;
    }

    set deloitteProjectLeader(value:string) {
        this._deloitteProjectLeader = value;
    }

    get industrySegment():string {
        return this._industrySegment;
    }

    set industrySegment(value:string) {
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

    private _companyName:path.FormField;
    private _street:path.FormField;
    private _postalCode:path.FormField;
    private _city:path.FormField;
    private _comments:path.FormField;

    get companyName():path.FormField {
        return this._companyName;
    }

    set companyName(value:path.FormField) {
        this._companyName = value;
    }

    get street():path.FormField {
        return this._street;
    }

    set street(value:path.FormField) {
        this._street = value;
    }

    get postalCode():path.FormField {
        return this._postalCode;
    }

    set postalCode(value:path.FormField) {
        this._postalCode = value;
    }

    get city():path.FormField {
        return this._city;
    }

    set city(value:path.FormField) {
        this._city = value;
    }

    get comments():path.FormField {
        return this._comments;
    }

    set comments(value:path.FormField) {
        this._comments = value;
    }
}