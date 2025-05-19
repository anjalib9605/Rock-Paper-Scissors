let winCount=0;
let tieCount=0;
let loseCount=0;

      function computerMove() {
        const randNum= Math.random();
        let compMove= '';

        if (randNum<1/3) {
          compMove='rock';
        } else if (randNum<2/3){
          compMove='paper';
        } else{
          compMove='scissors';
        }

        return compMove;
      }

      function userMove(userChoice) {
        const compMove= computerMove();
        
        if (compMove===userChoice) {
          resultType='tieType';
          updatePoints()
          document.getElementById('result-statement').textContent= `Computer also picked ${compMove}. It's a tie.`;

        } else if (
          (userChoice==='rock' && compMove==='scissors') ||
          (userChoice==='paper' && compMove==='rock') ||
          (userChoice==='scissors' && compMove==='paper')
        ) {
          resultType='winType';
          updatePoints()
          document.getElementById('result-statement').textContent= `Computer picked ${compMove}. You won!`;

        } else {
          resultType='loseType';
          updatePoints()
          document.getElementById('result-statement').textContent= `Computer picked ${compMove}. You lose.`;
        }
      }

     function updatePoints() {
      if (resultType==='winType') {
        winCount++;
        document.getElementById('win').textContent=winCount;
      } else if(resultType==='tieType'){
        tieCount++;
        document.getElementById('tie').textContent=tieCount;
      } else {
        loseCount++;
        document.getElementById('lose').textContent=loseCount;
      }
     }

      function reset() {
        winCount=0;
        tieCount=0;
        loseCount=0;

        document.getElementById('win').textContent= winCount;
        document.getElementById('tie').textContent= tieCount;
        document.getElementById('lose').textContent= loseCount;

        document.getElementById('result-statement').textContent= 'Points reset';
      }
