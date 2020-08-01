let name1 = data.results[2].name;
/* let adrss1 = data.results[0].location.city;
let adrss2 = data.results[0].location.street;
let country = data.results[0].location.country;
let email = data.resilts[0].email


console.log("street: ",adrss1);
console.log("city: ",adrss2);
console.log("country: ",country)
*/
console.log("name of person: ", name1);

let peopleArray = data.results

function onClick(event) {
    event.preventDefault();
    let i = Math.floor(Math.random() * peopleArray.length);
    let myRadio = document.querySelector('input[name=gender]:checked').value;
    
    if (myRadio == "none") {
        do_it(event,i)
    }
    else {
        if (myRadio == peopleArray[i].gender) {
            do_it(event,i)
        }
        else {
            onClick(event)
        }
    }
}
let myButton = document.querySelector("#submitButton")
myButton.addEventListener("click",onClick)

function do_it(event,num) {   
    event.preventDefault();
    let newImg = document.getElementById("frame");
    newImg.src = peopleArray[num].picture.large;
    let nameV = document.getElementById("name");
    nameV.innerText = peopleArray[num].name.title + " " + peopleArray[num].name.first + " " + peopleArray[num].name.last
    let genderV = document.getElementById("gender");
    genderV.innerText = peopleArray[num].gender;
    let cityV = document.getElementById("city");
    cityV.innerText = peopleArray[num].location.city;
    let countryV = document.getElementById("country");
    countryV.innerText = peopleArray[num].location.country;
    let emailV = document.getElementById("email");
    emailV.innerText = peopleArray[num].email;
    let cellV = document.getElementById("cell");
    cellV.innerText = peopleArray[num].cell;
}


