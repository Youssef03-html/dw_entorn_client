document.addEventListener("DOMContentLoaded", function () {

    const botoPelicules = document.getElementById("botoPelicules");
    const resultatPelicules = document.getElementById("resultatPelicules");
    const totalPelicules = document.getElementById("totalPelicules");

    const selectorPelicules = document.getElementById("selectorPelicules");
    const resultatDetall = document.getElementById("resultatDetall");

    const botoLocalitzacions = document.getElementById("botoLocalitzacions");
    const resultatLocalitzacions = document.getElementById("resultatLocalitzacions");

    const botoPersonatges = document.getElementById("botoPersonatges");
    const resultatPersonatges = document.getElementById("resultatPersonatges");

    const botoEspecies = document.getElementById("botoEspecies");
    const resultatEspecies = document.getElementById("resultatEspecies");



    fetch("https://ghibliapi.vercel.app/films")

    .then(function (response) {
        return response.json();
    })

    .then(function (pelicules) {

        for (let i = 0; i < pelicules.length; i++) {

            const opcio = document.createElement("option");

            opcio.value = pelicules[i].id;
            opcio.textContent = pelicules[i].title;

            selectorPelicules.appendChild(opcio);
        }

    });



    botoPelicules.addEventListener("click", async function () {

        const response = await fetch("https://ghibliapi.vercel.app/films");

        const pelicules = await response.json();

        totalPelicules.textContent = "Total: " + pelicules.length;

        let html = "<table>";

        html += "<tr>";
        html += "<th>Títol</th>";
        html += "<th>Any</th>";
        html += "<th>Imatge</th>";
        html += "</tr>";

        for (let i = 0; i < pelicules.length; i++) {

            html += "<tr>";

            html += "<td>" + pelicules[i].title + "</td>";
            html += "<td>" + pelicules[i].release_date + "</td>";
            html += "<td><img src='" + pelicules[i].image + "'></td>";

            html += "</tr>";
        }

        html += "</table>";

        resultatPelicules.innerHTML = html;

    });



    selectorPelicules.addEventListener("change", async function () {

        const idPelicula = selectorPelicules.value;

        if (idPelicula === "") {
            return;
        }

        const response = await fetch("https://ghibliapi.vercel.app/films/" + idPelicula);

        const pelicula = await response.json();

        let html = "";

        html += "<h3>" + pelicula.title + "</h3>";

        html += "<p>" + pelicula.description + "</p>";

        html += "<ul>";

        for (let i = 0; i < pelicula.people.length; i++) {

            const responsePersonatge = await fetch(pelicula.people[i]);

            const personatge = await responsePersonatge.json();

            html += "<li>" + personatge.name + "</li>";
        }

        html += "</ul>";

        resultatDetall.innerHTML = html;

    });



    botoLocalitzacions.addEventListener("click", async function () {

        const response = await fetch("https://ghibliapi.vercel.app/locations");

        const localitzacions = await response.json();

        let html = "<table>";

        html += "<tr>";
        html += "<th>Nom</th>";
        html += "<th>Clima</th>";
        html += "<th>Terreny</th>";
        html += "</tr>";

        for (let i = 0; i < localitzacions.length; i++) {

            html += "<tr>";

            html += "<td>" + localitzacions[i].name + "</td>";
            html += "<td>" + localitzacions[i].climate + "</td>";
            html += "<td>" + localitzacions[i].terrain + "</td>";

            html += "</tr>";
        }

        html += "</table>";

        resultatLocalitzacions.innerHTML = html;

    });



    botoPersonatges.addEventListener("click", async function () {

        const response = await fetch("https://ghibliapi.vercel.app/people");

        const personatges = await response.json();

        let html = "<table>";

        html += "<tr>";
        html += "<th>Nom</th>";
        html += "<th>Gènere</th>";
        html += "<th>ID</th>";
        html += "</tr>";

        for (let i = 0; i < 5; i++) {

            const numeroAleatori = Math.floor(Math.random() * personatges.length);

            html += "<tr>";

            html += "<td>" + personatges[numeroAleatori].name + "</td>";
            html += "<td>" + personatges[numeroAleatori].gender + "</td>";
            html += "<td>" + personatges[numeroAleatori].id + "</td>";

            html += "</tr>";
        }

        html += "</table>";

        resultatPersonatges.innerHTML = html;

    });



    botoEspecies.addEventListener("click", async function () {

        const response = await fetch("https://ghibliapi.vercel.app/species");

        const especies = await response.json();

        let html = "<table>";

        html += "<tr>";
        html += "<th>Espècie</th>";
        html += "<th>Personatges</th>";
        html += "</tr>";

        for (let i = 0; i < especies.length; i++) {

            html += "<tr>";

            html += "<td>" + especies[i].name + "</td>";
            html += "<td>" + especies[i].people.length + "</td>";

            html += "</tr>";
        }

        html += "</table>";

        resultatEspecies.innerHTML = html;

    });

});