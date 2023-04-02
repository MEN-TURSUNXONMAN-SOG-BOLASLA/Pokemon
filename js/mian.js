let elUl = document.querySelector(".ul")
let elSelect = document.querySelector(".select2")
// let elSelectvalue = elSelect.value
let elForm = document.querySelector(".form")
let pokemon = pokemons.splice(0, 5)
let elSearchinp = document.querySelector(".search")
let elBtn = document.querySelector(".btn")

function pokemonRender(pokim, pokirender) {
    
    pokim.forEach(function(nmadur) {

        let elLi = document.createElement("li")
        elLi.classList.add("item")
        let elImg = document.createElement("img")
        let elH2 = document.createElement("h2")
        elLi.classList.add("h2")
        let elH3 = document.createElement("h3")
        elLi.classList.add("h2")
        let elSpan = document.createElement("span")
        let elP = document.createElement("p")

        elImg.src = nmadur.img
        elH2.textContent = nmadur.name;
        elH3.textContent = nmadur.type
        elP.textContent = nmadur.weight
        elSpan.textContent = `${nmadur.avg_spawns} age`


        elLi.appendChild(elImg)
        elLi.appendChild(elH2)
        elLi.appendChild(elH3)
        elLi.appendChild(elSpan)
        elLi.appendChild(elP)


        pokirender.appendChild(elLi)
    })

}

pokemonRender(pokemon, elUl)

function categoryRender(pook, category) {
  let elCategory = [];

  pook.forEach(function (cate) {
    for (const item of cate.type) {

      if (!elCategory.includes(item)) {
        elCategory.push(item);
      }
    }
  })

  elCategory.sort();

  elCategory.forEach(function (newpoki) {
    let elOption = document.createElement("option")
    elOption.textContent = newpoki
    elOption.value = newpoki

    category.appendChild(elOption)
  })
}

categoryRender(pokemon, elSelect)

elForm.addEventListener("click", function (evt) {
  evt.preventDefault()

  let newcatpoki = []



  if (elSelect.value === "All") {
    newcatpoki = pokemon
  } else (
    newcatpoki = pokemon.filter(function (allcotpoki) {
      return allcotpoki.type.includes(elSelect.value)
    })
  )

    
  elUl.innerHTML = null;

  pokemonRender(newcatpoki, elUl)
  
})

elForm.addEventListener("input", function(evt) {
  evt.preventDefault();
  let newArray = []
  let elSarcInput = elSearchinp.value.toLowerCase();

if (elSarcInput === pokemon.title) {
    newArray = pokemon
} else {
  newArray = pokemon.filter(function (po) {
  return (

    po.name.toLowerCase().includes(elSarcInput) ||
    po.name.includes(elSarcInput) ||
    po.name.toUpperCase().includes(elSarcInput)

     )
  });
}
  
  elUl.innerHTML = null;

  pokemonRender(newArray, elUl)
});