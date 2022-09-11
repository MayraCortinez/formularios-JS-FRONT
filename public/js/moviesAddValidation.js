window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let article = document.querySelector("article");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
  //-------------------DE REGISTRO DE PELÍCULAS------------------//

  let title = document.getElementById("title");
  let rating = document.getElementById("rating");
  let awards = document.getElementById("awards");
  let date = document.getElementById("release_date");
  let length = document.getElementById("length");
  let genre = document.getElementById("genre_id");
  let form = document.querySelector("form");
  let errTitle = document.querySelector(".error-title");
  let errRating = document.querySelector(".error-rating");
  let errAwards = document.querySelector(".error-awards");
  let errDate = document.querySelector(".error-date");
  let errLength = document.querySelector(".error-length");
  let errGenre = document.querySelector(".error-genre");
  let msjError = "Por favor, revisa los datos ingresados";
  let errores =  document.getElementById("errores");

  title.focus();

  title.onblur = (e) => {
    if (!e.target.value) {
      errTitle.innerHTML = "El campo título no puede quedar vacío";
      errTitle.classList.add("is-invalid");
    } else {
      errTitle.innerHTML = null;
      errTitle.classList.remove("is-invalid");
    }
  };

  rating.onblur = (e) => {
    switch (true) {
      case !e.target.value:
        errRating.innerHTML = "El campo calificación no puede quedar vacío";
        errRating.classList.add("is-invalid");
        break;
      case e.target.value < 0 || e.target.value > 10:
        errRating.innerHTML = "Entre 0 y 10";
        errRating.classList.add("is-invalid");
        break;
      default:
        errRating.innerHTML = null;
        errRating.classList.remove("is-invalid");
        break;
    }
  };

  awards.onblur = (e) => {
    switch (true) {
      case !e.target.value:
        errAwards.innerHTML = "El campo premios no puede quedar vacío"
        errAwards.classList.add("is-invalid");
        break;
      case e.target.value < 0 || e.target.value > 10:
        errAwards.innerHTML = "Entre 0 y 10";
        errAwards.classList.add("is-invalid");
        break;
      default:
        errAwards.innerHTML = null;
        errAwards.classList.remove("is-invalid");
        break;
    }
  };

  date.onblur = (e) => {
    if (!e.target.value) {
      errDate.innerHTML = "El campo fecha de creación no puede quedar vacío";
      errDate.classList.add("is-invalid");
    } else {
      errDate.innerHTML = null;
      errDate.classList.remove("is-invalid");
    }
  };

  length.onblur = (e) => {
    switch (true) {
      case !e.target.value:
        errLength.innerHTML = "El campo duración no puede quedar vacío";
        errLength.classList.add("is-invalid");
        break;
      case e.target.value < 60 || e.target.value > 360:
        errLength.innerHTML = "Entre 60 y 360 minutos";
        errLength.classList.add("is-invalid");
        break;
      default:
        errLength.innerHTML = null;
        errLength.classList.remove("is-invalid");
        break;
    }
  };

  genre.onblur = (e) => {
    if (!e.target.value) {
      errGenre.innerHTML = "El campo género no puede quedar vacío";
      errGenre.classList.add("is-invalid");
    } else {
      errGenre.innerHTML = null;
      errGenre.classList.remove("is-invalid");
    }
  };


  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let error = false;

    let elements = form.elements;

    for (let i = 0; i < elements.length - 1; i++) {
      if (!elements[i].value || elements[i].classList.contains('is-invalid')) {
        error = true;
        elements[i].classList.add("is-invalid");
      } else {
        elements[i].classList.remove("is-invalid");
        error = false
      }
    }

    if (!error) {
      e.target.submit();
      elements.classList.add("is-valid");
      alert('La película se registró exitosamente');
    } else{
      errores.innerHTML = msjError
      errores.classList.add('alert-warning')
    }
  });
};
