# Projects related to DOM
#Solution Code

##project 1 color changer

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
//ab yahan mujhe nodelist mili hai isliye yahan forEach laga sakte hain
buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click', function(e){
  console.log(e)
  console.log(e.target)
  if(e.target.id === 'grey'){
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id === 'white'){
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id === 'blue'){
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id === 'yellow'){
    body.style.backgroundColor = e.target.id
  }

  })
}) 
```

##project 2 bmi

``` javascript
const form = document.querySelector('form');
//const height = parseInt(document.querySelector('#height').value) --> this is wrong
form.addEventListener('submit', function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value) //isse input ki value mil jaaegi
  const weight = parseInt(document.querySelector('#weight').value) //isse input ki value mil jaaegi, aur apan yh submit krne k baad chaahte hain store hoe isliye andar mein likhenge...agar bahar likhte toh empty value store ho jaati
  const result = document.querySelector('#results')
  if(height === '' || height<0 || isNaN(height)){
result.innerHTML = `Please give a valid height ${height}`}
 else if(weight === '' || weight<0 || isNaN(weight)){
result.innerHTML = `Please give a valid weight ${weight}`
  }
  else{
  const bmi = (weight / ((height*height)/10000)).toFixed(2)//to fixed mtlb ki do decimal values tk dena values
  //show the results
  results.innerHTML = `<span>${bmi}</span>`
  }
});

```

##project 3 digital clock
``` javascript
const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock')

//dekho apan chaahte h ki bina baar baar save kiye ek baar run krne pr yeh time update hote jaae.
setInterval(function(){
  let date = new Date()
  //console.log(date.toLocaleTimeString()) --> dekho hume ise console mein nhi chlana h, hume node update krna h
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)

```