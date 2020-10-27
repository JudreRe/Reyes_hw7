// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];
  

const countryA = document.querySelector("input");
const suggestionCountry = document.getElementById("suggestions");


const createSelection = countries => {
    const country = document.createElement("div");
    country.classList.add("suggestion");
    country.textContent = countries;
    country.addEventListener("click", e => {
        countryA.value = e.target.textContent;
        suggestionCountry.innerHTML="";
    });
    return country;
};


countryA.addEventListener("input", () => {
    suggestionCountry.innerHTML = "";
    countryList.forEach( countries => {
        if(countries.startsWith(countryA.value)) {
            suggestionCountry.appendChild(createSelection(countries));
        }
    });
});







