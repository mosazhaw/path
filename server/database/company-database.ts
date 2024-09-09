import {AbstractDatabase} from "./abstract-database";
import {PathButton} from "../data/path-button";

export class CompanyDatabase extends AbstractDatabase {

    public getEntityName() {
        return "company";
    }

    public getSearchAttributes(): any[] {
        return ["name"];
    }

    protected getSort(): any[] {
        return ["name"];
    }

    public createPathButton(entry: PathButton, entity: any): Promise<PathButton> {
        entry.name = entity.name;
        entry.details.push(entity.city);
        return super.createPathButton(entry, entity);
    }

}
