const Manager = require("../lib/Manager");

describe ("Manager Test", () => {

    it("Can set office number via constructor argument", () => {
        const testOfficeNumber = "789";
        const e = new Manager ("foo", "0", "test@gmail.com", testOfficeNumber);
        expect(e.officeNumber).toEqual (testOfficeNumber);
    });
    
    it("getRole() should return Manager", () => {
        const testRole = "Manager";
        const e = new Manager ();
        expect(e.getRole()).toEqual(testRole);
    });
    
    it("Can get office number via getofficeNumber", () => {
        const testValue = "1497";
        const e = new Manager ("foo", "0", "test@gmail.com", testValue);
        expect(e.getofficeNumber()).toEqual(testValue);
    });

})

