const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
    //Createing element

    const header = document.createElement('div');
    const currentDate = document.createElement('span');
    const h1 = document.createElement('h1');
    const tempi = document.createElement('span');


  //Adding classe to the elemets
    header.classList.add('header');
    currentDate.classList.add('date');
    tempi.classList.add('temp');


    //Adding content to the elements
    h1.textContent = title;
    currentDate.textContent = date;
    tempi.textContent = temp;


    //Createing the structure.
    header.appendChild(currentDate);
    header.appendChild(h1)
    header.appendChild(tempi)

      console.log(header)
return header;
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}


const headerAppender = (selector) => {
  let appender = document.querySelector(`${selector}`)
  appender.appendChild(Header())
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
