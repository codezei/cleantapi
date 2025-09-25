export default function () {
  let galleries = document.querySelectorAll(".gallery");

  let categoriesNavigation = [...document.querySelectorAll('.categories-navigation-swiper')];
  let categoriesContent = [...document.querySelectorAll('.categories-content-swiper')];

  categoriesNavigation.map((categoriesNavigationSwiper)=>{
    let swiper = new Swiper(categoriesNavigationSwiper, {
      spaceBetween: 0,
      slidesPerView: "auto",
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      initialSlide: initialCategory || 0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      roundLengths: true,
      on: {
        click(swiper) {
          const clickedIndex = swiper.clickedIndex;
          if (clickedIndex !== undefined) {
            swiper.slideTo(clickedIndex);
          }
        },
      },
    })
    
    return swiper
  });

  categoriesContent.map((categoriesContentSwiper, categoriesContentSwiperIndex)=>{
    let swiper = new Swiper(categoriesContentSwiper, {
      spaceBetween: 8,
      slideToClickedSlide: true,
      watchSlidesProgress: true,
      initialSlide: initialCategory || 0,
      thumbs: {
        swiper: categoriesNavigation[categoriesContentSwiperIndex].swiper,
        multipleActiveThumbs: false,
      },
    })
    return swiper
  })


  categoriesNavigation.forEach((categoriesNavigationSwiper, categoriesNavigationSwiperIndex)=>{
    categoriesNavigationSwiper.swiper.on('slideChange', function (swiper) {
      if (categoriesContent[categoriesNavigationSwiperIndex]) {
        categoriesContent[categoriesNavigationSwiperIndex].swiper.slideTo(swiper.activeIndex);
      }
    })
  })
  categoriesContent.forEach((categoriesContentSwiper, categoriesContentSwiperIndex)=>{
    categoriesContentSwiper.swiper.on('slideChange', function (swiper) {
      if (categoriesNavigation[categoriesContentSwiperIndex]) {
        categoriesNavigation[categoriesContentSwiperIndex].swiper.slideTo(swiper.activeIndex);
      }
    })
  })







  // let worksCategoriesSwiper = new Swiper(".works-categories-swiper", {
  //   spaceBetween: 0,
  //   slidesPerView: "auto",
  //   watchSlidesProgress: true,
  //   slideToClickedSlide: true,
  //   initialSlide: initialCategory || 0,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   roundLengths: true,
  //   on: {
  //     click(swiper) {
  //       const clickedIndex = swiper.clickedIndex;
  //       if (clickedIndex !== undefined) {
  //         swiper.slideTo(clickedIndex);
  //       }
  //     },
  //     slideChange: function (swiper) {
  //       if (worksSwiper) {
  //         worksSwiper.slideTo(swiper.activeIndex);
  //       }
  //     },
  //   },
  // });

  // let worksSwiper = new Swiper(".works-swiper", {
  //   spaceBetween: 8,
  //   slideToClickedSlide: true,
  //   watchSlidesProgress: true,
  //   initialSlide: initialCategory || 0,
  //   thumbs: {
  //     swiper: worksCategoriesSwiper,
  //     multipleActiveThumbs: false,
  //   },
  //   on: {
  //     slideChange: function (swiper) {
  //       if (worksCategoriesSwiper) {
  //         worksCategoriesSwiper.slideTo(swiper.activeIndex);
  //       }
  //     },
  //   },
  // });

  for (let i = 0; i < galleries.length; i++) {
    lightGallery(galleries[i], {
      animateThumb: false,
      zoomFromOrigin: false,
      allowMediaOverlap: true,
      toggleThumb: true,
    });
  }
}
