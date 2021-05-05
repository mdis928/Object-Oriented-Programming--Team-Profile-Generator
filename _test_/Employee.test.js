const Employee = require("../lib/Employee");

describe ("Employee Test", () => {
    describe("Initialization", () => {
        it("Can initiate employee instance")
        const e = new Employee();
        expect(e.name).toEqual("Mike");
        expect(e.id).toequal("28");
        expect(e.email).toEqual("mike@gmail.com"); 
    });

    it("Can set name via constructor argument"), () => {
        const name = "Mike";
        const e = new Employee (name);
        expect(e.name).toEqual (name);
    };

    it("Can set id via constructor element"), () => {
        const testId = "123";
        const e = new Employee ("0",testId);
        expect(e.id).toEqual (testId);

    };
    
    it("Can set email via constructor argument"), () => {
        const testEmail = 'mike@gmail.com';
        const e = new Employee ("0","0",testEmail);
        expect(e.email).toEqual (testEmail);
    };
    
    it("Can get name via getname()"), () => {
    
    };
    
    it("Can get Id via getId()"), () => {
    
    };
    
    it("Can get email via getEmail()"), () => {
    
    }; 
    
    it("getRole() should return employee "), () => {
    // Anthony has "" for employee?
    };




})

 

 



