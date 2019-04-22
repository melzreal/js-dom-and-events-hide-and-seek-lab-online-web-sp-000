function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
 return document.querySelector('.target');
}

function increaseRankBy(n){
  let goodies = document.querySelectorAll('ul.ranked-list li');

  for(let i=0; i< goodies.length; i++) {
    goodies[i].innerHTML = parseInt(goodies[i].innerHTML) + n;
  }
}


function deepestChild(){
 return document.querySelector('div#grand-node div div div div');
}
