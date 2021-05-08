// Note: this is similar to a markdown file

let html = []
let string = `

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
`

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
            <li class="list-group-item">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
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




module.exports = (team) => {
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
    for (let i = 0; i < html.length; i += 1) {
        string += html[i]
      } return string + '</body> </html>'
    
}




 

