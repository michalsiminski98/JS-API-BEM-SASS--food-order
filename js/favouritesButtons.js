const navButton = document.querySelector('.navigation__list-element--favourites');
const favArrow = document.querySelector('.favourites-wrapper__arrow');
const favouriteWrapper = document.querySelector('.favourites-wrapper');

navButton.addEventListener('click', () => {
    favouriteWrapper.style.animation = null;
    favouriteWrapper.style = 'animation: favouriteDown 1s ease-out forwards;';

})
favArrow.addEventListener('click', () => {
    favouriteWrapper.style.animation = null;
    favouriteWrapper.style = 'animation: favouriteUp 1s ease-out forwards;';
})