const dua = document.querySelector('.dua');
firstimg = dua.querySelectorAll('img')[0];
arrowIcons = document.querySelectorAll('.satu i');

let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

const showHideIcons = () => {
  let scrollWidth = dua.scrollWidth - dua.scrollWidth;
  arrowIcons[0].style.display = dua.scrollLeft == 0 ? 'none' : 'block';
  arrowIcons[1].style.display = dua.scrollLeft == scrollWidth ? 'none' : 'block';
};

arrowIcons.forEach((icon) => {
  let firstImgWidth = firstimg.clientWidth + 14;
  icon.addEventListener('click', () => {
    dua.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

const autoSlide = () => {
  if (dua.scrollLeft == dua.scrollWidth - dua.clientWidth) return;

  positionDiff = Math.abs(positionDiff);
  let firstImgWidth = firstimg.clientWidth + 14;
  let valDifference = firstImgWidth - positionDiff;
  if (dua.scrollLeft > prevScrollLeft) {
    return (dua.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }
  dua.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = dua.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  dua.classList.add('dragging');
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  dua.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  dua.classList.remove('dragging');
  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

dua.addEventListener('mousedown', dragStart);
dua.addEventListener('touchstart', dragStart);

dua.addEventListener('mousemove', dragging);
dua.addEventListener('touchmove', dragging);

dua.addEventListener('mouseup', dragStop);
dua.addEventListener('mouseleave', dragStop);
dua.addEventListener('touchend', dragStop);
