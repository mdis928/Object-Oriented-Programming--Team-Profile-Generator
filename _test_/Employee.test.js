const Employee = require("../lib/Employee");

 test("Can initiate employee instance", () =>{
     const e = new Employee();
     expect(typeof(e)).toBe("object");
 });