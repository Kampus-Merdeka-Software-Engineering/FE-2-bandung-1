const imageThumb = document.querySelectorAll('.karya .thumb');
imageThumb.forEach((thumbnail) => {
  const imageUrl = thumbnail.getAttribute('data-thumbnail');
  thumbnail.style.backgroundImage = `url(${imageUrl})`;
});
