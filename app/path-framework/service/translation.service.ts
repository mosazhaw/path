import {Injectable} from "@angular/core";

@Injectable()
export class TranslationService {

    private translationMap:Map<string, string> = this.createTranslationMap(this.getTranslations());

    public getText(key: any, ...parameters: string[]): string {
        if (key == null) {
            return "";
        }
        else if (key[this.getUserLanguage()] != null) {
            return key[this.getUserLanguage()];
        }
        else if (key["default"] != null) {
            return key["default"];
        }
        else if (this.getTranslation(key) == null) {
            return "{" + key + "}";
        }
        let result: string = this.getTranslation(key);
        let k: number = 0;
        for (let parameter of parameters) {
            result = result.replace("{" + k + "}", parameter);
            k++;
        }
        return result;
    }

    protected getTranslation(key:string) : string {
        return this.translationMap.get(key);
    }

    protected createTranslationMap(data:any) : Map<string, string> {
        let result:Map<string,string> = new Map<string, string>();
        for (var item in data) {
            result.set(item, data[item]);
        }
        return result;
    }

    protected getUserLanguage() : string {
        let languageCode: string = sessionStorage.getItem("languageCode");
        if (languageCode) {
            return languageCode;
        }
        return 'en';
    }

    public getUserDateFormat() {
        // TODO: add locale support
        if (this.getUserLanguage() == 'de') {
            return 'DD.MM.YYYY';
        }
        return 'MM/DD/YYYY';
    }

    public getSupportedLanguageCodes() : string[] {
        return ["de", "en"];
    }

    private getTranslations() {
        let languageCode: string = this.getUserLanguage();

        if (languageCode == "de") {
            return {
                "Back": "Zurück",
                "Cancel": "Abbrechen",
                "Delete": "Löschen",
                "DeleteWarningQuestion": "Wollen Sie diesen Datensatz löschen?",
                "Detail": "Detail",
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
                "Translation": "Übersetzung",
                "Translations": "Übersetzungen",
                "de": "Deutsch",
                "en": "Englisch",
            }
        } else {
            return {
                "Back": "Back",
                "Cancel": "Cancel",
                "Delete": "Delete",
                "DeleteWarningQuestion": "Do you want to delete this item?",
                "Detail": "Detail",
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
                "Translation": "Translation",
                "Translations": "Translations",
                "de": "German",
                "en": "English",
            };
        }
    }
}