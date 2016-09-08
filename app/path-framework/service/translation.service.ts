import {Injectable} from "@angular/core";

@Injectable()
export class TranslationService {

    public getText(key:string):string {
        if (this.getTranslations()[key] == null) {
            console.log("translation for " + key);
            return "{" + key + "}";
        }
        return this.getTranslations()[key];
    }

    protected getTranslations() {
        // TODO move to separate json file, split into path and app-texts
        return {
            "QuickScan": "QuickScan",
            "NewQuickScan": "Neuer QuickScan",
            "NewDeepScan": "Neuer DeepScan",
            "DeepScan": "DeepScan",
            "Companies": "Firmen",
            "Persons": "Personen",
            "Reports": "Berichte",
            "Admin": "Admin",
            "Back": "Zurück",
            "MainMenu" : "Hauptmenü",
            "Search" : "Suche",
            "SearchInputLabel" : "Suchbegriff", // enter search text
            "Project": "Projekt",
            "Case": "Fall",
            "StartDate": "Startdatum",
            "EndDate": "Enddatum",
            "Customer": "Kunde",
            "CustomerPL": "Kunde PL",
            "ServiceProvider": "Service Provider",
            "ServiceProviderPL": "Service Provider PL",
            "IndustrySegment": "Industriebereich",
            "Benchmarking": "Benchmarking",
            "Monitoring": "Monitoring",
            "Comments": "Kommentare",
            "Delete": "Löschen",
            "Cancel": "Abbrechen",
            "Ok": "OK",
            "EditDeepScan": "DeepScan bearbeiten",
            "EditQuickScan": "QuickScan bearbeiten",
            "EditInterviewee": "Teilnehmer bearbeiten",
            "AddInterviewee": "Teilnehmer hinzufügen",
            "Interviewees": "Teilnehmer",
            "Categories": "Kategorien",
            "Person": "Person"
        };
    }

}