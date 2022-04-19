class Pagination {
  #parentElement = document.querySelector('.pagination');
  //   <div class="pagination">
  //   <div class="left">&#8592;</div>
  //   <div class="right">&#8594;</div>
  // </div>
  #data;
  rendor(data) {
    this.#data = data;
    this.clearHtml();
    this.pagination(this.#data);
  }
  pagination(abyect) {
    const lastPage = Math.ceil(abyect.results.length / 4);
    const currentPage = abyect.page;
    //oxirgi page
    if (lastPage == currentPage && lastPage > 1) {
      let html = `<div class="left btn" id="${abyect.page - 1}">&#8592;</div>`;
      this.#parentElement.insertAdjacentHTML('beforeend', html);
    }
    //birinchi page
    if (1 == currentPage && lastPage > 1) {
      let html = `<div class="right btn" id="${abyect.page + 1}">&#8594;</div>`;
      this.#parentElement.insertAdjacentHTML('beforeend', html);
    }
    //ortada
    if (lastPage > currentPage && currentPage > 1) {
      let html = `  <div class="left btn" id="${abyect.page - 1}">&#8592;</div>
         <div class="right btn" id="${abyect.page + 1}">&#8594;</div>`;
      this.#parentElement.insertAdjacentHTML('beforeend', html);
    }
  }
  clearHtml() {
    this.#parentElement.innerHTML = '';
  }
  addHandleFunc(page) {
    this.#parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn');
      const id = +btn.getAttribute('id');
      page(id);
      console.log(id);
    });
  }
}
export default new Pagination();
