

//Para crear un efecto estilo 'lightbox' se ha utilizado una imagen grande igual que la principal que al pulsar el svg encima de esta (Portfolio-icon) hace que aparezca la grande 
// En esta imagen grande se encuentra el icono que la 'cierra' (Portfolio-svg) al hacer click





//Cuando hago CLICK en TODOS los .Portfolio-icon
// a TODOS los .Portfolio-zoom se le ADD la clase isOn

//Cuando hago CLICK en TODOS los .Portfolio-svg
//a TODOS los .Portfolio-zoom se le REMOVE la clase isOn



const portfolioIcon = document.querySelectorAll(`.Portfolio-icon`) //Se ha definido y seleccionado cada icono de expandir de cada imagen grande (Portfolio-div--uno, dos etc)
const portfolioZoom = document.querySelectorAll(`.Portfolio-zoom`) //Se ha definido y seleccionado cada imagen grande que se abre 
const portfolioSvg = document.querySelectorAll(`.Portfolio-svg`) // Se ha definido y seleccionado cada icono de cerrar de cada imagen grande que se abre


console.log(portfolioIcon)
console.log(portfolioZoom)
console.log(portfolioSvg)







if (portfolioIcon) {
const portfolioEachHandler = (_, index) => {


    portfolioIcon[index].addEventListener(`click`, () => {

        portfolioZoom[index].classList.add(`isOn`)

    })

}



portfolioIcon.forEach(portfolioEachHandler)

};




if (portfolioSvg) {

const portfoliosvgEachHandler = (_, index) => {


    portfolioSvg[index].addEventListener(`click`, () => {

        portfolioZoom[index].classList.remove(`isOn`)

    })

}



portfolioSvg.forEach(portfoliosvgEachHandler )

};






//Se ha configurado en el modo responsive para tamaños inferiores a 800px un menú hamburguesa (.Header-btn) y que el propio menú descienda y vuelva a ocultarse al volver al pulsar este icono / botón hamburguesa
//Todo esto haciendo con toggle en la clase isActive



//Cuando hago CLICK en .Header-btn
//a .Header-nav se le TOGGLE la clase isActive

const header = document.querySelector(`.Header`)
const headerBtn = header.querySelector(`.Header-btn`)
const headerNav = header.querySelector(`.Header-nav`)

console.log(header) 
console.log(headerBtn) 
console.log(headerNav)




if (headerBtn) {

headerBtn.addEventListener(`click`, () => {

    headerNav.classList.toggle(`isActive`)


})
};





