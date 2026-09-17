const video = document.getElementById('hero-video');
const portrait = matchMedia('(orientation: portrait)');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
function setVideo() {
  video.src = portrait.matches ? 'assets/hero-video-mobile.mp4' : 'assets/hero-video-desktop.mp4';
  video.muted = true;
  video.autoplay = !reduced.matches;
  if (!reduced.matches) video.play().catch(() => {});
}
setVideo();
portrait.addEventListener('change', setVideo);
reduced.addEventListener('change', () => {
  video.autoplay = !reduced.matches;
  if (reduced.matches) video.pause();
  else video.play().catch(() => {});
});
const galleries = [...document.querySelectorAll('.photographs')].map(group => ({
  images: [...group.querySelectorAll('img')], index: 0
}));
// Keep zooming through the 1-second fade-out, without snapping back.
const zooms = new WeakMap();
function startZoom(image) {
  zooms.get(image)?.cancel();
  if (reduced.matches) return;
  zooms.set(image, image.animate(
    [{ transform: 'scale(1)' }, { transform: 'scale(1.15)' }],
    { duration: 4000, easing: 'linear', fill: 'forwards' }
  ));
}
galleries.forEach(gallery => {
  const image = gallery.images[0];
  if (!image) return;
  if (image.complete && image.naturalWidth) startZoom(image);
  else image.addEventListener('load', () => {
    if (image.classList.contains('active')) startZoom(image);
  }, { once: true });
});
reduced.addEventListener('change', () => {
  galleries.forEach(gallery => {
    gallery.images.forEach(image => zooms.get(image)?.cancel());
    if (!reduced.matches) startZoom(gallery.images[gallery.index]);
  });
});
setInterval(() => {
  if (document.hidden || reduced.matches) return;
  galleries.forEach(gallery => {
    if (gallery.images.length < 2) return;
    const next = (gallery.index + 1) % gallery.images.length;
    const image = gallery.images[next];
    if (!image.complete || !image.naturalWidth) return;
    gallery.images[gallery.index].classList.remove('active');
    startZoom(image);
    image.classList.add('active');
    gallery.index = next;
  });
}, 3000);
