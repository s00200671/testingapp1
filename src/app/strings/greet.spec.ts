import {greet} from "./greet";

describe("Ronnie Conlon - S00200671", () => true)
describe("greet", () => {
    it("Should include the name in the message", () => {
        expect(greet("Frank")).toContain("Frank");
    });
});
    // FAILS on purpose
describe("greet", () => {
    it("Should fail as I used different names", () => {
        expect(greet("John")).toContain("Jack");
    });
});