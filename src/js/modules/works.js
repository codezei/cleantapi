export default function () {
  let galleries = document.querySelectorAll(".gallery");

  for (let i = 0; i < galleries.length; i++) {
    lightGallery(galleries[i], {
      animateThumb: false,
      zoomFromOrigin: false,
      allowMediaOverlap: true,
      toggleThumb: true,
    });
  }
}
