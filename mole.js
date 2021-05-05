function popUpRandomMole() {
  let moleHeads = document.querySelectorAll(".wgs__mole-head");
  let randomNum = Math.floor(Math.random() * 8);
  let mole = moleHeads[randomNum];
  mole.classList.remove('wgs__mole-head--hidden');
  setTimeout(()=> hideMole(mole), 3000);
}

function hideMole(mole) {
  mole.classList.add('wgs__mole-head--hidden');
  setTimeout(popUpRandomMole, 0);
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(popUpRandomMole, 0);
  let moleHeads = document.querySelectorAll(".wgs__mole-head");
  moleHeads.forEach( mole => {
    mole.addEventListener('click', (event)=> {
      console.log('hello')
      event.target.classList.add('wgs__mole-head--hidden');
      // popUpRandomMole();
    });
  });
});
