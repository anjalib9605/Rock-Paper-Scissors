let score=0;

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
          updatePoints(1)
          document.getElementById('result').textContent= `Computer also picked ${compMove}. It's a tie. You got 1 point!`;
        } else if (
          (userChoice==='rock' && compMove==='scissors') ||
          (userChoice==='paper' && compMove==='rock') ||
          (userChoice==='scissors' && compMove==='paper')
        ) {
          updatePoints(2)
          document.getElementById('result').textContent= `Computer picked ${compMove}. You won 2 points!`;
        } else {
          document.getElementById('result').textContent= `Computer picked ${compMove}. You lose.`;
        }
      }

      function updatePoints(pointNum) {
        score+=pointNum;
        document.getElementById('points').textContent= score;
      }

      function reset() {
        score=0;
        document.getElementById('points').textContent= score;
        document.getElementById('result').textContent= 'Points reset';
      }