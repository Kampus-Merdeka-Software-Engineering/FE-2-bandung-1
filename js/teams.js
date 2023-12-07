const imageThumb = document.querySelectorAll('.karya .thumb');
console.log(imageThumb);
imageThumb.forEach((thumbnail) => {
  const imageUrl = thumbnail.getAttribute('data-thumbnail');
  thumbnail.style.backgroundImage = `url(${imageUrl})`;
});