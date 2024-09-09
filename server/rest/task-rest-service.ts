import {AbstractRestService} from "./abstract-rest-service";
import {PathButton} from "../data/path-button";
import {PathKey} from "../data/path-key";
import {TaskDatabase} from "../database/task-database";

export class TaskRestService extends AbstractRestService {

    constructor(app, private database: TaskDatabase) {
        super(app, database);
    }

    protected initList() {
        super.initList();

        const service = this;
        this._app.get("/services/person/:personKey/task", async (req, res) => {
            const rows = await service.database.getTasks(req.params.personKey);
            let promises = [];
            for (const task of rows) {
                // TODO fetch in one shot
                if (task.taskKey) {
                    promises.push(service.database.read(task.taskKey));
                }
            }
            let result = await Promise.all(promises);
            const entries: any[] = [];
            promises = [];
            for (const task of result) {
                const entry = new PathButton();
                const key: PathKey = new PathKey();
                key.key = task._id;
                key.name = service.database.getEntityName() + "Key";
                entry.key = key;
                entries.push(entry);
                promises.push(service.database.createPathButton(entry, task));
            }
            result = await Promise.all(promises);
            res.json(result);
        });

        this._app.get("/services/person/:personKey/task/:taskKey", (req, res) => {
            res.json({personKey: req.params.personKey, taskKey: req.params.taskKey});
        });
    }

    protected initCreate() {
        super.initCreate();

        const service = this;
        this._app.post("/services/person/:personKey/task", async (req, res) => {
            const result = await service.database.addPerson(req.body.personKey, req.body.taskKey);
            res.json(result);
        });
    }

    protected initUpdate() {
        super.initUpdate();

        const service = this;
        this._app.put("/services/person/:personKey/task/:taskKey", async (req, res) => {
            const result = await service.database.addPerson(req.body.personKey, req.body.taskKey);
            res.json(result);
        });
    }

    protected initDelete() {
        super.initDelete();

        const service = this;
        this._app.delete("/services/person/:personKey/task/:taskKey", async (req, res) => {
            const result = await service.database.removePerson(req.params.personKey, req.params.taskKey);
            res.json(result);
        });
    }

}
