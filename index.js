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
  });
});

const logged = () => {
  const badges = document.querySelectorAll(".badge");
  const addToCart = document.querySelectorAll(".add-to-card");

  for (let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener("click", () => {
      badges[i].classList.remove("show");
      console.log("clicked");
    });
  }
};

// addToCart.forEach((btn) => {
//   btn.addEventListener("click", logged);
// });

// console.log(books[b].price);

//   for (let b = 0; b < books.length; b++) {
//     const div = document.createElement("div");
//     div.innerHTML = `<div class="col-2" >
//                         <div class="card" >
//                         <span class="badge badge-pill badge-success">Added to Cart</span>
//                         <img class="card-img-top" src=${books[b].img} >
//                         <div class="card-title">${books[b].title} </div>
//                         <div class="card-text">${books[b].category}</div>
//                         <a href="#" class="btn add-to-card btn-primary">Add to cart</a>
//                         </div>
//                     </div>`;
//     body.appendChild(div);

//     // console.log(books[b].price);
//   }
