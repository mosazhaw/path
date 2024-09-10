import {Injectable} from "@angular/core";
import { PathService } from "./path.service";

@Injectable()
export class TranslationService {

    private translationMap: Map<string, string> = this.createTranslationMap(this.getTranslations());

    public getText(key: any, ...parameters: string[]): string {
        if (key == null) {
            return "";
        } else if (key[this.getUserLanguage()] != null) {
            return key[this.getUserLanguage()];
        } else if (key["default"] != null) {
            return key["default"];
        } else if (this.getTranslation(key) == null) {
            return "{" + key + "}";
        }
        let result: string = this.getTranslation(key);
        let k = 0;
        for (const parameter of parameters) {
            result = result.replace("{" + k + "}", parameter);
            k++;
        }
        return result;
    }

    protected getTranslation(key: string): string {
        return <any>this.translationMap.get(key);
    }

    protected createTranslationMap(data: any): Map<string, string> {
        const result: Map<string, string> = new Map<string, string>();
        for (const item of Object.keys(data)) {
            result.set(item, data[item]);
        }
        return result;
    }

    public getUserLanguage(): string {
        const languageCode: string = <any>sessionStorage.getItem("languageCode");
        if (languageCode && this.getSupportedLanguageCodes().indexOf(languageCode) > 0) {
            return languageCode;
        }
        if (this.getSupportedLanguageCodes().length <= 0) {
            console.log("No supported language codes defined. Please check translation service.");
            return "en";
        }
        return this.getSupportedLanguageCodes()[0];
    }

    public getUserDateFormat() {
        // TODO: add locale support
        if (this.getUserLanguage() === "de") {
            return "DD.MM.YYYY";
        }
        return "MM/DD/YYYY";
    }

    public getSupportedLanguageCodes(): string[] {
        return ["en", "de"];
    }

    public loadTranslations(translations:any) {        
    }

    private getTranslations() {
        const languageCode: string = this.getUserLanguage();

        if (languageCode === "de") {
            return {
                "Back": "Zurück",
                "Cancel": "Abbrechen",
                "Delete": "Löschen",
                "DeleteWarningQuestion": "Wollen Sie diesen Datensatz löschen?",
                "Detail": "Detail",
                "Files": "Dateien",
                "FileLimitMessage": "Die Anzahl Dateien ist auf {0} limitiert. Bitte reduzieren Sie die Anzahl Dateien.",
                "FileSingleSizeMessage": "Die Dateigrösse einer Datei sollte {0} nicht überschreiten.",
                "FileAllSizeMessage": "Die Dateigrösse aller Dateien zusammen sollte {0} nicht überschreiten.",
                "Logout": "Abmelden",
                "MainMenu": "Hauptmenü",
                "New": "Neu",
                "NotSignedIn": "Nicht angemeldet",
                "Ok": "OK",
                "Result": "Resultat",
                "Results": "Resultate",
                "Search": "Suche",
                "SearchInputLabel": "Suchbegriff",
                "SearchTextTooShort": "Suchbegriff zu kurz",
                "SignedInAs": "Angemeldet als",
                "SliderValue": "Wert",
                "Translation": "Übersetzung",
                "Translations": "Übersetzungen",
                "de": "Deutsch",
                "en": "Englisch",
            };
        } else {
            return {
                "Back": "Back",
                "Cancel": "Cancel",
                "Delete": "Delete",
                "DeleteWarningQuestion": "Do you want to delete this item?",
                "Detail": "Detail",
                "Files": "Files",
                "FileLimitMessage": "The number of files is limited to {0}. Please reduce the number of files.",
                "FileSingleSizeMessage": "The file size for a single file is limited to {0}.",
                "FileAllSizeMessage": "The size of all files should not exceed {0}.",
                "Logout": "Logout",
                "MainMenu": "Main Menu",
                "New": "New",
                "NotSignedIn": "Not signed in",
                "Ok": "Ok",
                "Result": "Result",
                "Results": "Results",
                "Search": "Search",
                "SearchInputLabel": "Enter search text",
                "SearchTextTooShort": "Search text too short",
                "SignedInAs": "Signed in as",
                "SliderValue": "Value",
                "Translation": "Translation",
                "Translations": "Translations",
                "de": "German",
                "en": "English",
            };
        }
    }
}
