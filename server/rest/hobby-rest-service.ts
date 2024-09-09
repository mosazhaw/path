import {AbstractRestService} from "./abstract-rest-service";
import {PathKey} from "../data/path-key";
import {PathButton} from "../data/path-button";
import {HobbyDatabase} from "../database/hobby-database";

export class HobbyRestService extends AbstractRestService {

    constructor(app, private database: HobbyDatabase) {
        super(app, database);
    }

    protected initList() {
        super.initList();

        const service = this;
        this._app.get("/services/person/:personKey/hobby", async (req, res) => {
            const rows = await service.database.list();
            const promises = [];
            for (const hobby of rows) {
                // TODO create generic method
                const entry = new PathButton();
                const key: PathKey = new PathKey();
                key.key = hobby._id;
                key.name = service.database.getEntityName() + "Key";
                const hobbyExists = await service.database.hobbyExists(req.params.personKey, hobby._id);
                if (hobbyExists) {
                    entry.color = "carrot";
                } else {
                    entry.color = "concrete";
                }
                entry.key = key;
                entry.url = "/person/:personKey/hobby/:hobbyKey";
                promises.push(service.database.createPathButton(entry, hobby));
            }
            const result = await Promise.all(promises);
            res.json(result);
        });
    }

    protected initRead() {
        super.initRead();

        const service = this;
        this._app.get("/services/person/:personKey/hobby/:hobbyKey", async (req, res) => {
            const hobbyExists: boolean = await service.database.hobbyExists(req.params.personKey, req.params.hobbyKey);
            if (hobbyExists) {
                await service.database.removeHobby(req.params.personKey, req.params.hobbyKey);
            } else {
                await service.database.addHobby(req.params.personKey, req.params.hobbyKey);
            }
            res.json({});
        });
    }

}
