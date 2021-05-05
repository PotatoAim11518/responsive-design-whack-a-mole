// Write your JS here.
// window.addEventListener('DOMContentLoaded', () => {

  //   setInterval(() => {
    //     const moleHeads = document.querySelectorAll('.wgs__mole-head');
    //     for (let moleHead of moleHeads) {
      //       moleHead.classList.toggle('wgs__mole-head--hidden');
      //     }
      //   }, 1000);

      // });

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(popUpRandomMole, 0);
});

function popUpRandomMole() {
  let moleHeads = document.querySelectorAll(".wgs__mole-head");
  let randomNum = Math.floor(Math.random() * 8);
  let mole = moleHeads[randomNum];
  mole.classList.remove('wgs__mole-head--hidden');
  setTimeout(hideMole, 1000, mole);
}

function hideMole(mole) {
  mole.classList.add('wgs__mole-head--hidden');
  setTimeout(popUpRandomMole, 1000);
}
