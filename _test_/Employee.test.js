const Employee = require("../lib/Employee");

describe ("Employee Test", () => {
    // describe("Initialization", () => {
    it("Can initiate employee instance", () => {
            const e = new Employee();
            expect(typeof(e)).toEqual('object')
    });
        

    it("Can set name via constructor argument", () => {
        const name = "Mike";
        const e = new Employee (name);
        expect(e.name).toEqual (name);
    });

    it("Can set id via constructor element", () => {
        const testId = "123";
        const e = new Employee ("0",testId);
        expect(e.id).toEqual (testId);

    });
    
    it("Can set email via constructor argument", () => {
        const testEmail = 'mike@gmail.com';
        const e = new Employee ("0","0",testEmail);
        expect(e.email).toEqual (testEmail);
    });
    
    it("Can get name via getname()", () => {
        // We are defining a variable called testName whose value is zach
        const testName = "Zach"
        // We are creating a new employee where the object is called "e" whose name is testName, which we know the value is Zach
        const e = new Employee (testName);
        // We are making sure that when are calling the "getName" method, it returns testName
        expect(e.getName()).toEqual(testName);
    });
    
    it("Can get Id via getId()", () => {
        const testId = "456";
        const e = new Employee ("0", testId);
        expect(e.getId()).toEqual(testId);
    });
    
    it("Can get email via getEmail()", () => {
        const testEmail = "zach@gmail.com";
        const e = new Employee ("foo", "1", testEmail);
        expect(e.getEmail()).toEqual(testEmail)
    
    }); 
    
    it("getRole() should return 'Employee'", () => {
        const testRole = "Employee";
        const e = new Employee ();
        expect(e.getRole()).toEqual(testRole);
    });


})

 

 



