const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock')

//dekho apan chaahte h ki bina baar baar save kiye ek baar run krne pr yeh time update hote jaae.
setInterval(function(){
  let date = new Date()
  //console.log(date.toLocaleTimeString()) --> dekho hume ise console mein nhi chlana h, hume node update krna h
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)