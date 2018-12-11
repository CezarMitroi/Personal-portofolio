let caesar = document.getElementById('click')
caesar.onclick = insert;
function insert(){
document.getElementById('me').src = 'https://i.postimg.cc/sx8pfNhC/DSC-6460.jpg';
document.getElementById('me').style.display = 'inline-block';
document.getElementById('emperor').src = 'http://www.walmerweb.co.uk/history/jcaesar-bust-001.jpg';
document.getElementById('emperor').style.display = 'inline-block';
document.getElementById('sign').src = 'https://i.postimg.cc/MTcW1PLG/2260-500x500.png';
document.getElementById('sign').style.display = 'inline-block';
}
let colors = ['red','yellow','blue','green','violet','white','orange','indigo']

function background() {
 document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
  let conclusion = document.getElementById('conclusion');
  conclusion.style.display = 'block'
switch(document.body.style.backgroundColor){
    case 'red':
      conclusion.innerHTML = 'neah';
      break;
  case 'yellow':
    conclusion.innerHTML = 'not again';
    break;
  case 'blue':
    conclusion.innerHTML = 'no';
    break;
  case 'green':
    conclusion.innerHTML = 'hell no';
    break;
  case 'violet':
    conclusion.innerHTML = 'never';
    break;
  case 'white':
    conclusion.innerHTML = 'too mainstream';
    break;
  case 'orange':
    conclusion.innerHTML = 'nope';
    break;
  case 'indigo':
    conclusion.innerHTML = 'neither this';
    break;
  }
}
function revert(){
  document.body.style.backgroundColor = 'black';
  conclusion.innerHTML = 'perfect, now click me';
  conclusion.style.color = 'white';
  conclusion.style.fontSize = '20px';
}
//button move conclusion
function magnify(){
let size = 0;
let bigger = setInterval(getBig,10);
function getBig(){
 if(size == 100){
     clearInterval(bigger);
    }else{
       size++;
      conclusion.style.fontSize = size + 'px';
    }
}
}
function pop() {
    alert("Hope you like it");
}
