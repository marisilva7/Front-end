const cars = [
    {
        brand: "Toyota",
        model: "Corolla",
        year: 2020,
    },
    {
        brand: "Honda",
        model: "Civic",
        year: 2021,
    },
    {
        brand: "Ford",
        model: "Fiesta",
        year: 2019,
    },
    {
        brand: "Chevrolet",
        model: "Camaro",
        year: 2022,
    },
    {
        brand: "Fiat",
        model: "Uno",
        year: 2018,
    }
];
 
/* Criando uma função*/
function displayCars() {
    //Variavel
    const cardList = document.querySelector("#card-list");
 
    cars.forEach((car) => {
        console.log(car);
        //Criando o elemento div pelo JS
        const cardDiv = document.createElement("div");
        //criando uma classe css car
        cardDiv.classList.add("car");
 
        // Criando o modelo
        const cardModel = document.createElement("h2");
        cardModel.textContent = `${car.brand} ${car.model}`;
 
 
        // Criando o ano
        const cardYear = document.createElement("p");
        cardYear.textContent = `Ano: ${car.year}`;
 
        cardDiv.appendChild(cardModel);
        cardDiv.appendChild(cardYear);

        cardList.appendChild(cardDiv);
 
    });
}
 
//Chamar a função
displayCars();
 


