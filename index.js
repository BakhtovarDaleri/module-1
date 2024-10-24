let currentIndex = 0;
const cards = document.querySelector(".cards-block");
const totalCards = document.querySelectorAll(".card").length;
const cardWidth = document.querySelector(".card").offsetWidth; // Ширина одной карточки

// Функция для смены слайда
function changeSlide(direction) {
  currentIndex += direction;

  // Если индекс выходит за пределы, возвращаем в начало или конец
  if (currentIndex < 0) {
    currentIndex = totalCards - 1;
  } else if (currentIndex >= totalCards) {
    currentIndex = 0;
  }

  updateSlider();
}

// Функция для переключения на текущий слайд по индикатору
function currentSlide(index) {
  currentIndex = index;
  updateSlider();
}

// Обновление слайдера
function updateSlider() {
  cards.style.transform = `translateX(${-cardWidth * currentIndex}px)`;

  // Обновление активного индикатора
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

// Инициализация - показываем первый слайд
updateSlider();
