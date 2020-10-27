// Character list. Each house has a name and a code
const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];
  
  // Return an array of characters belonging to a house
  const getCharacters = houseCode => {
    switch (houseCode) {
      case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
        return ["Robert", "Stannis", "Renly"];
      case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
      default:
        return []; // Empty array
    }
  };



const createGoT = (text, value) => {
    const choices = document.createElement("option");
    choices.textContent = text;
    choices.value = value;
    return choices;
};



const createList = text => {
    const choices = document.createElement("li");
    choices.textContent = text;
    return choices;
};

const houseChoice = document.querySelector("select");

houses.forEach(house => {
    houseChoice.appendChild(createGoT(house.name, house.code));
});


//add an event
houseChoice.addEventListener("change", eve => {
    const characters =  getCharacters(eve.target.value);
    characterChoice = document.getElementById("characters");
    characterChoice.innerHTML = "";
    characters.forEach(character => {
        characterChoice.appendChild(createList(character));
    });
});








  
