// Note: this is similar to a markdown file

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
            <li class="list-group-item">Office number: ${manager.getofficeNumber()}</li>
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
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
    `;
};

