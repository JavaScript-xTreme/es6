$(document).ready(init);

function init(){
  $('#show').click(show);
  $('#swap').click(swap);
  $('#power').click(power);
  $('#gen').click(gen);
}

function show(){
  let numbers = $('#numbers').val().split(',').map(n=>n*1).filter(n=>n%2===1).map(n=>n*n).map(n=>`<div>${n}</div>`);
  $('#odds').append(numbers);
}

function swap(){
  let numbers = $('#numbers').val().split(',').map(n=>n*1);
  let [area, vol] = dimension(...numbers);
  console.log(area);
  console.log(vol);
}

function dimension(l,w,h){
  let area = l*w;
  let vol = area * h;
  return [area, vol];
}

function power(){
  var nums = $('#numbers').val().split(',').map(n=>n*1);
  var result = exponent(...nums);
  console.log(result);
}

function exponent(base, exp=2){
  return Math.pow(base, exp);
}

function gen(){
  var values = [for(x of counter())for(y of counter()){x:x, y:y}].map(o=>`<div>x:${o.x} y:${o.y}</div>`)
  console.log(values);
}

function* counter(){
  for(var i = 0; i < 10; i++)
  {
    yield i;
  }
}
