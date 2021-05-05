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
        expect(e.name).toEqual ("Mike");
    };

    it("Can set id via constructor element"), () => {
        const id = "123";
        const e = new Employee (id);
        expect(e.id).toEqual (id);

    };
    
    it("Can set email via constructor argument"), () => {
        const email = 'mike@gmail.com';
        const e = new Employee;
        expect(e.email).toEqual (email);
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

 

 



