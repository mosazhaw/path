import {AbstractRestService} from "./abstract-rest-service";
import {FileDatabase} from "../database/file-database";
import * as multer from "multer";
const upload = multer({ dest: "uploads/" });

export class FileRestService extends AbstractRestService {

    constructor(app, private database: FileDatabase) {
        super(app, database);
    }

    protected initCreate(): void {
        super.initCreate();
        const service = this;

        this._app.post("/services/upload", upload.single("upload"), async (req, res, next) => {
            const file: any = {};
            file.mimetype = req.file.mimetype;
            file.name = req.file.originalname;
            file.size = req.file.size;
            file.path = req.file.path;

            const newDoc = await this._database.create(file);
            res.json(newDoc);
        });

        this._app.post("/services/upload-error", upload.single("upload"), async (req, res, next) => {
            res.status(500);
            res.json({});
        });

    }

    protected initRead(): void {
        super.initRead();
        const service = this;

        this._app.get("/services/upload/:fileKey", async (req, res) => {
            const file = await service.database.read(req.params.fileKey);
            res.download(file.path, file.name);
        });
    }
}
