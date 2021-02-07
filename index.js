const searchInfoOfCharacter = (url) => {
  fetch(url)
    .then((data) => {
      return data.json();
    })

    .then((characters) => {
      console.log(characters);
      const nextPage = document.querySelector("#next-page");
      nextPage.onclick = () => {
        searchInfoOfCharacter(characters.info.next);
      };
      const section = document.querySelector("section");
      section.innerHTML = "";
      characters.results.map((character) => {
        section.innerHTML += `
    <article>
     <div class="img">
     <img src=${character.image}>
  </div>
 <div class="info">
 <div class="name">
     <h2> ${character.name}</h2>
 </div>
 <div class="status">
     <p>${character.status}</p>
     - <p>${character.species}</p>
 </div>
 <div class="location">
 <p>Last known location:</p>
 <p>${character.location.name}</p>
</div>
 <div class="episode">
     <p>First seen in:</p>
     <p>${character.episode[0]}</p>
 </div>
 </article>
  `;
      });
    });
};

searchInfoOfCharacter("https://rickandmortyapi.com/api/character");
