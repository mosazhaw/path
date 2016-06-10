/* check GUI model validity */
import {GuiModel} from '../app/gui-model/guimodel';


let guiModel = new GuiModel().guiModel;
let forms:string[] = []
let pages:string[] = [];
let errors:string[] = [];

for (let form of guiModel.application.formList) {
    forms.push(form.id);
}

for (let page of guiModel.application.pageList) {
    pages.push(page.id);
}

for (let page of guiModel.application.pageList) {
    for (let element of page.elementList) {
        if (element["page"] != null && pages.indexOf(element["page"]) == -1) {
            errors.push("missing page " + element["page"] + " on " + element["name"]);
        }
    }
}

for (let page of guiModel.application.pageList) {
    for (let element of page.elementList) {
        if (element["form"] != null && forms.indexOf(element["form"]["form"]) == -1) {
            errors.push("missing form " + element["form"]["form"] + " on " + element["name"]);
        }
    }
}

console.log(errors);

describe("Hello world Test", function() {
    it("says hello", function() {
        expect("Hello world!").toEqual("Hello world!");
    });
});