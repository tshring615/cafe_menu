const menu = [
    {
    name: 'Americano',
    category: 'Black-Coffee',
    tag: "HOT | ICED",
    desc: "Shot of espresso in hot water to shoot those blues.",
    price: "95/- | 125/-"
}, 
{
    name: 'Latte',
    category: 'Milk-Coffee',
    tag: "HOT",
    desc: "Power up your day with the single shot of espresso.",
    price: "80/-"
}, 
{
    name: 'Cappuccino',
    category: 'Milk-Coffee',
    tag: "HOT",
    desc: "Power up your day with the single shot of espresso.",
    price: "80/-"
}
];

let category = 'Black Coffee';

window.addEventListener('DOMContentLoaded', loadFilteredMenu);
const selectCategory = document.getElementById('category');
selectCategory.addEventListener('change', (loadFilteredMenu));

const main = document.getElementById('menu-container');
const start = document.getElementById('main');


    // let filteredMenu = menu.filter((items) => {
    //     return items.category === category;   
    // });

    function loadFilteredMenu() {


        category = selectCategory.value;

        let filteredMenu = menu.filter((items) => {
                return items.category === category;   
            });

            filteredMenu.forEach(menuItem => {

                //Div element to contain individual menu items
             const div = document.createElement('div');
             div.setAttribute('id','container');
             div.classList.add(menuItem.category);
             main.append(div);

             //Div element to contain name, tag, desc
             const title = document.createElement('div');
             title.setAttribute('id','title');
             div.append(title);
     
             //Name of the menu Item
             const name = document.createElement('h2');
             name.setAttribute('id', 'name');
             name.innerText = menuItem.name;
             title.append(name);
     
     
             //Tag of the menu Item
             const tag = document.createElement('p');
             tag.setAttribute('id', 'tag');
             tag.innerText = menuItem.tag;
             title.append(tag);
     
             //Description of the menu Item
             const description = document.createElement('p');
             description.setAttribute('id', 'description');
             if ('desc' in menuItem) {
                 description.innerText = menuItem.desc;
                 title.append(description);
             } else {
                 description.remove()
             }
            
     
             //Price of the menu item
             const priceDiv = document.createElement('div');
             priceDiv.setAttribute('id','price-container');
             div.append(priceDiv);
             
             const price = document.createElement('p');
             price.setAttribute('id', 'price'); 
                 price.innerText = menuItem.price;
                 priceDiv.append(price);

     }); 
            
    }


    



   