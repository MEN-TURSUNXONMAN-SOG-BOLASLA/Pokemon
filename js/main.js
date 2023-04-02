let elList = document.querySelector(".list");
let elSelect = document.querySelector(".select");
let elForm = document.querySelector(".form");
let elSpan = document.querySelector(".span");
let elSearch = document.querySelector(".search_input");

let newFilms = films.splice(0, 10);

function renderFilm(kino, wrapper) {
  kino.forEach(function (film) {
    let elLi = document.createElement("li");
    let elImg = document.createElement("img");
    let elH3 = document.createElement("h3");
    let elP = document.createElement("p");

    elImg.src = film.poster;
    elImg.width = 200;
    elH3.textContent = film.title;
    elP.textContent = film.genres.join(", ");
    elLi.classList.add("item");

    elLi.appendChild(elImg);
    elLi.appendChild(elH3);
    elLi.appendChild(elP);

    wrapper.appendChild(elLi);
  });

  elSpan.textContent = kino.length;
}

renderFilm(newFilms, elList);

function renderCategory(janr, kategory) {
  let elCategory = [];

  janr.forEach(function (cat) {
    for (const item of cat.type) {
      if (!elCategory.includes(item)) {
        elCategory.push(item);
      }
    }
  });

  elCategory.sort();

  elCategory.forEach(function (newFilm) {
    let elOpt = document.createElement("option");
    elOpt.textContent = newFilm;
    elOpt.value = newFilm;

    kategory.appendChild(elOpt);
  });
}

renderCategory(newFilms, elSelect);

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let newArray = [];
  let elValue = elSelect.value;
  let elSeaInput = elSearch.value.toLowerCase();

  if (elValue === "All" && elSeaInput === newFilms.title) {
    newArray = newFilms;
  } else {
    newArray = newFilms.filter(function (kino) {
      return (
        kino.genres.includes(elValue) ||
        kino.title.toLowerCase().includes(elSeaInput) ||
        kino.title.includes(elSeaInput) ||
        kino.title.toUpperCase().includes(elSeaInput)
      );
    });
  }

  elList.innerHTML = null;
  renderFilm(newArray, elList);
});
