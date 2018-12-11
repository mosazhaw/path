import {KeyUtility} from "../../../app/path-framework/utility/key-utility";

describe("KeyUtility", () => {
    it("Replace variable (middle)", () => {
        expect(KeyUtility.replaceVariable("test/:test/test", "test", "test")).toBe("test/test/test");
    });

    it("Replace variable (end)", () => {
        expect(KeyUtility.replaceVariable("test/:test", "test", "test")).toBe("test/test");
    });

    it("Variable exists (false)", () => {
        expect(KeyUtility.variableExists("test", "test")).toBe(false);
    });

    it("Variable exists (true)", () => {
        expect(KeyUtility.variableExists("test/:test/test", "test")).toBe(true);
    });
});
