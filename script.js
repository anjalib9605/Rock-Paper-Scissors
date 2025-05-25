let winCount= JSON.parse(localStorage.getItem('win-count')) || 0;
let tieCount=JSON.parse(localStorage.getItem('tie-count')) || 0;
let loseCount=JSON.parse(localStorage.getItem('lose-count')) || 0;

document.getElementById('win').textContent = winCount;
document.getElementById('tie').textContent = tieCount;
document.getElementById('lose').textContent = loseCount;

function computerMove() {
  const randNum= Math.random();
  let compMove= '';

  if (randNum<1/3) {
    compMove='✊🏼';
  } else if (randNum<2/3){
    compMove='✋🏼';
  } else{
    compMove='✌🏼';
  }

  return compMove;
}

function userMove(userChoice) {
  const compMove= computerMove();
  
  if (compMove===userChoice) {
    resultType='tieType';
    updatePoints()
    document.getElementById('result-statement').textContent= `You:${userChoice} Computer: ${compMove}
It's a Tie.`;

  } else if (
    (userChoice==='✊🏼' && compMove==='✌🏼') ||
    (userChoice==='✋🏼' && compMove==='✊🏼') ||
    (userChoice==='✌🏼' && compMove==='✋🏼')
  ) {
    resultType='winType';
    updatePoints()
    document.getElementById('result-statement').textContent= `You:${userChoice} Computer: ${compMove}
You win!`;

  } else {
    resultType='loseType';
    updatePoints()
    document.getElementById('result-statement').textContent= `You:${userChoice} Computer: ${compMove}
You lose.`;
  }
}

function updatePoints() {
  if (resultType==='winType') {
    winCount++;
    localStorage.setItem('win-count', JSON.stringify(winCount));
    document.getElementById('win').textContent=winCount;

  } else if(resultType==='tieType'){
    tieCount++;
    localStorage.setItem('tie-count', JSON.stringify(tieCount));
    document.getElementById('tie').textContent=tieCount;
    
  } else {
    loseCount++;
    localStorage.setItem('lose-count', JSON.stringify(loseCount));
    document.getElementById('lose').textContent=loseCount;
  }
}

function reset() {
  winCount=0;
  tieCount=0;
  loseCount=0;

  localStorage.setItem('win-count', JSON.stringify(winCount));
  localStorage.setItem('tie-count', JSON.stringify(tieCount));
  localStorage.setItem('lose-count', JSON.stringify(loseCount));

  document.getElementById('win').textContent= winCount;
  document.getElementById('tie').textContent= tieCount;
  document.getElementById('lose').textContent= loseCount;

  document.getElementById('result-statement').textContent= 'Points reset';
}
