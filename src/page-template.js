// Note: this is similar to a markdown file

let html = []
let team = []

const generateManager = Manager => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${Manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${Manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${Manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${Manager.getofficeNumber()}</li>
        </ul>
    </div>
</div>
    `;
};

const generateEngineer = Engineer => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${Engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${Engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${Engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${Engineer.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${Engineer.getgitHub()}</li>
        </ul>
    </div>
</div>
    `;
};

const generateIntern = Intern => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${Intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${Intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${Intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${Intern.getschool()}</li>
        </ul>
    </div>
</div>
    `;
};



html.push (team
    .filter(employee=>employee.getRole()==="Engineer")
    .map(Engineer=>generateEngineer(Engineer))
    .join("")
);

html.push (team
    .filter(employee=>employee.getRole()==="Manager")
    .map(Manager=>generateManager(Manager))
    .join("")
);

html.push (team
    .filter(employee=>employee.getRole()==="Intern")
    .map(Intern=>generateIntern(Intern))
    .join("")
);


 

