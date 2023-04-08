'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    // const gameFigure = lang => {

    // };

    const lang = language === 'EN' || language === 'ENG' ?
      FIGURES_ENG : FIGURES_RUS;

    return function start() {
      const playerChoice = prompt('камень, ножницы, бумага?');/*.toLowerCase()*/
      console.log('playerChoice: ', playerChoice);
      const compRandom = getRandomIntInclusive(0, 2);
      console.log('compRandom: ', compRandom);
      let compChoice = '';

      switch (true) {
        case (compRandom === 0):
          compChoice = 'камень';
          break;

        case (compRandom === 1):
          compChoice = 'ножницы';
          break;

        case (compRandom === 2):
          compChoice = 'бумага';
          break;
      }
      console.log('compChoice: ', compChoice);

      switch (true) {
        case playerChoice === null:
          alert('Точно ли он хочет выйти?');
          break;

        case (playerChoice === 'камень' && compChoice === 'камень'):
          alert(`Игрок: ${playerChoice},
          Компьютер: ${compChoice},
          Ничья!`);
          start();
          break;

        case (playerChoice === 'ножницы' && compChoice === 'ножницы'):
          alert(`Игрок: ${playerChoice},
          Компьютер: ${compChoice},
          Ничья!`);
          start();
          break;

        case (playerChoice === 'бумага' && compChoice === 'бумага'):
          alert(`Игрок: ${playerChoice},
          Компьютер: ${compChoice},
          Ничья!`);
          start();
          break;

        case (playerChoice === 'камень' && compChoice === 'ножницы'):
          alert(`Игрок: ${playerChoice},
          Компьютер: ${compChoice},
          Вы выиграли!`);
          start();
          break;

        case (playerChoice === 'камень' && compChoice === 'бумага'):
          alert(`Игрок: ${playerChoice},
          Компьютер: ${compChoice},
          Вы проиграли!`);
          start();
          break;

        case (playerChoice === 'ножницы' && compChoice === 'камень'):
          alert(`Игрок: ${playerChoice},
          Компьютер: ${compChoice},
          Вы проиграли!`);
          start();
          break;

        case (playerChoice === 'ножницы' && compChoice === 'бумага'):
          alert(`Игрок: ${playerChoice},
          Компьютер: ${compChoice},
          Вы выиграли!`);
          start();
          break;

        case (playerChoice === 'бумага' && compChoice === 'камень'):
          alert(`Игрок: ${playerChoice},
          Компьютер: ${compChoice},
          Вы выиграли!`);
          start();
          break;

        case (playerChoice === 'бумага' && compChoice === 'ножницы'):
          alert(`Игрок: ${playerChoice}, 
          Компьютер: ${compChoice}, 
          Вы проиграли!`);
          start();
          break;
      }
    };
  };

  window.RPS = game;
})();

// if (compRandom === 0) {
//   alert(comp = 'камень');
// }
// if (compRandom === 1) {
//   comp = 'ножницы';
// }
// if (compRandom === 2) {
//   comp = 'бумага';
// }
