const basket = document.querySelector('.meal__basket');
const wrapper = document.querySelector('.favourites-wrapper__box');


const addOrder = () => {
    alert("Dodano do zamówienia");
    // create order wrapper
    let order = document.createElement('div');
    let image = document.createElement('div');
    let title = document.createElement('p');

    order.classList.add('favourites-wrapper__order');
    image.classList.add('favourites-wrapper__photo');
    title.classList.add('favourites-wrapper__title');

    wrapper.appendChild(order);
    order.appendChild(image);
    order.appendChild(title);

    // add dish to order
    image.style.backgroundImage = `${document.querySelector('.meal__img').style.backgroundImage}`;
    title.innerHTML = `${document.querySelector('.meal__name').innerHTML}`;
}




basket.addEventListener('click', addOrder);