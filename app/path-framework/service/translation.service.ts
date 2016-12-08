import {Injectable} from "@angular/core";

@Injectable()
export class TranslationService {

    private translationMap:Map<string, string> = this.createTranslationMap(this.getTranslations());

    public getText(key: string, ...parameters: string[]): string {
        if (this.getTranslation(key) == null) {
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
        let languageCode: string = localStorage.getItem("languageCode");
        return languageCode;
    }

    private getTranslations() {
        let languageCode: string = this.getUserLanguage();

        if (languageCode == "de") {
            return {
                "Back": "Zurück",
                "Cancel": "Abbrechen",
                "Delete": "Löschen",
                "Logout": "Abmelden",
                "MainMenu": "Hauptmenü",
                "New": "Neu",
                "NotSignedIn": "Nicht angemeldet",
                "Ok": "OK",
                "Search": "Suche",
                "SearchInputLabel": "Suchbegriff",
                "SignedInAs": "Angemeldet als",
                "de": "Deutsch",
                "en": "Englisch",
            }
        } else {
            return {
                "Back": "Back",
                "Cancel": "Cancel",
                "Delete": "Delete",
                "Logout": "Logout",
                "MainMenu": "Main Menu",
                "New": "New",
                "NotSignedIn": "Not signed in",
                "Ok": "Ok",
                "Search": "Search",
                "SearchInputLabel": "Enter search text",
                "SignedInAs": "Signed in as",
                "de": "German",
                "en": "English",
            };
        }
    }
}