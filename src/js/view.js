class rendorHtml {
  #parentElement = document.querySelector('.movie-list');
  #data;
  rendor(data) {
    this.#data = data;
    this.#clearHtml();
    this.#generateHtml();
  }
  #generateHtml() {
    console.log(2);
    this.#data.forEach(element => {
      let html = `
      <div class="movie-list-item">
      <img class="movie-list-item-img" alt="" src="${element.Poster}" />
      <span class="movie-list-item-title">${element.Title}</span>
      <p class="movie-list-item-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At
        hic fugit similique accusantium.
      </p>
      <button class="movie-list-item-button">Watch</button>
    </div>`;
      this.#parentElement.insertAdjacentHTML('afterbegin', html);
    });
  }
  #clearHtml() {
    this.#parentElement.innerHTML = '';
  }
}
export default new rendorHtml();
