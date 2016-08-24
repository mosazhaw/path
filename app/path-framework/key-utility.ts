import {IPageElement, IKey} from "./pathinterface";

export class KeyUtility {

    public static translateUrl(url:string, formKey:IKey, parentPageElement:IPageElement):string {
        console.log("input url " + url);
        let translatedUrl:any = url;

        if (translatedUrl != null) {
            if (translatedUrl.indexOf(":") < 0 && formKey != null) {
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

        console.log("translated url " + translatedUrl);
        return translatedUrl;
    }

}