import axios from "axios";
import { Tabs } from "./tabs";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  
  //Create Elements to the page
  const topDiv = document.createElement('div');
  const topHeadline = document.createElement('div');
  const topAuthor = document.createElement('div');
  const imgCon = document.createElement('div');
  const img = document.createElement('img');
  const sp = document.createElement('span');    

  //Createing the classes for the elements.
  topDiv.classList.add('card');
  topHeadline.classList.add('headline');
  topAuthor.classList.add('author');
  imgCon.classList.add('img-container');
  
  //
  topHeadline.textContent = article.headline;
  img.setAttribute('src' , article.authorPhoto )
  sp.textContent = `By ${article.authorName}`

  topDiv.appendChild(topHeadline);
  topDiv.appendChild(topAuthor);
  topAuthor.appendChild(imgCon);
  imgCon.appendChild(img);
  topAuthor.appendChild(sp);

  topDiv.addEventListener('click', (event) =>{
    console.log(topHeadline)
  })
  
 return topDiv


  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  let selected = document.querySelector(selector);
  axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res =>{
  res.data.articles.bootstrap.forEach(item =>{
    const a = Card(item);
    selected.appendChild(a)
  })
})
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
