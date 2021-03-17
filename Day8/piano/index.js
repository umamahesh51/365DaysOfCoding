 var WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
 var BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']
 var keys = document.querySelectorAll('.key')
 var whiteKeys = document.querySelectorAll('.key.white')
 var blackKeys = document.querySelectorAll('.key.black')
 keys.forEach(key => {
     key.addEventListener('click', () => playNote(key))
 })

 function playNote(key) {
     const noteAudio = document.getElementById(key.dataset.note)
     noteAudio.currentTime = 0;
     noteAudio.play()
     key.classList.add('active')
     noteAudio.addEventListener('ended', () => {
         key.classList.remove('active')
     })
 }
 document.addEventListener('keydown', (e) => {
     if (e.repeat) {
         return
     }
     const pressedKey = e.key
     let index = WHITE_KEYS.indexOf(pressedKey)
     if (index > -1) {
         playNote(whiteKeys[index])
     }
     index = BLACK_KEYS.indexOf(pressedKey)
     if (index > -1) {
         playNote(blackKeys[index])
     }
 })
