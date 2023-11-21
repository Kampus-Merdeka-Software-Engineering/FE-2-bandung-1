const carrousel = document.querySelector('.carrousel');
firstimg = carrousel.querySelectorAll('img')[0];
arrowIcons = document.querySelectorAll('.wrapper i');

let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

const showHideIcons = () => {
  let scrollWidth = carrousel.scrollWidth - carrousel.scrollWidth;
  arrowIcons[0].style.display = carrousel.scrollLeft == 0 ? 'none' : 'block';
  arrowIcons[1].style.display = carrousel.scrollLeft == scrollWidth ? 'none' : 'block';
};

arrowIcons.forEach((icon) => {
  let firstImgWidth = firstimg.clientWidth + 14;
  icon.addEventListener('click', () => {
    carrousel.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

const autoSlide = () => {
  if (carrousel.scrollLeft == carrousel.scrollWidth - carrousel.clientWidth) return;

  positionDiff = Math.abs(positionDiff);
  let firstImgWidth = firstimg.clientWidth + 14;
  let valDifference = firstImgWidth - positionDiff;
  if (carrousel.scrollLeft > prevScrollLeft) {
    return (carrousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }
  carrousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carrousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carrousel.classList.add('dragging');
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carrousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carrousel.classList.remove('dragging');
  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

carrousel.addEventListener('mousedown', dragStart);
carrousel.addEventListener('touchstart', dragStart);

carrousel.addEventListener('mousemove', dragging);
carrousel.addEventListener('touchmove', dragging);

carrousel.addEventListener('mouseup', dragStop);
carrousel.addEventListener('mouseleave', dragStop);
carrousel.addEventListener('touchend', dragStop);
