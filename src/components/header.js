const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).

  //

  //Create the elements.
  let header = document.createElement('div');
  let currentDate = document.createElement('span');
  let head = document.createElement('h1');
  let tempi = document.createElement('span');

  //Add classes
  header.classList.add('header');
  currentDate.classList.add('date');
  tempi.classList.add('temp');

  //Add Content.
  currentDate.textContent = date;
  head.textContent = title;
  tempi.textContent = temp;

  //Placeing things in order
  header.appendChild(currentDate);
  header.appendChild(head);
  header.appendChild(tempi);
  return header;
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}


const headerAppender = (selector) => {
  const appender = document.querySelector(selector);
  let newHeader = Header("Woof", "1-24-21",'98' );
  appender.appendChild(newHeader)
  
 
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
