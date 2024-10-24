let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;
const sliderWrapper = document.querySelector('.slider-wrapper');

document.querySelector('.next-card').addEventListener('click', () => {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // возвращаемся к первой карточке
  }
  updateSlider();
});

document.querySelector('.prev-card').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - 1; // возвращаемся к последней карточке
  }
  updateSlider();
});

function updateSlider() {
  const offset = -currentIndex * 408; // 384px ширина карточки + 24px отступ
  sliderWrapper.style.transform = translateX(${offset}px);
}

updateSlider(); // для начальной позиции