const Engineer = require("../lib/Engineer");

describe("Engineer Test", () => {

    it("Can set GitHub account via constructor", () =>{
        const gitHub = "GithubuserID";
        const e = new Engineer (gitHub);
        expect(e.github).toBe(gitHub);

    });
    
    it("getRole() should return Engineer", () =>{
    
    });
    
    it("Can get GitHub username via getGithub", () =>{
    
    });
    




})



