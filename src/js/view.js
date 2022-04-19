class rendorHtml {
  #parentElement = document.querySelector('.movie-list');
  #form = document.querySelector('.form');
  #input = document.querySelector('.search');
  #data;
  rendor(data) {
    this.#data = data;
    this.#clearHtml();
    this.#generateHtml();
  }
  #generateHtml() {
    this.#data.forEach(element => {
      let html = `
      <div class="movie-list-item">
      <img class="movie-list-item-img" alt="" src="${element.Poster}" />
      <span class="movie-list-item-title">${element.Title}</span>
      <p class="movie-list-item-desc">
        Created:${element.Year}
      </p>
      <button class="movie-list-item-button">Watch</button>
    </div>`;
      this.#parentElement.insertAdjacentHTML('afterbegin', html);
    });
  }
  #clearHtml() {
    this.#parentElement.innerHTML = '';
  }
  takingValue() {
    const value = this.#input.value;
    return value;
  }
  addHandleFunc(handle) {
    this.#form.addEventListener('submit', function (e) {
      e.preventDefault();
      handle();
    });
  }
}
export default new rendorHtml();
