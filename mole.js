function popUpRandomMole() {
  let moleHeads = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)");
  let randomNum = Math.floor(Math.random() * moleHeads.length);
  let mole = moleHeads[randomNum];
  if (counter === 0) {
    counter = 30;
    window.alert('YOU WON!!!');
    location.reload()
  }
  mole.classList.remove('wgs__mole-head--hidden');
  setTimeout(()=> hideMole(mole), 5000);
}

function hideMole(mole) {
  mole.classList.add('wgs__mole-head--hidden');
  setTimeout(popUpRandomMole, 0);
}
let counter = 30;

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(popUpRandomMole, 0);
  let moleHeads = document.querySelectorAll(".wgs__mole-head");
  let toBonk = document.getElementById('counter');
  toBonk.innerHTML = `Digletts left to bonk: ${counter}`;
  moleHeads.forEach( mole => {
    mole.addEventListener('click', (event)=> {
      --counter;
      toBonk.innerHTML = `Digletts left to bonk: ${counter}`;
      event.target.classList.add('wgs__mole-head--hidden');
      // event.target.classList.add('wgs__mole-head--whacked');
      popUpRandomMole();
    });
  });
});
