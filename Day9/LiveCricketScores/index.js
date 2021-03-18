// // 
// var cricapi = require('cricapi')
// cricapi.setAPIKey('MX1mh0WK4lMHkO8D7l7N8H3aLto2')
// cricapi.cricketMatches(function(databundle){
//     console.log(databundle)
// })
var games = null
setInterval(() => fetchData(), 2000)

function fetchData() {
    window.fetch("https://cricapi.com/api/cricket?apikey=MX1mh0WK4lMHkO8D7l7N8H3aLto2")
        .then(response => response.json())
        .then(data => {
            if (!games) {
                initGames(data)
            }
            if (data.data && data.data.length > games.length) {
                initGames(data)
            }
            data.data.forEach((md, index) => {

                //var teamDetails = ''
                // window.fetch("https://cricapi.com/api/cricketScore?apikey=<API_KEY>&unique_id="+md.unique_id)
                // .then(response => response.json())
                // .then(scoreData => {
                //     console.log(scoreData)
                //     teamDetails+= scoreData.team-1 +" vs "+ scoreData.team-2;
                //     score.innerHTML = teamDetails + score.innerHTML;
                // })
                var score = games[index]
                score.innerHTML = md.description;
                //console.log(md.description + " - to grab more details, simply use the unique_id " + md.unique_id + " with the cricketScore api!");
            })
        })
        .catch(err => console.error(err))
}

function initGames(data) {
    var board = document.querySelector('.board')
    games = []
    for (let i = 0; i < data.data.length; i++) {
        var score = document.createElement('div')
        score.classList.add('game')
        board.appendChild(score)
        games[i] = score
    }
}
// .then( function(matchdata) {
//     console.log(matchdata)
// 	matchdata.forEach(function(md) {
// 		console.log(md.description + " - to grab more details, simply use the unique_id " + md.unique_id + " with the cricketScore api!");
// 	});
