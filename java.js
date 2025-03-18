const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/tonkotsu.jpg", rating: 5, comment: "Rich and hearty." }
  ];
  
  function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = ''; 
  
    ramens.forEach(ramen => {
      const ramenImage = document.createElement('img');
      ramenImage.src = ramen.image;
      ramenImage.alt = ramen.name;
      ramenImage.addEventListener('click', () => handleClick(ramen));
      ramenMenu.appendChild(ramenImage);
    });
  }
  
  function handleClick(ramen) {
    const ramenImage = document.getElementById('ramen-image');
    const ramenName = document.getElementById('ramen-name');
    const ramenRestaurant = document.getElementById('ramen-restaurant');
    const ramenRating = document.getElementById('ramen-rating');
    const ramenComment = document.getElementById('ramen-comment');
  
    ramenImage.src = ramen.image;
    ramenName.textContent = `Name: ${ramen.name}`;
    ramenRestaurant.textContent = `Restaurant: ${ramen.restaurant}`;
    ramenRating.textContent = `Rating: ${ramen.rating}`;
    ramenComment.textContent = `Comment: ${ramen.comment || 'No comment'}`;
  }
  
  function addSubmitListener() {
    const form = document.getElementById('ramen-form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const restaurant = document.getElementById('restaurant').value;
      const image = document.getElementById('image').value;
      const rating = parseInt(document.getElementById('rating').value);
      const comment = document.getElementById('comment').value;
  
      const newRamen = {
        id: ramens.length + 1,
        name,
        restaurant,
        image,
        rating,
        comment
      };
  
      ramens.push(newRamen);
      displayRamens();
      form.reset();
    });
  }
  
  function main() {
    displayRamens();
    addSubmitListener();
    

    if (ramens.length > 0) {
      handleClick(ramens[0]);
    }
  }
  
  document.addEventListener('DOMContentLoaded', main);
  