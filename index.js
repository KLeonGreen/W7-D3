async function getBooks() {
  const response = await fetch("https://striveschool-api.herokuapp.com/books");
  const books = await response.json();
  return books;
}

const body = document.querySelector(".row");

getBooks().then((books) => {
  //   console.log(books);
  books.forEach((book) => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="col-2" > 
                          <div class="card" >
                          <span class="badge show badge-pill badge-success">Added to Cart</span>
                          <img class="card-img-top" src=${book.img} >
                          <div class="card-title">${book.title} </div>
                          <div class="card-text">${book.category}</div>
                          <button class="btn add-to-card btn-primary">Add to cart</button>
                          <button class="btn skip btn-secondary" >Skip</button>
                          </div>  
                      </div>`;
    body.appendChild(div);

    const badges = document.querySelectorAll(".badge");
    const addToCart = document.querySelectorAll(".add-to-card");
    let cart = [];

    for (let i = 0; i < addToCart.length; i++) {
      addToCart[i].addEventListener("click", () => {
        badges[i].style.visibility = "visible";
        cart.concat(books[i]);
        console.log(cart);
      });
    }

    const skipBtn = document.querySelectorAll(".skip");
    const bookCard = document.querySelectorAll(".card");

    for (let i = 0; i < skipBtn.length; i++) {
      // console.log(cards[i]);
      skipBtn[i].addEventListener("click", () => {
        bookCard[i].style.display = "none";
      });
    }
  });
});
