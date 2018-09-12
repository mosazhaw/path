import {IPageElement, IKey} from "../pathinterface";

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

    public static replaceVariable(url:string, variable:string, value:string):string {
        // replace variables at line end
        let regExp = new RegExp(":"+variable+"$",'g');
        url = url.replace(regExp, value);
        // replace variables in middle of line
        regExp = new RegExp(":"+variable+"\/",'g');
        url = url.replace(regExp, value + "/");
        return url;
    }

    public static variableExists(url:string, variable:string):boolean {
        let regExp = new RegExp(":"+variable+"$",'g');
        let regExp2 = new RegExp(":"+variable+"\/",'g');
        return url.search(regExp) != -1 || url.search(regExp2) != -1;
    }

}