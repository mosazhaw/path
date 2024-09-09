import {AbstractDatabase} from "./abstract-database";
import {PathButton} from "../data/path-button";

export class FileDatabase extends AbstractDatabase {

    public getEntityName() {
        return "file";
    }

    public getSearchAttributes(): any[] {
        return ["name"];
    }

    protected getSort(): any[] {
        return ["name"];
    }

    public createPathButton(entry: PathButton, entity: any) {
        entry.name = entity.name;
        return super.createPathButton(entry, entity);
    }

}
