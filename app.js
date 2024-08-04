const root = document.getElementById("root");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
// const form = document.querySelector("form")
const url = "http://localhost:3000/countries";
// root.innerHTML = `
//                   <div class='w-[100vw]'>
//                     <img class='w-80 h-50' src='./image.jpg'></img>
//                   </div>`
async function getData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
// ?/* <div class='loader'></div> */
// root.innerHTML += "<div class='flex place-items-center text-xl'>Yüklənir...</div>"
//

async function writeData() {

  const countries = await getData();
  function foundCountry() {
    // preventDefault();
    if (input.value == "") {
      alert("Ölkə daxil edin!");
    }
    countries.filter((country) => {

      const countryName = country.name.common.toUpperCase();

      const inputValueUpper = input.value.toUpperCase();

      if (countryName == inputValueUpper) {
        root.innerHTML += `
      <div id='box' class="border-2  p-2">
      <div class='title flex justify-center'><img class='w-full h-40' src='${country.flags.png}'></img></div>
      <h2 class='p-1'>Ölkənin adı : ${country.name.common}</h2>
      <p class="p-1">Paytaxt : ${country.capital}</p>
      <p class='p-1'>Əhali sayı : ${country.population}</p>     
      </div>
      `;
        input.value = ""
      }
    })
  }
  btn.addEventListener('click', foundCountry)

}
writeData()
const box = document.getElementById("box")
const moon = document.getElementById("moon")
const sun = document.getElementById("sun");
const mode = document.getElementById("mode")

function darkMode() {
  sun.style.display = "block"
  moon.style.display = "none" 
  root.style.backgroundColor = "black"
  root.style.color = "white"
}

function whiteMode() {
  sun.style.display = "none"
  moon.style.display = "block" 
  root.style.backgroundColor = "white"
  root.style.color = "black"
}

mode.addEventListener("dblclick",whiteMode)

mode.addEventListener("click", darkMode)
