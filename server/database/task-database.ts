import {AbstractDatabase} from "./abstract-database";
import {PathButton} from "../data/path-button";

export class TaskDatabase extends AbstractDatabase {

    public getEntityName() {
        return "task";
    }

    public getSearchAttributes(): any[] {
        return ["name"];
    }

    protected getSort(): any[] {
        return ["name"];
    }

    public createPathButton(entry: PathButton, entity: any) {
        entry.name = entity.name;
        if (entity.project != null) {
            return this.read(entity.project).then((doc) => {
                entry.details.push(doc.name);
                return entry;
            }).catch((err) => {
                return entry;
            });
        } else {
            return super.createPathButton(entry, entity);
        }
    }

    public async getTasks(personKey): Promise<any> {
        const key = this.toComplexKey(personKey);
        const tasks = await AbstractDatabase._database.allDocs(key);
        const result: any[] = [];
        for (const task of tasks) {
            const item: any = {};
            item.personKey = personKey;
            item.taskKey = task.taskKey;
            result.push(item);
        }
        return result;
    }

    public async addPerson(personKey, taskKey): Promise<any> {
        const key: any = this.toComplexKey(personKey, taskKey);
        return AbstractDatabase._database.update(key, {personKey: personKey, taskKey: taskKey});
    }

    public async removePerson(personKey, taskKey): Promise<any> {
        const key = this.toComplexKey(personKey, taskKey);
        return AbstractDatabase._database.delete(key);
    }

}
