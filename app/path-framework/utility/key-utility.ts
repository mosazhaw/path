import {IPageElement, IKey} from "../pathinterface";
import {Key} from "../page/element/page-element";

export class KeyUtility {

    public static translateUrl(url: string, formKey: IKey, crudFormUrl: boolean, parentPageElement: IPageElement): string {
        let translatedUrl: any = url;

        if (translatedUrl != null) {
            if (formKey != null && !(translatedUrl.indexOf(formKey.getName()) > 0) && crudFormUrl) {
                translatedUrl = translatedUrl + "/" + formKey.getKey();
            }
            if (formKey != null) {
                translatedUrl = translatedUrl.replace(":" + formKey.getName(), formKey.getKey());
            }
            let pageElement = parentPageElement;
            while (pageElement != null) {
                if (pageElement.getKey() != null) {
                    translatedUrl = translatedUrl.replace(":" + pageElement.getKey().getName(), pageElement.getKey().getKey());
                }
                pageElement = pageElement.getParent();
            }
        }

        return translatedUrl;
    }

    public static findKey(pageElement: IPageElement, name: string): Key {
        let searchKeyName = name;
        if (searchKeyName) {
            searchKeyName = searchKeyName.replace(":", "");
            while (pageElement != null) {
                if (pageElement.getKey() != null && pageElement.getKey().getName() === searchKeyName) {
                    return <Key>pageElement.getKey();
                }
                pageElement = pageElement.getParent();
            }
        }
        return null;
    }

    public static replaceVariable(url: string, variable: string, value: string): string {
        // replace variables at line end
        let regExp = new RegExp(":" + variable + "$", "g");
        url = url.replace(regExp, value);
        // replace variables in middle of line
        regExp = new RegExp(":" + variable + "\/", "g");
        url = url.replace(regExp, value + "/");
        return url;
    }

    public static variableExists(url: string, variable: string): boolean {
        const regExp = new RegExp(":" + variable + "$", "g");
        const regExp2 = new RegExp(":" + variable + "\/", "g");
        return url.search(regExp) !== -1 || url.search(regExp2) !== -1;
    }

}
