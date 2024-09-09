import {AbstractDatabase} from "./abstract-database";
import {PathButton} from "../data/path-button";

export class HobbyDatabase extends AbstractDatabase {

    public getEntityName() {
        return "hobby";
    }

    public getSearchAttributes(): any[] {
        return ["hobby"];
    }

    protected getSort(): any[] {
        return ["name"];
    }

    public createPathButton(entry: PathButton, entity: any) {
        for (const item of entity.name) {
            if (item[0]["key"] === "en") {
                entry.name = item[1];
                entry.tooltip = "Hobby " + item[1];
                break;
            }
        }
        return super.createPathButton(entry, entity);
    }

    public async addHobby(personKey, hobbyKey): Promise<any> {
        const key: any = this.toComplexKey(personKey, hobbyKey);
        return AbstractDatabase._database.update(key, {});
    }

    public async removeHobby(personKey, hobbyKey): Promise<any> {
        const key = this.toComplexKey(personKey, hobbyKey);
        return AbstractDatabase._database.delete(key);
    }

    public async hobbyExists(personKey, hobbyKey): Promise<any> {
        const key = this.toComplexKey(personKey, hobbyKey);
        try {
            const exists = await AbstractDatabase._database.read(key);
            return Promise.resolve(true);
        } catch (err) {
            return Promise.resolve(false);
        }
    }

}
