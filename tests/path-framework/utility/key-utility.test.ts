import {KeyUtility} from "../../../app/path-framework/utility/key-utility";

test("Replace variable (middle)", () => {
    expect(KeyUtility.replaceVariable("test/:test/test", "test", "test")).toBe("test/test/test");
});

test("Replace variable (end)", () => {
    expect(KeyUtility.replaceVariable("test/:test", "test", "test")).toBe("test/test");
});

test("Variable does not exist", () => {
    expect(KeyUtility.variableExists("test", "test")).toBe(false);
});

test("Variable does exist", () => {
    expect(KeyUtility.variableExists("test/:test/test", "test")).toBe(true);
});

