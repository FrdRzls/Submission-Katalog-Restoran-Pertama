import 'regenerator-runtime';
import '../styles/main.css';
import DATA from '../public/data/DATA.json';

console.log('Hello Coders! :)');

const skipLink = document.querySelector('.skip-link');

skipLink.addEventListener('click', () => {
  skipLink.style.display = 'none'; 
});

const toggleBtn = document.getElementById('toggleBtn');
const nav = document.querySelector('nav ul');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function () {


  const restaurantListElement = document.getElementById('restaurant-list');

  DATA.restaurants.forEach(restaurant => {
    const restaurantCard = document.createElement('div');
    restaurantCard.classList.add('restaurant-card');
    restaurantCard.setAttribute("tabindex", 0);

    const restaurantImage = document.createElement('img');
    restaurantImage.src = restaurant.pictureId;
    restaurantImage.alt = restaurant.name;

    const restaurantCity = document.createElement('h2');
    restaurantCity.textContent = `City: ${restaurant.city}`;

    const restaurantRating = document.createElement('h3');
    restaurantRating.innerHTML = `Rating: <span class="fas fa-star"></span> ${restaurant.rating}`; 
    
    const restaurantName = document.createElement('h3');
    restaurantName.textContent = restaurant.name;
    restaurantName.classList.add('restaurantName'); 

    const restaurantDescription = document.createElement('p');
    restaurantDescription.textContent = restaurant.description;

    restaurantCard.appendChild(restaurantImage);
    restaurantCard.appendChild(restaurantCity);
    restaurantCard.appendChild(restaurantRating);
    restaurantCard.appendChild(restaurantName);
    restaurantCard.appendChild(restaurantDescription);
   

    restaurantListElement.appendChild(restaurantCard);
  });
});

const btnBackToTop = document.querySelector('.btn-back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnBackToTop.style.display = 'block';
  } else {
    btnBackToTop.style.display = 'none';
  }
});

btnBackToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
