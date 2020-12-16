const form = document.querySelector('.food-wrapper__dropdown');
const dishID = document.querySelector('.meal__id-number');
const dishImg = document.querySelector('.meal__img');
const dishName = document.querySelector('.meal__name');

fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=382f2153f9e94038b65be3fc6bd4b903")
    .then(response => {
        return response.json();
    })
    // adding options to form
    .then(json => recipe(json.results))

    .catch(err => {
        console.error(err);
    });



const recipe = (recipe) => {

    // add ID to list
    for (let i = 0; i < 10; i++) {
        let option = document.createElement('option');
        option.innerHTML = recipe[i].id;
        option.classList.add('food-wrapper__option');
        form.appendChild(option);
    }

    // first dish
    dishID.innerHTML = recipe[0].id;
    dishImg.style.backgroundImage = `url("${recipe[0].image}")`;
    dishName.innerHTML = recipe[0].title;

    // current dish - changing id img and title
    form.addEventListener('change', (e) => {
        dishID.textContent = e.currentTarget.value;
        for (let i = 0; i < 10; i++) {
            if (parseInt(dishID.innerHTML) === recipe[i].id) {
                dishImg.style.backgroundImage = `url("${recipe[i].image}")`;
                dishName.innerHTML = recipe[i].title;
            }
        }
    });

}

// // API key
// // 382f2153f9e94038b65be3fc6bd4b903