import {PersonDatabase} from "./database/person-database";
import {CompanyDatabase} from "./database/company-database";
import {TaskDatabase} from "./database/task-database";
import {HobbyDatabase} from "./database/hobby-database";
import {AbstractDatabase} from "./database/abstract-database";
import {TestData} from "./test-data";
import {PersonRestService} from "./rest/person-rest-service";
import {TaskRestService} from "./rest/task-rest-service";
import {HobbyRestService} from "./rest/hobby-rest-service";
import {CompanyRestService} from "./rest/company-rest-service";
import {ProjectDatabase} from "./database/project-database";
import {ProjectRestService} from "./rest/project-rest-service";
import express = require("express");
import {DynamicComponentsRestService} from "./rest/dynamic-components-rest-service";
import {FileDatabase} from "./database/file-database";
import {FileRestService} from "./rest/file-rest-service";

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8082;

process.on("unhandledRejection", (reason, p) => {
    console.log("Unhandled Rejection at:", p, "reason:", reason);
});

// serve Frontend
app.use("/", [express.static(__dirname + "./../dist")]);

// setup CORS
app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Request-Method", "*");
    res.header("Access-Control-Allow-Headers", req.header["Access-Control-Request-Headers"]);
    res.header("Access-Control-Expose-Headers", "Authorization");
    res.type("application/json");
    next();
});

app.options("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
    res.sendStatus(200);
});

// disable Caching
app.get("/*", function (req, res, next) {
    res.header("cache-control", "no-cache, no-store, must-revalidate"); // HTTP 1.1
    res.header("pragma", "no-cache"); // HTTP 1.0
    res.header("expires", "0"); // HTTP 1.0 proxies
    next();
});

// Path ping request
app.get("/services/ping", function (req, res) {
    res.json({status: "ok", userId: "demo", version: "0.6.1"});
});

// Path example entities
AbstractDatabase.initDatabase();
const personDatabase = new PersonDatabase();
const projectDatabase = new ProjectDatabase();
const companyDatabase = new CompanyDatabase();
const hobbyDatabase = new HobbyDatabase();
const taskDatabase = new TaskDatabase();
const fileDatabase = new FileDatabase();
new PersonRestService(app, personDatabase).init();
new CompanyRestService(app, companyDatabase).init();
new HobbyRestService(app, hobbyDatabase).init();
new TaskRestService(app, taskDatabase).init();
new ProjectRestService(app, projectDatabase).init();
new DynamicComponentsRestService(app).init();
new FileRestService(app, fileDatabase).init();
TestData.init();

// set the home page route
app.get("/", function (req, res) {

    // ejs render automatically looks in the views folder
    res.render("../index.html");
});

app.listen(port, function () {
    console.log("Path example server running on http://localhost:" + port);
});
