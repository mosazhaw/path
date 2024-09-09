import {PersonDatabase} from "./database/person-database";
import {CompanyDatabase} from "./database/company-database";
import {TaskDatabase} from "./database/task-database";
import {HobbyDatabase} from "./database/hobby-database";
import {ProjectDatabase} from "./database/project-database";

export class TestData {

    public static init() {
        const personDatabase = new PersonDatabase();
        const companyDatabase = new CompanyDatabase();
        const taskDatabase = new TaskDatabase();
        const hobbyDatabase = new HobbyDatabase();
        const projectDatabase = new ProjectDatabase();

        let promises = [];
        promises.push(companyDatabase.create({name: "Company A", city: "Winterthur"}));
        promises.push(companyDatabase.create({name: "ZHAW", city: "Winterthur"}));
        promises.push(companyDatabase.create({name: "Company B", city: "Zürich"}));
        promises.push(companyDatabase.create({name: "Company C", city: "Frauenfeld"}));
        promises.push(companyDatabase.create({name: "Company D", city: "Zermatt"}));
        promises.push(companyDatabase.create({name: "Company E", city: "St. Moritz"}));
        promises.push(companyDatabase.create({name: "Company F", city: "Luzern"}));
        Promise.all(promises).then((companies) => {
                personDatabase.create({firstName: "Adam", familyName: "Jones", company: companies[0].key});
                personDatabase.create({firstName: "Betty", familyName: "Miller", company: companies[2].key});
                personDatabase.create({firstName: "Chris", familyName: "Connor", company: companies[3].key});
                personDatabase.create({firstName: "Dave", familyName: "Dean", company: companies[3].key});
            }
        ).catch((err) => {
                console.log(err);
            }
        );

        Promise.all(promises).then((persons) => {
                promises = [];
                promises.push(projectDatabase.create({name: "Project A"}));
                promises.push(projectDatabase.create({name: "Project B"}));
                promises.push(projectDatabase.create({name: "Project C"}));
                Promise.all(promises).then((projects) => {
                        taskDatabase.create({name: "Meeting", project: projects[0].key});
                        taskDatabase.create({name: "Prepare dinner", project: projects[1].key});
                        taskDatabase.create({name: "Shopping", project: projects[1].key});
                    }
                ).catch((err) => {
                        console.log(err);
                    }
                );

            }
        ).catch((err) => {
                console.log(err);
            }
        );

        hobbyDatabase.create({name: [[{key: "de"}, "Golf"], [{key: "en"}, "Golf"]]});
        hobbyDatabase.create({name: [[{key: "de"}, "Orientierungslauf"], [{key: "en"}, "Orienteering"]]});
        hobbyDatabase.create({name: [[{key: "de"}, "Laufen"], [{key: "en"}, "Running"]]});
        hobbyDatabase.create({name: [[{key: "de"}, "Ski"], [{key: "en"}, "Ski"]]});
        hobbyDatabase.create({name: [[{key: "de"}, "Snowboard"], [{key: "en"}, "Snowboard"]]});
    }

}
