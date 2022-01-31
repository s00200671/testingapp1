import { getCurrencies } from "./getCurrencies";

describe("getCurrencies", () => {
    it("Should contain USD", () => {
        expect(getCurrencies()).toContain("USD");
    })
    it("Should contain GDP", () => {
        expect(getCurrencies()).toContain("GDP");
    })
    it("Should contain EUR", () => {
        expect(getCurrencies()).toContain("EUR");
    })
    it("Should not contain CAD", () => {
        expect(getCurrencies()).not.toContain("CAD");
    })
});