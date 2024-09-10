const fs = require('fs-extra');
const VERSION = process.env.npm_package_version;

build = async () => {
    await fs.emptyDir('./dist/release');
    fs.createFile("./dist/release/"+ VERSION);

    await fs.copyFile("package.publish.json","./dist/release/package.json");
    await fs.copyFile("README.md","./dist/release/README.md");
    await fs.copyFile("CHANGELOG.md","./dist/release/CHANGELOG.md");
    await fs.copyFile("LICENSE","./dist/release/LICENSE");

    await fs.copy('./dist/path-framework/browser/media','./dist/release/media')
    await fs.copy('./dist/path-framework/browser/assets','./dist/release/assets')
    await fs.copyFile('./dist/path-framework/browser/styles.css','./dist/release/styles.css')
    await fs.copyFile('./dist/path-framework/browser/polyfills.js','./dist/release/polyfills.js')
    await fs.copyFile('./dist/path-framework/browser/main.js','./dist/release/main.js')

    console.log("**********************************************");
    console.log("release " + VERSION + " built in dist/release");
    console.log("use npm publish command in direcotry dist/release");
    console.log("**********************************************");
}
build();