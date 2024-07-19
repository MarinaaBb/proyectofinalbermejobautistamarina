

//  Cuando hago click en TODOS  Acordeon-h2 
// Acordeon-p le TOGGLE isVisble



const acordeon = document.querySelector(`.Acordeon`) //Se ha definido y seleccionado el contenedor de todo, el acordeón
const acordeonH2 = acordeon.querySelectorAll(`.Acordeon-h2`) //Se ha definido y seleccionado el título de cada apartado desplegable del acordeón
const acordeonP = acordeon.querySelectorAll(`.Acordeon-p`) //Se ha definido y seleccionado el párrafo de cada apartado desplegable del acordeón




console.log(acordeonH2)
console.log(acordeonP)
console.log(acordeon)





//Se ha utilizado un ForEach para recorrer cada título y cada párrafo y que se añada y elimine la clase `isVisible` (según index)
//cada vez que se haga click en cada título.





const acordeonH2EachHandler = (_, index) => {



    acordeonH2[index].addEventListener(`click`, () => {

        acordeonP[index].classList.toggle(`isVisible`)

    })


}



acordeonH2.forEach(acordeonH2EachHandler)





