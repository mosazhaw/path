import { Injectable } from "@angular/core";
import { TranslationService } from "./service/translation.service";

@Injectable()
export class ExampleTranslationService extends TranslationService {

    private myTranslations = new Map<string, string>();

    protected override getTranslation(key: string): string {
        // prefer custom translations
        if (this.myTranslations.get(key) == null) {
            return super.getTranslation(key);
        }
        return <any>this.myTranslations.get(key);
    }

    public override loadTranslations(translations: any) {
        const languageCode: string = this.getUserLanguage();
        this.myTranslations = this.createTranslationMap(translations[languageCode]);
        console.log("path-framework " + this.getUserLanguage() + " translations loaded:", this.myTranslations.size, "language key(s)");
    }

}
