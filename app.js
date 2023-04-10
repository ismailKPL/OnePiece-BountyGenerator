const inputName = document.querySelector('#name');
const file = document.querySelector("#file")
const form = document.querySelector("form")

let button = document.querySelector(".submit-button");
const div = document.querySelector(".div-vide")
const divBounty = document.querySelector(".div-videBounty")

const status = document.getElementById('status');
const output = document.getElementById('output');
const reader = new FileReader();
const BountyVide = document.querySelector(".bountyvide");
const cadreImg = document.querySelector("#output");
const BH = document.querySelector(".BH");

let pseudo = "";
let image = "";

inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
});


file.addEventListener("input", (e) => {
    image = e.target.value;
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

button.addEventListener("click", click => {
  BH.style.marginBottom = "400px"
    div.innerHTML = `
    <h3>${pseudo}</h3>
    <style>
    h3 {
        text-transform: uppercase;
    }</style>`
})

button.addEventListener("click", click => {
    divBounty.innerHTML = `
    <h1 class="bounty">${rValue}</h1>`
})

  
  button.addEventListener("click", function() {
    window.scrollBy(0, 5000);
    BountyVide.style.visibility = "visible";
    cadreImg.style.visibility = "visible";
  });


if (window.FileList && window.File && window.FileReader) {
    document.getElementById('file').addEventListener('change', event => {
      output.src = '';
      status.textContent = '';
      const file = event.target.files[0];
      if (!file.type) {
        status.textContent = 'Error: The File.type property does not appear to be supported on this browser.';
        return;
      }


      if (!file.type.match('image.*')) {
        status.textContent = 'Error: The selected file does not appear to be an image.'
        return;
      }

      reader.addEventListener('load', event => {
        output.src = event.target.result;
      });
      reader.readAsDataURL(file);
    }); 
  }

   


let primeTest = ['0', '1', '100','500','7 000 000', '30 000 000','50 000 000','100 000 000', '105 000 000', '150 000 000', '300 000 000', '555 000 000', '999 999 999', '1 500 000 000', 
 '1 650 000 000', '2 999 999 999','3 000 000 000', '3 900 000 000', '4 200 000 000', '5 960 000 000'];

const rand = Math.floor(Math.random()*primeTest.length);
const rValue = primeTest[rand];
console.log(rValue)



const logoOPBG = document.querySelector(".opbgLOGO");
let clickCount = 0;

logoOPBG.addEventListener("click", function() {
  clickCount++;
  if (clickCount === 3) {
    button.addEventListener("click", click => {
      divBounty.innerHTML = `
      <h1 class="bounty">5 564 800 000</h1>`
    })
  }
});