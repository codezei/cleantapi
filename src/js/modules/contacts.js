export default function () {
  const map = document.querySelector(".contacts__iframe");
  const trigger = document.getElementById("map-load-trigger");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Создаём iframe через JS
          const iframe = document.createElement("iframe");
          iframe.className = "contacts__iframe";
          iframe.src = map.dataset.src;
          iframe.width = "640";
          iframe.height = "480";
          iframe.style.border = "0";
          iframe.allowFullscreen = true;
          iframe.name = "White Clean";

          // Вставляем iframe в контейнер
          map.replaceWith(iframe);
          obs.unobserve(trigger);
        }
      });
    });
    observer.observe(trigger);
  } else {
          // Создаём iframe через JS
          const iframe = document.createElement("iframe");
          iframe.className = "contacts__iframe";
          iframe.src = map.dataset.src;
          iframe.width = "640";
          iframe.height = "480";
          iframe.style.border = "0";
          iframe.allowFullscreen = true;
          iframe.name = "White Clean";

          // Вставляем iframe в контейнер
          map.replaceWith(iframe);
  }
}