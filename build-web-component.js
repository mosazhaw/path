const fs = require('fs-extra');
const version = process.env.npm_package_version;

async function build() {
    if (!version) {
        throw new Error('The package version is required to build a release.');
    }

    await fs.emptyDir('./dist/release');

    const publishPackage = await fs.readJson('package.publish.json');
    publishPackage.version = version;

    await fs.writeJson('./dist/release/package.json', publishPackage, { spaces: 2 });
    await fs.copyFile("README.md","./dist/release/README.md");
    await fs.copyFile("CHANGELOG.md","./dist/release/CHANGELOG.md");
    await fs.copyFile("LICENSE","./dist/release/LICENSE");

    await fs.copy('./dist/path-framework/browser/media','./dist/release/media')
    await fs.copy('./dist/path-framework/browser/assets','./dist/release/assets')
    await fs.copyFile('./dist/path-framework/browser/styles.css','./dist/release/styles.css')
    await fs.copyFile('./dist/path-framework/browser/polyfills.js','./dist/release/polyfills.js')
    await fs.copyFile('./dist/path-framework/browser/main.js','./dist/release/main.js')

    console.log("**********************************************");
    console.log("release " + version + " built in dist/release");
    console.log("use npm publish command in directory dist/release");
    console.log("**********************************************");
}

build().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
