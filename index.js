//Ajustez la quantité de chaque article grâce aux boutons "+" et "-"
const buttonIncrement = document.querySelectorAll(".imgCounter img:nth-child(1)");
const buttonDecrement = document.querySelectorAll(".imgCounter img:nth-child(3)");
const counters = document.querySelectorAll(".counter");
counters.forEach((counterElement, index) => {
    counterElement.innerHTML = "0";  
    buttonIncrement[index].addEventListener("click", () => {
        let count = parseInt(counterElement.innerHTML);
        count++;
        counterElement.innerHTML = count;
    });
    buttonDecrement[index].addEventListener("click", () => {
        let count = parseInt(counterElement.innerHTML);
        count--;
        if (count < 0) {
            count = 0;  
        }
        counterElement.innerHTML = count;
    });
});
//Supprimez des articles du panier
const  deleteArticle = document.querySelectorAll(".deleteArticle");
const deleteArticleButton = document.querySelectorAll(".deleteArticleButton img:nth-child(1)");
deleteArticleButton.forEach((button, index) => {
    button.addEventListener("click", () => {
        deleteArticle[index].style.display = "none";
        counters[index].innerHTML = "0";
        calculateTotal();
    });
})
//Aimez des articles grâce à un bouton cliquable en forme de cœur qui changera de couleur en conséquence.
const favoriteArticle = document.querySelectorAll(".favoriteArticleButton img:nth-child(3)");
const favoriteArticleButton = document.querySelectorAll(".favoriteArticleButton img:nth-child(2)");
favoriteArticleButton.forEach((button, index) => {
    button.addEventListener("click", () => {
        favoriteArticle[index].style.display = "block";
        favoriteArticleButton[index].style.display = "none";
    });
});
favoriteArticle.forEach((button, index) => {
    button.addEventListener("click", () => {
        favoriteArticle[index].style.display = "none";
        favoriteArticleButton[index].style.display = "block";
    });
});
// Voyez le prix total ajusté en fonction de la quantité et des suppressions des articles.
const total = document.querySelector(".total");
const countersTotal = document.querySelectorAll(".counter");
const price = document.querySelectorAll(".price");

function calculateTotal() {
    let totalPrice = 0; 
    countersTotal.forEach((counterElement, index) => {
        const quantity = parseInt(counterElement.innerHTML); 
        const unitPrice = parseFloat(price[index].innerHTML); 
        totalPrice += quantity * unitPrice;
    });
    total.innerHTML = totalPrice.toFixed(2) + " $"; 
}

countersTotal.forEach((counterElement, index) => {
    buttonIncrement[index].addEventListener("click", () => {
        calculateTotal();     
    });
    buttonDecrement[index].addEventListener("click", () => {
        calculateTotal(); 
    });
});


