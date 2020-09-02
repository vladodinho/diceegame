let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let picturePath1 = `images/dice${randomNumber1}.png`;
document.querySelector('.img1').setAttribute('src', picturePath1);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let picturePath2 = `images/dice${randomNumber2}.png`;
document.querySelector('.img2').setAttribute('src', picturePath2);

let title = document.querySelector('h1');

if(randomNumber1 === randomNumber2) {
  title.textContent = 'Draw!';
} else if (randomNumber1 > randomNumber2) {
  title.textContent = 'Player 1 Wins!';
} else {
  title.textContent = 'Player 2 Wins!';
}