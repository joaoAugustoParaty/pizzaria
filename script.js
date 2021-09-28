const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

pizzaJson.map((item, index)=>{
let pizzaItem = c('.models .pizza-item').cloneNode(true); //Pega tudo que está dentro do item

//Identificar a  pizza
pizzaItem.setAttribute('data-key', index);

//Imagem da pizza
pizzaItem.querySelector('.pizza-item--img img').src = item.img;

//Preço da pizza
pizzaItem.querySelector('.pizza-item--price').innerHTML =`R$ ${item.price.toFixed(2)}`;

//Nome da pizza
pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;

//Descrição da pizza
pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

//Eventos de click para não atualizar a página
pizzaItem.querySelector('a').addEventListener('click', (e)=>{
e.preventDefault();

//Indicar para o modal a pizza que esta clicada
let key = e.target.closest('.pizza-item').getAttribute('data-key');

//Informações da pizza no Modal
c('.pizzaBig img').src = pizzaJson[key].img;
c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;

//Ativar o modal com o click
c('.pizzaWindowArea').style.opacity = 0;
c('.pizzaWindowArea').style.display='flex';
setTimeout(()=>{
    c('.pizzaWindowArea').style.opacity = 1;
}, 200);
});
// preencher as informações em pizzaitem
c('.pizza-area').append(pizzaItem);
});