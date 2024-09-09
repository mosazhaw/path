import {Injectable} from "@angular/core";
import { TranslationService } from "./service/translation.service";

@Injectable()
export class ExampleTranslationService extends TranslationService {

    private myTranslations = this.createTranslationMap(this.getExampleTranslations());

    protected override getTranslation(key: string): string {
        // prefer custom translations
        if (this.myTranslations.get(key) == null) {
            return super.getTranslation(key);
        }
        return <any>this.myTranslations.get(key);
    }

    private getExampleTranslations() {
        const languageCode: string = this.getUserLanguage();

        // put additional application translations here
        if (languageCode === "de") {
            return {
                "AddTask": "Task hinzufügen",
                "Birthday": "Geburtstag",
                "Breadcrumb": "Breadcrumb",
                "ButtonWidth": "Button Breite",
                "ButtonGroups": "Button-Gruppen",
                "City": "Ort",
                "Color": "Farbe",
                "Contacts": "Freunde",
                "Company": "Firma",
                "CompanyName": "Firma Name",
                "Companies": "Firmen",
                "Comments": "Kommentar",
                "CustomComponents": "Eigene Komponenten",
                "CustomComponentTooltip": "Benutze deine eigenen Angular Komponenten mit dem Path GUI-Modell",
                "DynamicComponents": "Dynamische Komponenten",
                "DynamicComponentTooltip": "Dynamische Komponenten werden on-the-fly serverseitig definiert.",
                "EditCompany": "Firma bearbeiten",
                "EditPerson": "Person bearbeiten",
                "EditTask": "Aufgabe bearbeiten",
                "ElementTest": "Element-Test",
                "EndDate": "Enddatum",
                "FamilyName": "Nachname",
                "FirstName": "Vorname",
                "Hobbies": "Hobbys",
                "Hobby": "Hobby",
                "HobbyName": "Hobby Name",
                "InfoTile": "Info Tile",
                "InfoTiles": "Info Tiles",
                "InlineForm": "Inline Form",
                "Links": "Links",
                "NewCompany": "Neue Firma",
                "NewHobby": "Neues Hobby",
                "NewPerson": "Neue Person",
                "NewProject": "Neues Projekt",
                "NewTask": "Neue Aufgabe",
                "Person": "Person",
                "Priority": "Priorität",
                "Project": "Projekt",
                "Projects": "Projekte",
                "ProjectName": "Projekt Name",
                "Rating": "Rating",
                "StartDate": "Startdatum",
                "Tasks": "Aufgaben",
                "Task": "Aufgabe",
                "TaskName": "Aufgabe Name",
                "Type": "Typ",
                "User": "Benutzer",
                "www.google.com": "www.google.com"
            };
        } else {
            return {
                "AddTask": "Add Task",
                "Birthday": "Birthday",
                "Breadcrumb": "Breadcrumb",
                "ButtonWidth": "Button Width",
                "ButtonGroups": "Button Groups",
                "City": "City",
                "Color": "Color",
                "Contacts": "Contacts",
                "Company": "Company",
                "CompanyName": "Company Name",
                "Companies": "Companies",
                "Comments": "Comments",
                "CustomComponents": "Custom Components",
                "CustomComponentTooltip": "Use your own Angular components with the Path GUI model",
                "DynamicComponents": "Dynamic Components",
                "DynamicComponentTooltip": "Dynamic components are generated server-side on-thy-fly.",
                "EditCompany": "Edit Company",
                "EditPerson": "Edit Person",
                "EditTask": "Edit Task",
                "ElementTest": "Element Test",
                "EndDate": "End date",
                "FamilyName": "Family name",
                "FirstName": "First name",
                "Hobbies": "Hobbies",
                "Hobby": "Hobby",
                "HobbyName": "Hobby Name",
                "InfoTile": "Info Tile",
                "InfoTiles": "Info Tiles",
                "InlineForm": "Inline Form",
                "Links": "Links",
                "NewCompany": "New Company",
                "NewHobby": "New Hobby",
                "NewPerson": "New Person",
                "NewProject": "New Project",
                "NewTask": "New Task",
                "Person": "Person",
                "Priority": "Priority",
                "Project": "Project",
                "Projects": "Projects",
                "ProjectName": "Project Name",
                "Rating": "Rating",
                "StartDate": "Start date",
                "Tasks": "Tasks",
                "Task": "Task",
                "TaskName": "Task Name",
                "Type": "Type",
                "User": "User",
                "www.google.com": "www.google.com"
            };
        }
    }

}
