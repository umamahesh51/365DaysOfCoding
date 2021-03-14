let db = null;
let request = indexedDB.open("Tasks", 1)
request.onupgradeneeded = e => {
    console.log("DataBase is Upgraded.")
    db = e.target.result;
    db.createObjectStore("MyTasks", { keyPath: "name" })
}
request.onsuccess = e => {
    console.log("DataBase is Created.")
    db = e.target.result;
    loadTasks();
}
request.onerror = e => {
    alert("Error while Creating IndexDB. This Application won't work in this Browser. Sorry :)")
}
function loadTasks() {
    if (db == null) {
        alert("DataBase is not created, can't load existing tasks")
        return;
    }
    var readTx = db.transaction('MyTasks', 'readonly');
    var myTasksStore = readTx.objectStore('MyTasks');
    let tasks = document.getElementById("task-list")
    myTasksStore.openCursor().onsuccess = e => {
        var cursor = e.target.result;
        if (cursor) {
            if (tasks.style.display == '') {
                tasks.style.display = 'flex'
            }
            var task = createTask(cursor.value.name, cursor.value.category, cursor.value.dueTime)
            tasks.tBodies[0].appendChild(task);
            cursor.continue();
        } else {
            console.log('All Tasks are displayed.');
        }
    }
}

class Task {
    constructor(name, category, date) {
        this.name = name;
        this.category = category;
        this.date = date;
    }
}
function showForm() {
    document.getElementById('my-form').style.display = 'block'
}
let addTaskToIndexDB = (name, category, dueTime) => {
    var task = {
        "name": name,
        "category": category,
        "dueTime": dueTime
    }
    const tranSaction = db.transaction('MyTasks', 'readwrite');
    tranSaction.onerror = e => {
        alert(e.target)
    }
    const tasks = tranSaction.objectStore('MyTasks')
    tasks.add(task)
}
function addTask(event) {
    let formElements = document.getElementById('form').elements;
    let name = formElements['name'].value;
    let category = formElements['category'].value
    let dueTime = formElements['due-time'].value
    console.log(name)
    let tasks = document.getElementById("task-list")
    if (tasks.style.display == '') {
        tasks.style.display = 'flex'
    }
    var task = createTask(name, category, dueTime);
    tasks.tBodies[0].appendChild(task)
    closeForm()
    addTaskToIndexDB(name, category, dueTime)
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