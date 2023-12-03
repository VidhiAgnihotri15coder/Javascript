##Normal

```javascript
document.getElementById('owl').onclick = function(){
     alert("owl clicked")
```

``` javascript
document.getElementById('owl').addEventListener('click', function(){
    alert("owl clicked")}, false)
//  yahan pr third parameter default mein false hee hota hai 

//attachEvent() --> pehle yeh kaam aata tha
//jQuery - on
```
##//important ---> types of event, timestamp, defaultPrevented, target, toElement, srcElement. currentTarget,

//clientX, clientY, screenX, screenY,

//altkey, ctrlkey, shiftkey, keyCode

# Event Propagation
##//+++++++++++++EVENT POPAGATION...default mein jaise false hai okay, ab samjho ki meri images jo hain voh ul mein hain, aise mein agar maine do event listener lagai ek specific koi ek image ar aur dusra poore ul pr...jab main kahin bhi click krungi toh bss ul waala print hoega but agar maine specific waala image pr click kri tb toh dono print honge na kyuki voh image bhi h toh ul k andar hee, iska sequence yeh rhega ki pehle inner waala print hoega kyuki false k time bubble waala concept lgega (neeche se ooper)...but agar hum true dete toh fir capturing ka concept lagta matlab bahar se andar toh pehle ul waala click hoega

//    lekin ab suppose kro hume aage tak nhi jaana bubbling k Time, hum aur pass nhi hone dena chaahte hum yeh chaahte h ki inner element alag reh jaae. aise mein hum use krenge stopPopagation
``` javascript
document.getElementById('images').addEventListener('click', function(e){
    console.log("all images");
 }, false)


 document.getElementById('owl').addEventListener('click', function(e){
    console.log("owl");
e.stopPropagation() //isse bubbling ruk jaaegi
 }, false)
//ek e.preventDefault() yaad rakhna
```
##removing image
``` javascript
document.querySelector('#images').addEventListener
('click', function(e){
console.log(e.target.tagName);
if(e.target.tagName === 'IMG'){
console.log(e.target.id);
let removeIt = e.target.parentNode
removeIt.remove()
}
})

//OR
//removeIt.parentNode.removeChild(remoeIt)
```


