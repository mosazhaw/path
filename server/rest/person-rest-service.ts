import {PathButton} from "../data/path-button";
import {AbstractRestService} from "./abstract-rest-service";
import {PersonDatabase} from "../database/person-database";
import {TaskDatabase} from "../database/task-database";

export class PersonRestService extends AbstractRestService {

    constructor(app, private database: PersonDatabase) {
        super(app, database);
    }

    protected initList() {
        super.initList();

        const service = this;
        this._app.get("/services/company/:companyKey/person", (req, res) => {
            service._database.list().then((rows) => {
                // filter relations
                const filteredRows = [];
                for (const row of rows) {
                    if (row.company === req.params.companyKey) {
                        filteredRows.push(row);
                    }
                }
                service._database.createPathButtonList(filteredRows, res).catch((error: any) => console.log(error));
            }).catch((err) => {
                console.log(err);
            });
        });

        this._app.get("/services/task/:taskKey/person", (req, res) => {
            const taskKey = req.params.taskKey;
            service.database.getPersons(taskKey).then((rows) => {
                service._database.createPathButtonList(rows, res).catch((error: any) => console.log(error));
            }).catch((err) => {
                console.log(err);
            });
        });

        this._app.get("/services/person/group", async (req, res) => {
            let rows = await service._database.list();
            if (req.query.search) {
                rows = this.filter(rows, req.query.search, service._database.getSearchAttributes());
            }
            const additionalButtons: PathButton[] = [];
            const action = new PathButton();
            action.name = "Edit";
            action.color = "silver";
            action.icon = "fa-pencil";
            action.width = 1;
            action.setForm("PersonForm");
            additionalButtons.push(action);
            this._database.createPathGroupList(rows, additionalButtons, res);
        });
    }

}
