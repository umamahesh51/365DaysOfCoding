class Task{
    constructor(name, category, date){
        this.name = name;
        this.category = category;
        this.date = date;
    } 
}   
function showForm() {
    document.getElementById('my-form').style.display = 'block'
}
function addTask(event) {
    var formElements = document.getElementById('form').elements;
    let name = formElements['name'].value;
    let category = formElements['category'].value
    let dueTime = formElements['due-time'].value
    console.log(name)
    var tasks = document.getElementById("task-list")
    if (tasks.style.display == '') {
        tasks.style.display = 'flex'
    }
    var task = createTask(name, category, dueTime);
    tasks.appendChild(task)
    closeForm()
    event.preventDefault()
}
function createTask(name, category, dueTime) {
    var task = document.createElement('tr');
    task.setAttribute("class", "task");
    let nameLabel = document.createElement('td');
    nameLabel.innerHTML = name;
    task.appendChild(nameLabel);
    let categoryLabel = document.createElement('td');
    categoryLabel.innerHTML = category;
    task.appendChild(categoryLabel);
    let dueTimeLabel = document.createElement('td');
    dueTimeLabel.innerHTML = dueTime;
    task.appendChild(dueTimeLabel);
    return task;
}

function closeForm() {
    document.getElementById('my-form').style.display = 'none'

}