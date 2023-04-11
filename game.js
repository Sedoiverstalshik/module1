'use strict';

(() => {
  // const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  // const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

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

    // const lang = language === 'EN' || language === 'ENG' ?
    //   FIGURES_ENG : FIGURES_RUS;

    return function start() {
      const player = prompt('камень, ножницы, бумага?', '');

      const stringLower = function(str) {// преобразую в нижний регистр
        const playerNew = str;
        if (player === null) {
          return str = null;
        }
        return playerNew.trim().toLowerCase();
      };

      const playerChoice = stringLower(player);

      const compRandom = getRandomIntInclusive(0, 2);
      let compChoice = '';

      switch (true) {// выводим значение хода компьютера
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

      switch (true) {
        case (playerChoice === null):
          if (confirm('Вы точно хотите выйти?')) {
            alert(`Игрок: ${result.player} \nКомпьютер: ${result.computer}`);
            break;
          } else {
            start();
          }

          break;

        case (playerChoice === '' ||
          playerChoice !== 'камень' &&
          playerChoice !== 'ножницы' &&
          playerChoice !== 'бумага'):
          alert('Вы ввели не допустимые значения?');
          start();
          break;

        case (playerChoice === 'камень' && compChoice === 'камень' ||
          playerChoice === 'ножницы' && compChoice === 'ножницы' ||
          playerChoice === 'бумага' && compChoice === 'бумага'):
          alert(`Игрок: ${playerChoice},\nКомпьютер: ${compChoice},\nНичья!`);
          start();
          break;

        case (playerChoice === 'камень' && compChoice === 'ножницы' ||
          playerChoice === 'ножницы' && compChoice === 'бумага' ||
          playerChoice === 'бумага' && compChoice === 'камень'):
          alert(`Игрок: ${playerChoice},
          \nКомпьютер: ${compChoice},
          \nВы выиграли!`);
          result.player++;
          start();
          break;

        case (playerChoice === 'ножницы' && compChoice === 'камень' ||
          playerChoice === 'бумага' && compChoice === 'ножницы' ||
          playerChoice === 'камень' && compChoice === 'бумага'):
          alert(`Игрок: ${playerChoice},
          \nКомпьютер: ${compChoice},
          \nВы проиграли!`);
          result.computer++;
          start();
          break;
      }
    };
  };

  window.RPS = game;
})();
