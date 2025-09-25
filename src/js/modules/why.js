export default function why () {
    // let processSlider = new BeerSlider( document.getElementById( "process-slider" ) );
// let categories = document.querySelectorAll('.why .category')

// let whySwiper = new Swiper(".why-swiper", {
//     spaceBetween: 10,
//     autoHeight: true,
//     on: {
//         slideChange: function (e) {
//             document.querySelector('.why .category.active').classList.remove('active')
//             document.querySelector(`.why .category[data-slide="${e.activeIndex}"]`).classList.add('active')
//         }
//     }
// });
// for(let c = 0; c < categories.length; c++) {
//     categories[c].addEventListener('click', function (e) {
//         whySwiper.slideTo(e.currentTarget.dataset.slide)
//     })
// }

let furnitureSlider = new BeerSlider( document.getElementById( "furniture-slider" ) );
let mattressSlider = new BeerSlider( document.getElementById( "mattress-slider" ) );
let carpetSlider = new BeerSlider( document.getElementById( "carpet-slider" ) );
let windowSlider = new BeerSlider( document.getElementById( "window-slider" ) );
let salonSlider = new BeerSlider( document.getElementById( "salon-slider" ) );
}