var months = ["January","Febrauray","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
setInterval(() => {
    var date = new Date()
    document.getElementById("clock").innerHTML = date.getDate() + " " + months[date.getMonth()] + "   " +date.getHours() + ":" +date.getMinutes() +":" + date.getSeconds();
}, 1000)