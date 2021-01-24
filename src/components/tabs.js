import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //

  //
  const top = document.createElement('div');
  const tab1 = document.createElement('div')
  const tab2 = document.createElement('div')
  const tab3 = document.createElement('div')

  top.classList.add('topics');
  tab1.classList.add('tab');
  tab2.classList.add('tab');
  tab3.classList.add('tab');

  tab1.textContent = topics;
  tab2.textContent = topics;
  tab3.textContent = topics;

  top.appendChild(tab1);
  // top.appendChild(tab2);
  // top.appendChild(tab3);
  
  return top;
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  // TASK 4
  let selected = document.querySelector(selector);
  axios.get('https://lambda-times-api.herokuapp.com/topics')
  .then(res =>{
    res.data.topics.forEach((item) =>{
      const favItem = Tabs(item);
      selected.appendChild(favItem)
    })
  })
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
