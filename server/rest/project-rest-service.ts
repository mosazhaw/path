import {AbstractRestService} from "./abstract-rest-service";
import {ProjectDatabase} from "../database/project-database";

export class ProjectRestService extends AbstractRestService {

    constructor(app, private database: ProjectDatabase) {
        super(app, database);
    }

}
