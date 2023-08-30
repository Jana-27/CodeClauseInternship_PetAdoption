const pets = [
    { name: "Buddy", type: "Dog", img: "dog.jpg" },
    { name: "Luna", type: "Cat", img: "cat.jpg" },
    { name: "Bunny", type: "Rabbit", img: "bunny.jpg" },
    { name: "lucy", type: "goat", img: "goat.jpg" },

];

const petListing = document.getElementById("pet-listing");

// Generate pet cards
pets.forEach(pet => {
    const petCard = document.createElement("div");
    petCard.classList.add("pet-card");
    
    const img = document.createElement("img");
    img.src = `images/${pet.img}`;
    img.alt = pet.name;
    
    const name = document.createElement("p");
    name.textContent = pet.name;
    
    const type = document.createElement("p");
    type.textContent = pet.type;
    
    petCard.appendChild(img);
    petCard.appendChild(name);
    petCard.appendChild(type);
    
    petListing.appendChild(petCard);
});
