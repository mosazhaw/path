import {Injectable} from "@angular/core";

@Injectable()
export class TranslationService {

    public getText(key:string):string {
        console.log("requesting translation for " + key);
        if (this.getTranslations()[key] == null) {
            return "{" + key + "}";
        }
        return this.getTranslations()[key];
    }

    protected getTranslations() {
        // TODO move to separate json file, split into path and app-texts
        let languageCode:string = localStorage.getItem("languageCode");

        if (languageCode == "en") {
            return {
                "Actual": "Actual",
                "AddInputParameter": "Add Input Parameter",
                "AddInterviewee": "Add Interviewee",
                "AddSubprocess": "Add Subprocess",
                "AddSupportProcess": "Add Support Process",
                "Admin": "Admin",
                "Answer": "Answer",
                "AssessmentReport": "Assessment Report",
                "Back": "Back",
                "Benchmarking": "Benchmarking",
                "Cancel": "Cancel",
                "Capability": "Capability",
                "Case": "Case",
                "CaseName": "Case Name",
                "Cases": "Cases",
                "Categories": "Categories",
                "Category": "Category",
                "CategoryName": "Category Name",
                "CategorySelection": "Category Selection",
                "City": "City",
                "ClosingDate": "Closing Date",
                "Comments": "Comments",
                "Companies": "Companies",
                "Company": "Company",
                "CompanyName": "Company Name",
                "CompletenessCheck": "Completeness Check",
                "Configuration": "Configuration",
                "Country": "Country",
                "CreationDate": "Creation Date",
                "Customer": "Customer",
                "CustomerPL": "Customer PL",
                "DeepScan": "DeepScan",
                "Delete": "Delete",
                "DeleteWarningQuestion": "Do you really want to delete this item?",
                "EMail": "E-Mail",
                "EditCase": "Edit Case",
                "EditCategory": "Edit Category",
                "EditCompany": "Edit Company",
                "EditDeepScan": "Edit DeepScan",
                "EditInterviewee": "Edit Interviewee",
                "EditKPI": "Edit KPI",
                "EditMaturityLevelSchema": "Edit Maturity Level Schema",
                "EditPerson": "Edit Person",
                "EditQuickScan": "Edit QuickScan",
                "EditSubprocess": "Edit Subprocess",
                "EditSupportProcess": "Edit Support Process",
                "EmploymentTitle": "Employment Title",
                "EndDate": "End Date",
                "FamilyName": "Family Name",
                "FirstName": "First Name",
                "Formula": "Formula",
                "IndustrySegment": "Industry Segment",
                "InputParameter": "Input Parameter",
                "InputParameterName": "Input Parameter Name",
                "InputParameters": "Input Parameters",
                "Interviewees": "Interviewees",
                "IntroductionHandbook": "Introduction Handbook",
                "KPI": "KPI",
                "KPICategories": "KPI Categories",
                "KPICategory": "KPI Category",
                "KPIList": "KPI List",
                "KPIName": "KPI Name",
                "Language": "Language",
                "Level": "Level",
                "MainMenu" : "MainMenu",
                "MaturityLevel": "Maturity Level",
                "MaturityLevelName": "Maturity Level Name",
                "MaturityLevelSchema": "Maturity Level Schema",
                "MaturityLevelSchemaName": "Maturity Level Schema Name",
                "MaturityLevelSchemas": "Maturity Level Schemas",
                "MaximumValue": "Maximum Value",
                "MinimumValue": "Minimum Value",
                "Monitoring": "Monitoring",
                "NewCapability" : "New Capability",
                "NewCase": "New Case",
                "NewCategory": "New Category",
                "NewCompany": "New Company",
                "NewDeepScan": "New DeepScan",
                "NewInputParameter": "New Input Parameter",
                "NewKPI": "New KPI",
                "NewKPICategory": "New KPI Category",
                "NewMaturityLevel": "New Maturity Level",
                "NewMaturityLevelSchema": "New Maturity Level Schema",
                "NewPerson": "New Person",
                "NewQualitativeQuestion": "New Qualitative Question",
                "NewQuickScan": "New QuickScan",
                "NewSubprocess": "New Subprocess",
                "NewSupportProcess": "New SupportProcess",
                "NewUnit": "New Unit",
                "NewUser": "New User",
                "NumberOfDigits": "Number of Digits",
                "Ok": "Ok",
                "Password": "Password",
                "Person": "Person",
                "Persons": "Persons",
                "Phone": "Phone",
                "PostalCode": "Postal Code",
                "Previous": "Previous",
                "Progress": "Progress",
                "Project": "Project",
                "QualitativeQuestion": "Qualitative Question",
                "Question": "Question",
                "Questions": "Questions",
                "QuickScan": "QuickScan",
                "Reports": "Reports",
                "Salutation": "Salutation",
                "SaveAndNext": "Save and Next",
                "Search" : "Search",
                "SearchInputLabel" : "Enter search text",
                "ServiceProvider": "Service Provider",
                "ServiceProviderPL": "Service Provider PL",
                "SkipAndNext": "Skip and Next",
                "StartDate": "Start Date",
                "Street": "Street",
                "Subprocess": "Subprocess",
                "SubprocessName": "Subprocess Name",
                "SupportProcess": "Support Process",
                "SupportProcessName": "Support Process Name",
                "SupportProcesses": "Support Processes",
                "Target": "Target",
                "Translation": "Translation",
                "Translations": "Translations",
                "Unit": "Unit",
                "UnitName": "Unit Name",
                "Units": "Units",
                "User": "User",
                "Users": "Users",
                "de": "German",
                "en": "English",
            }
        } else {
            return {
                "Actual": "Ist-Wert",
                "AddInputParameter": "Eingabe-Parameter hinzufügen",
                "AddInterviewee": "Teilnehmer hinzufügen",
                "AddSubprocess": "Teilprozess hinzufügen",
                "AddSupportProcess": "Support-Prozess hinzufügen",
                "Admin": "Admin",
                "Answer": "Antwort",
                "AssessmentReport": "Assessment-Bericht",
                "Back": "Zurück",
                "Benchmarking": "Benchmarking",
                "Cancel": "Abbrechen",
                "Capability": "Fähigkeit",
                "Case": "Fall",
                "CaseName": "Fallname",
                "Cases": "Fälle",
                "Categories": "Kategorien",
                "Category": "Kategorien",
                "CategoryName": "Kategorie Name",
                "CategorySelection": "Kategorie-Auswahl",
                "City": "Ort",
                "ClosingDate": "Stilllegungsdatum",
                "Comments": "Kommentare",
                "Companies": "Firmen",
                "Company": "Firma",
                "CompanyName": "Firmenname",
                "CompletenessCheck": "Vollständigkeits-Prüfung",
                "Configuration": "Konfiguration",
                "Country": "Land",
                "CreationDate": "Erstellungsdatum",
                "Customer": "Kunde",
                "CustomerPL": "Kunde PL",
                "DeepScan": "DeepScan",
                "Delete": "Löschen",
                "DeleteWarningQuestion": "Wollen Sie diesen Datensatz wirklich löschen?", // Do you really want to delete this item?
                "EMail": "E-Mail",
                "EditCase": "Fall bearbeiten",
                "EditCategory": "Kategorie bearbeiten",
                "EditCompany": "Firma bearbeiten",
                "EditDeepScan": "DeepScan bearbeiten",
                "EditInterviewee": "Teilnehmer bearbeiten",
                "EditKPI": "KPI bearbeiten",
                "EditMaturityLevelSchema": "Reifegrad-Schema bearbeiten",
                "EditPerson": "Person bearbeiten",
                "EditQuickScan": "QuickScan bearbeiten",
                "EditSubprocess": "Teilprozess bearbeiten",
                "EditSupportProcess": "Support-Prozess bearbeiten",
                "EmploymentTitle": "Stellenbeschrieb",
                "EndDate": "Enddatum",
                "FamilyName": "Nachname",
                "FirstName": "Vorname",
                "Formula": "Formel",
                "IndustrySegment": "Industriebereich",
                "InputParameter": "Eingabe-Parameter",
                "InputParameterName": "Eingabe-Parameter Name",
                "InputParameters": "Eingabe-Parameter",
                "Interviewees": "Teilnehmer",
                "IntroductionHandbook": "Einführungshandbuch",
                "KPI": "KPI",
                "KPICategories": "KPI-Kategorien",
                "KPICategory": "KPI-Kategorie",
                "KPIList": "KPI Liste",
                "KPIName": "KPI Name",
                "Language": "Sprache",
                "Level": "Grad",
                "MainMenu" : "Hauptmenü",
                "MaturityLevel": "Reifegrad",
                "MaturityLevelName": "Reifegrad Name",
                "MaturityLevelSchema": "Reifegrad-Schema",
                "MaturityLevelSchemaName": "Reifegrad-Schema Name",
                "MaturityLevelSchemas": "Reifegrad-Schemas",
                "MaximumValue": "Maximaler Wert",
                "MinimumValue": "Minimaler Wert",
                "Monitoring": "Monitoring",
                "NewCapability" : "Neue Fähigkeit",
                "NewCase": "Neuer Fall",
                "NewCategory": "Neue Kategorie",
                "NewCompany": "Neue Firma",
                "NewDeepScan": "Neuer DeepScan",
                "NewInputParameter": "Neuer Eingabe-Parameter",
                "NewKPI": "Neuer KPI",
                "NewKPICategory": "Neue KPI-Kategorie",
                "NewMaturityLevel": "Neuer Reifegrad",
                "NewMaturityLevelSchema": "Neues Reifegrad-Schema",
                "NewPerson": "Neue Person",
                "NewQualitativeQuestion": "Neue Qualitative Frage",
                "NewQuickScan": "Neuer QuickScan",
                "NewSubprocess": "Neuer Teilprozess",
                "NewSupportProcess": "Neuer Support-Prozess",
                "NewUnit": "Neue Einheit",
                "NewUser": "Neuer Benutzer",
                "NumberOfDigits": "Anzahl Nachkommastellen",
                "Ok": "OK",
                "Password": "Passwort",
                "Person": "Person",
                "Persons": "Personen",
                "Phone": "Telefon",
                "PostalCode": "PLZ",
                "Previous": "Zurück",
                "Progress": "Fortschritt",
                "Project": "Projekt",
                "QualitativeQuestion": "Qualitative Frage",
                "Question": "Frage",
                "Questions": "Fragen",
                "QuickScan": "QuickScan",
                "Reports": "Berichte",
                "Salutation": "Anrede",
                "SaveAndNext": "Speichern und Weiter",
                "Search" : "Suche",
                "SearchInputLabel" : "Suchbegriff", // enter search text
                "ServiceProvider": "Service Provider",
                "ServiceProviderPL": "Service Provider PL",
                "SkipAndNext": "Überspringen ohne Speichern",
                "StartDate": "Startdatum",
                "Street": "Strasse",
                "Subprocess": "Teilprozess",
                "SubprocessName": "Teilprozess Name",
                "SupportProcess": "Support-Prozess",
                "SupportProcessName": "Support-Prozess Name",
                "SupportProcesses": "Support-Prozesse",
                "Target": "Soll-Wert",
                "Translation": "Übersetzung",
                "Translations": "Übersetzungen",
                "Unit": "Einheit",
                "UnitName": "Einheit Name",
                "Units": "Einheiten",
                "User": "Benutzer",
                "Users": "Benutzer",
                "de": "Deutsch",
                "en": "Englisch",
            };
        }
    }
}