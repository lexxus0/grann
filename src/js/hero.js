const shu = document.querySelector('.shu-block__picture');
const mousseCake = document.querySelector('.mousse-block__picture');
const tart = document.querySelector('.tart-block__picture');
const mixer = document.querySelector('.mixer-block__picture');

document.onmousemove = e => {
  const x = e.clientX / window.innerWidth;

  const y = e.clientY / window.innerHeight;

  shu.style.transform = `translate(-${x * 2}px, -${y * 2}px)`;
  mousseCake.style.transform = `translate(-${x * 10}px, -${y * 10}px)`;
  tart.style.transform = `translate(-${x * 6}px, -${y * 6}px)`;
  mixer.style.transform = `translate(-${x * 30}px, -${y * 30}px)`;
};
