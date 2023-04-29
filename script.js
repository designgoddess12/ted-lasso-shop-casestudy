"use strict";
// Select all item
const items = document.querySelectorAll(".item");

// loop through slides and set each slides translateX
items.forEach((item, indx) => {
  item.style.transform = `translateX(${indx * 100}%)`;
});

// select next item button
const nextItem = document.querySelector(".btn-next");

// current item counter
let curItem = 0;
// maximum number of items
let maxItem = items.length - 1;

// add event listener and navigation functionality
nextItem.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curItem === maxItem) {
    curItem = 0;
  } else {
    curItem++;
  }

  //   move item by -100%
  items.forEach((item, indx) => {
    item.style.transform = `translateX(${100 * (indx - curItem)}%)`;
  });
});

// select next item button
const prevItem = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevItem.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curItem === 0) {
    curItem = maxItem;
  } else {
    curItem--;
  }

  //   move item by 100%
  items.forEach((item, indx) => {
    item.style.transform = `translateX(${100 * (indx - curItem)}%)`;
  });
});
//Footer
//© 2023 GitHub, Inc.
//Footer navigation
