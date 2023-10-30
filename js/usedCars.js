const usedCars = [
    {
        year: 2018,
        make: "Toyota",
        model: "Camry",
        mileage: 30000,
        price: 18000,
        color: "Silver",
        gasMileage: "25 mpg city, 35 mpg highway",
        image: "/img/toyota.png"
    },
    {
        year: 2016,
        make: "Honda",
        model: "Civic",
        mileage: 45000,
        price: 14000,
        color: "White",
        gasMileage: "30 mpg city, 40 mpg highway",
        image: "/img/honda.png"
    },
    {
        year: 2016,
        make: "Volkswagen",
        model: "Passat",
        mileage: 40000,
        price: 15000,
        color: "Gray",
        gasMileage: "29 mpg city, 40 mpg highway",
        image: "/img/volks.avif"
    },

    {
        year: 2019,
        make: "Nissan",
        model: "Altima",
        mileage: 25000,
        price: 17000,
        color: "Blue",
        gasMileage: "27 mpg city, 36 mpg highway",
        image: "/img/nissan.png"
    },
    {
        year: 2015,
        make: "Chevrolet",
        model: "Malibu",
        mileage: 50000,
        price: 12000,
        color: "Red",
        gasMileage: "25 mpg city, 37 mpg highway",
        image: "/img/chevrolet.avif"
    },
    // Additional entries:

    {
        year: 2020,
        make: "Hyundai",
        model: "Elantra",
        mileage: 22000,
        price: 16000,
        color: "Silver",
        gasMileage: "30 mpg city, 41 mpg highway",
        image: "/img/elantra.webp"
    },
    {
        year: 2014,
        make: "Subaru",
        model: "Outback",
        mileage: 60000,
        price: 14000,
        color: "Green",
        gasMileage: "22 mpg city, 30 mpg highway",
        image: "../img/susb.png"
    },
    {
        year: 2017,
        make: "Mazda",
        model: "CX-5",
        mileage: 32000,
        price: 19000,
        color: "Blue",
        gasMileage: "24 mpg city, 31 mpg highway",
        image: "/img/mazda.png"
    },
    {
        year: 2018,
        make: "Kia",
        model: "Sorento",
        mileage: 28000,
        price: 17000,
        color: "White",
        gasMileage: "22 mpg city, 29 mpg highway",
        image: "/img/kia.webp"
    },
    // Five more entries:
    {
        year: 2015,
        make: "Dodge",
        model: "Challenger",
        mileage: 30000,
        price: 24000,
        color: "Black",
        gasMileage: "19 mpg city, 30 mpg highway",
        image: "/img/challenger.png"
    },
    {
        year: 2017,
        make: "Cadillac",
        model: "XT5",
        mileage: 28000,
        price: 32000,
        color: "Red",
        gasMileage: "19 mpg city, 27 mpg highway",
        image: "/img/challenger.png"
    },
    {
        year: 2017,
        make: "Ford",
        model: "Fusion",
        mileage: 35000,
        price: 16000,
        color: "Black",
        gasMileage: "28 mpg city, 38 mpg highway",
        image: "/img/fordfusion.png"
    },
    {
        year: 2018,
        make: "Jaguar",
        model: "F-PACE",
        mileage: 26000,
        price: 38000,
        color: "Blue",
        gasMileage: "18 mpg city, 23 mpg highway",
        image: "/img/jagua.png"
    },
    {
        year: 2019,
        make: "Tesla",
        model: "Model S",
        mileage: 18000,
        price: 55000,
        color: "Black",
        gasMileage: "Electric (370 miles per charge)",
        image: "/img/tesla.avif"
    },
    {
        year: 2020,
        make: "Porsche",
        model: "Cayenne",
        mileage: 22000,
        price: 68000,
        color: "White",
        gasMileage: "20 mpg city, 26 mpg highway",
        image: "/img/porsche.png"
    },
    {
        year: 2017,
        make: "Lexus",
        model: "ES",
        mileage: 29000,
        price: 26000,
        color: "White",
        gasMileage: "21 mpg city, 30 mpg highway",
        image: "/img/lexus white.webp",
    },
    {
        year: 2016,
        make: "BMW",
        model: "5 Series",
        mileage: 32000,
        price: 27000,
        color: "Black",
        gasMileage: "23 mpg city, 34 mpg highway",
        image: "/img/BMW.png",
    },
];



function createCards(array) {
    const carContainer = document.getElementById("carContainer");

    carContainer.innerHTML = "";


    for (let i = 0; i < array.length; i++) {

        const html = `
        <div data-color=${array[i].color} data-year=${array[i].year}  data-mileage=${array[i].mileage} data-price=${array[i].price} data-make=${array[i].make} class="car-card">
            <div class="card-header">
            <img src="${array[i].image}" alt="photo of ${array[i].make}" width="400px" height="300px"/>
            </div>
            <div class="card-content">
            <h3>${array[i].year}  ${array[i].model}</h3>
                <p>Make: ${array[i].make}</p>
                <p>Price: ${array[i].price}</p>
                <p>Color: ${array[i].color}</p>
                <p>Mileage: ${array[i].mileage}</p>
                <p>Gas Mileage: ${array[i].gasMileage}</p>
            </div>
        </div>
        
        `;

        carContainer.insertAdjacentHTML("beforeend", html);
    }

}

const minYearInput = document.getElementById('minYear');
const maxYearInput = document.getElementById('maxYear');
const makeSelect = document.getElementById('makeSelect');
const mileageSelect = document.getElementById('mileageSelect');
const maxPriceSelect = document.getElementById('maxPriceSelect');
const colorSelect = document.getElementById('colorSelect');


document.getElementById('filterButton').addEventListener('click', handleFilters);

function handleFilters() {


    const colorSelected = colorSelect.value;
    const makeSelected = makeSelect.value;
    const maxPriceSelected = maxPriceSelect.value;
    const mileageSelected = mileageSelect.value;
    const yearMin = parseFloat(minYearInput.value);
    const yearMax = parseFloat(maxYearInput.value);


    const cardContainers = document.querySelectorAll('.car-card');


    cardContainers.forEach(card => {

        const cardColor = card.getAttribute('data-color');

        const cardMake = card.getAttribute('data-make');
        const cardPrice = parseFloat(card.getAttribute('data-price'));
        const cardMileage = parseFloat(card.getAttribute('data-mileage'));
        const cardYear = parseFloat(card.getAttribute('data-year'));



        if (
            cardYear >= yearMin && cardYear <= yearMax &&
            cardPrice <= maxPriceSelected &&
            cardMileage <= mileageSelected &&
            (colorSelected === 'AllColors' || cardColor === colorSelected) &&
            (makeSelected === 'AllMakes' || cardMake === makeSelected)
        ) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }

        if (
            cardYear >= yearMin && cardYear <= yearMax &&
            cardPrice <= maxPriceSelected &&
            cardMileage <= mileageSelected &&
            (colorSelected === 'AllColors' || cardColor === colorSelected) &&
            (makeSelected === 'AllMakes' || cardMake === makeSelected)
        ) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }



    });

}










createCards(usedCars);