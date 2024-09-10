const wrapper = document.querySelector(".wrapper");

const cards = ProductsData.map(card => {
  return `
        <div class="card">
            <img src=${card.imageUrl} alt="">
            <h2>${card.price}</h2>
            <p>${card.rate}</p>
            <s>${card.oldPrice}</s>
            <h3>${card.newrice}</h3>
        </div>
    `
}).join('')


wrapper.innerHTML =  cards