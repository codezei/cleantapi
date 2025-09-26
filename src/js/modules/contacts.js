export default function () {
  const map = document.querySelector(".contacts__iframe");
  const trigger = document.getElementById("map-load-trigger");

  window.addEventListener('load', function () {
            const iframe = document.createElement("iframe");
          iframe.className = "contacts__iframe";
          iframe.src = map.dataset.src;
          iframe.width = "640";
          iframe.height = "480";
          iframe.style.border = "0";
          iframe.allowFullscreen = true;
          iframe.name = "CleanTapi";


          map.replaceWith(iframe);
  })

  // if ("IntersectionObserver" in window) {
  //   const observer = new IntersectionObserver((entries, obs) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {

  //         const iframe = document.createElement("iframe");
  //         iframe.className = "contacts__iframe";
  //         iframe.src = map.dataset.src;
  //         iframe.width = "640";
  //         iframe.height = "480";
  //         iframe.style.border = "0";
  //         iframe.allowFullscreen = true;
  //         iframe.name = "CleanTapi";


  //         map.replaceWith(iframe);
  //         obs.unobserve(trigger);
  //       }
  //     });
  //   });
  //   observer.observe(trigger);
  // } else {

  //         const iframe = document.createElement("iframe");
  //         iframe.className = "contacts__iframe";
  //         iframe.src = map.dataset.src;
  //         iframe.width = "640";
  //         iframe.height = "480";
  //         iframe.style.border = "0";
  //         iframe.allowFullscreen = true;
  //         iframe.name = "CleanTapi";


  //         map.replaceWith(iframe);
  // }
}