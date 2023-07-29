function createSquare(id) {
  const square = document.createElement('div');
  square.classList.add('square');

  const text = document.createElement('p');
  text.textContent = 'nicat@example.com';
  square.appendChild(text);

  const heart = document.createElement('p');
  heart.classList.add('heart');
  heart.innerHTML = '&#x2665;';
  heart.addEventListener('click', function () {
    if (heart.style.color === 'black') {
      heart.style.color = 'red';
    } else {
      heart.style.color = 'black';
    }
  });
  square.appendChild(heart);

  return square;
}

function addSquare(square) {
  document.body.appendChild(square);
}

for (let i = 1; i <= 5; i++) {
  const square = createSquare('square' + i);
  addSquare(square);
}
