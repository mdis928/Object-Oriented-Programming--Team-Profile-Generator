const Engineer = require("../lib/Engineer");

describe("Engineer Test", () => {

    it("Can set GitHub account via constructor", () => {
        const GitHubTest = "mdis928";
        const e = new Engineer ("Foo", "0", "mike@gmail.com", GitHubTest);
        expect(e.gitHub).toEqual(GitHubTest)

    });
    
    it("getRole() should return Engineer", () =>{
        const testRole = "Engineer";
        const e = new Engineer ();
        expect(e.getRole()).toEqual(testRole);
    
    });
    
    it("Can get GitHub username via getgitHub()", () => {
        const getGitHubTest = "ztf37";
        const e = new Engineer ("foo", "0", "ztf37@gmail.com", getGitHubTest);
        expect(e.getgitHub()).toEqual(getGitHubTest)
    
    });
    
})



