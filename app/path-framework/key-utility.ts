import {IPageElement, IKey} from "./pathinterface";

export class KeyUtility {

    public static translateUrl(url:string, formKey:IKey, crudFormUrl:boolean, parentPageElement:IPageElement):string {
        let translatedUrl:any = url;

        if (translatedUrl != null) {
            if (formKey != null && !(translatedUrl.indexOf(formKey.getName()) > 0) && crudFormUrl) {
                translatedUrl = translatedUrl + "/" + formKey.getKey();
            }
            if (formKey != null) {
                translatedUrl = translatedUrl.replace(":" + formKey.getName(),formKey.getKey());
            }
            let pageElement = parentPageElement;
            while (pageElement != null) {
                if (pageElement.getKey() != null) {
                    translatedUrl = translatedUrl.replace(":" + pageElement.getKey().getName(),pageElement.getKey().getKey());
                }
                pageElement = pageElement.getParent();
            }
        }

        return translatedUrl;
    }

}