const Intern = require("../lib/Intern");

describe ("Intern Test" , () => {

    it("Can set school via constructor", () => {
        const school = "University";
        const e = new Intern ("Foo", "123", "test@gmail.com", school);
        expect(e.school).toEqual(school)
    });
    
    it("getRole() should return Intern", () => {
        const testRole = "Intern";
        const e = new Intern ();
        expect(e.getRole()).toEqual(testRole)
    });
    
    it("Can get school via getSchool", () => {
        const testGetSchool = "University";
        const e = new Intern ("Foo", "456", "test@gmail.com", testGetSchool);
        expect(e.getschool()).toEqual(testGetSchool);
    });
})


