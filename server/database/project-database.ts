import {AbstractDatabase} from "./abstract-database";
import {PathButton} from "../data/path-button";

export class ProjectDatabase extends AbstractDatabase {

    public getEntityName() {
        return "project";
    }

    public getSearchAttributes(): any[] {
        return ["name"];
    }

    protected getSort(): any[] {
        return ["name"];
    }

    public createPathButton(entry: PathButton, entity: any) {
        entry.name = entity.name;
        if (entity.company != null) {
            return this.read(entity.company).then((doc) => {
                entry.details.push(doc.name);
                return entry;
            }).catch((err) => {
                return entry;
            });
        } else {
            return super.createPathButton(entry, entity);
        }
    }

    public prepareCreate() {
        const newProject: any = {};
        const now = new Date();
        newProject.evtStart = now;
        newProject.projectPriority = 1;
        return Promise.resolve(newProject);
    }

}
