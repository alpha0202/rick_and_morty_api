function getCharacters(done) {
  const results = fetch("https://rickandmortyapi.com/api/character");
  results
    .then(response => response.json())
    .then(data => {
      done(data);
    });
}

//getCharacters(data => console.log(data));


getCharacters(data => {
  data.results.forEach(person => {
    const article = document.createRange().createContextualFragment(
      /*html*/

      `
    <article>
        <div class="image-container">   
            <img src="${person.image}" alt="Personaje">
        </div>

        <h2>${person.name}</h2>
        <span>${person.status}</span>
    </article>
    `
    );

    const main = document.querySelector("main");
    main.append(article);
  });
});
