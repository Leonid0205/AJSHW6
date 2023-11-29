const feturedItemsEL = document.createElement('div');
feturedItemsEL.classList.add('feturedItems-box', 'center');
document.body.prepend(feturedItemsEL);
const dataProducts = JSON.parse(data);

const feturedItemsTopEl = document.createElement('div');
feturedItemsTopEl.classList.add('feturedItems-top', 'center');
document.body.prepend(feturedItemsTopEl)
const feturedItemsTitleEl = document.createElement('h1');
feturedItemsTitleEl.classList.add('feturedItems-top__title');
feturedItemsTitleEl.textContent = 'Fetured Items';
feturedItemsTopEl.appendChild(feturedItemsTitleEl);
const feturedItemsTextEl = document.createElement('h2');
feturedItemsTextEl.classList.add('feturedItems-top__text');
feturedItemsTextEl.textContent = 'Shop for items based on what we featured in this week';
feturedItemsTopEl.appendChild(feturedItemsTextEl);

function createProducts(data) {
    data.forEach(element => {
        const feturedItemsProductsEl = document.createElement('div');
        feturedItemsProductsEl.classList.add('feturedItemsProducts-box');
        feturedItemsEL.appendChild(feturedItemsProductsEl);
        const feturedItemsProductEl = document.createElement('div');
        feturedItemsProductEl.classList.add('feturedItems__Product');
        feturedItemsProductsEl.appendChild(feturedItemsProductEl);
        const feturedItemsProductImgEl = document.createElement('img');
        feturedItemsProductImgEl.classList.add('feturedItems__Product__img');
        feturedItemsProductImgEl.src = element.img;
        feturedItemsProductEl.appendChild(feturedItemsProductImgEl);
        const feturedItemsProductDescriptionEl = document.createElement('div');
        feturedItemsProductDescriptionEl.classList.add('feturedItems__Product__description');
        feturedItemsProductEl.appendChild(feturedItemsProductDescriptionEl);
        const feturedItemsProductTItleEl = document.createElement('h1');
        feturedItemsProductTItleEl.classList.add('feturedItems__Product__description__title');
        feturedItemsProductTItleEl.textContent = element.title;
        feturedItemsProductDescriptionEl.appendChild(feturedItemsProductTItleEl);
        const feturedItemsProductDescriptionTextEl = document.createElement('p');
        feturedItemsProductDescriptionTextEl.classList.add('feturedItems__Product__description__text');
        feturedItemsProductDescriptionTextEl.textContent = element.description;
        feturedItemsProductDescriptionEl.appendChild(feturedItemsProductDescriptionTextEl);
        const feturedItemsProductPriceEl = document.createElement('p');
        feturedItemsProductPriceEl.classList.add('feturedItems__Product__description__price');
        feturedItemsProductPriceEl.textContent = element.price;
        feturedItemsProductDescriptionEl.appendChild(feturedItemsProductPriceEl);
    });
}
createProducts(dataProducts);