let panier = document.querySelector('#panier');
let avatar = document.querySelector('#avatar');
let cardFull = document.querySelector('.card-full');
let cardNull = document.querySelector('.card-null');
let panierBtn = document.querySelector('#panier-btn');

let compteur = document.querySelector('#compteur');
let less = document.querySelector('.less');
let more = document.querySelector('.more');
let payment = document.querySelector('.payment');

let prix = document.querySelector('#prix');
let quantite = document.querySelector('#quantite');
let resultat = document.querySelector('#resultat-black');

let priceReduced = document.querySelector('.price-reduced');

let poubelle = document.querySelector('#poubelle');

let close = document.querySelector('.close');
let menuBurger = document.querySelector('.menu-burger');
let nav = document.querySelector('nav');



// faire apparaitre la card vide quand le compteur < 0 et faire apparaitre le panier rempli quand le compteur est > 0
panier.addEventListener('click', displayCard)

function displayCard() {

    if (compteur.innerText > 0) {
        showcardFull();
    } else {
        showcardNull();
    }
}

function showcardFull() {

    if (cardFull.style.display == 'block') {
        cardFull.style.display = 'none';
    } else {
        cardFull.style.display = 'block';
    }

}

function showcardNull() {
    if (cardNull.style.display == 'block') {
        cardNull.style.display = 'none';
    } else {
        cardNull.style.display = 'block';
    }
}


// ajouter ou enlever des quantites de chaussures //  bloquer la valeur à 0 // lier la quantité au bouton du picto panier
more.addEventListener('click', ajouter)

function ajouter() {
    compteur.innerText++;
}

less.addEventListener('click', soustraire)

function soustraire() {
    if (compteur.innerText == 0) {
        return;
    }
    compteur.innerText--;

}

// faire apparaitre le boutton placé à cote du picto panier
payment.addEventListener('click', getAddQuantite)

function getAddQuantite() {
    panierBtn.innerText = compteur.innerText;
    if (compteur.innerText > 0) {
        panierBtn.style.display = 'block';
    } else {
        panierBtn.style.display = 'none';
    }

    if (compteur.innerText > 0) {
        cardFull.style.display = 'block';
    } else {
        cardFull.style.display = 'none';
    }

    if (compteur.innerText > 0) {
        quantite.innerText = compteur.innerText;
    }

    if (compteur.innerText > 0) {
        resultat.style.display = 'inline-block';
    } else {
        resultat.style.display = 'none';
    }

    // on recupere le texte ecrit dans le span et on le declare dans une variable et on le transforme en nombre avec parsint

    let nb1 = parseFloat(priceReduced.innerText);
    let nbX = parseInt(quantite.innerText);
    let nbR = parseInt(resultat.innerText);
    console.log(nbR = nb1 * nbX);

    /// calculette
    if (nbR = nb1 * nbX) {
        resultat.innerText = nbR;
        prix.innerText = nb1;

    }

}

// reinitialiser les valeurs quand on click sur le picto poubelle
poubelle.addEventListener('click', getReset)

function getReset() {
    compteur.innerText = '0';
    resultat.innerText = '';
    quantite.innerText = '';
    panierBtn.innerText = '0';
    // panierBtn.style.display = 'none';
    // cardFull.style.display = 'none';
    // cardNull.style.display = 'block';
}

// faire apparaitre le menu burger en mode mobile et le refermer
menuBurger.addEventListener('click', displayMenuB)

function displayMenuB() {
    nav.style.display = 'block';
}

close.addEventListener('click', deleteMenuB)

function deleteMenuB() {
    nav.style.display = 'none';
}


// caroussel - afficher les images miniatures en grand (au dessus) quand on clique dessus - en mode desktop

let bigImage = document.querySelector('.big-image');
let thumbs = document.querySelectorAll('.img-thumbnail'); // All recupere un tableau il recupere totues les images

// this fait reference à item
thumbs.forEach(function(item){  // item => chaque element du tableau, chaque item correspond a un element du tableau
    item.addEventListener('click', changeImg)

});

function changeImg(){
    bigImage.src = this.src.replace('-thumbnail', '');
 
}

//afficher le  overlay zoom en cliqaunt sur la grande image

let overlayZoom = document.querySelector('.overlay-image-product');
let imgOverlay = document.querySelector('.active');

bigImage.addEventListener('click', afficher);


function afficher(){
  
    if(overlayZoom.style.display = 'none'){
    overlayZoom.style.display = 'block';
    imgOverlay.src = this.src;
   // this correspond à l'image sur laquelle on click 
    }
}

// fermer le overlay zoom en ciquant sur la croix
let closeOverlay = document.querySelector('.close-overlay');

closeOverlay.addEventListener('click', effacer);

 function effacer(){
    if(overlayZoom.style.display = 'block'){
    overlayZoom.style.display = 'none';
    }
 }

// une fois le overlay afficher faire defiler les images => carroussel 

let btnRight = document.querySelector('#btnRight');
let btnLeft = document.querySelector('#btnLeft');
let petiteImg = document.querySelector('.img-petite');

btnLeft.addEventListener('click', defilerLeft);

    function defilerLeft(){

      let imageActive = document.querySelector('.active');

      imageActive.classList.remove('active');
  
      if (imageActive.previousElementSibling) {
          imageActive.previousElementSibling.classList.add('active');
      } else {
          imageActive.parentElement.lastElementChild.classList.add('active');
         
      }

    }

btnRight.addEventListener('click', defilerRight);

function defilerRight(){
   
    let imageActive = document.querySelector('.active');

    imageActive.classList.remove('active');

    if (imageActive.previousElementSibling) {
        imageActive.previousElementSibling.classList.add('active');
    } else {
        imageActive.parentElement.lastElementChild.classList.add('active');
       
    } 
}



















