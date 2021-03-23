"use strict";
// Query selectors
const searchTrack = document.querySelector(".searchTrack");
const status = document.querySelector(".showStatus");
// titles
const paymentTitle = document.querySelector(".paymentTitle");
const courierTitle = document.querySelector(".courierTitle");
const outForTitle = document.querySelector(".outForTitle");
const deliverTitle = document.querySelector(".deliverTitle");
// Status's
const paymentShow = document.querySelector(".paymentShow");
const courierShow = document.querySelector(".courierShow");
const outForShow = document.querySelector(".outForShow");
const deliverShow = document.querySelector(".deliverShow");
//buttons
const entValid = document.querySelector(".entValid");
const submitBtn = document.querySelector(".submitBtn");

// Class data for ID numbers
const ident1 = {
  trackingId: "45429638",
  payStatus: "01/03/21 - 20:04",
  courierStatus: "01/03/21 - 11:35",
  outForStatus: "02/03/21 - 10:13",
  delivered: "",
};
const ident2 = {
  // trackingId: "67845986",
  // payStatus: "01/03/21 - 19:15",
  // courierStatus: "01/03/21 - 21:36",
  // outForStatus: "02/03/21 - 05:45",
  // delivered: "02/03/21 - 14:32",
};

// Arrays to add more Idents
const identList = [ident1.trackingId, ident2.trackingId];
const idents = [ident1, ident2];

const initApp = function initApp() {
  status.classList.add("hide");
};

initApp();

// any values entered are storred here
const submittedId = searchTrack.value;

const displayStatus = function () {
  // console.log("do displayStatus");

  console.log(searchTrack.value);
  // Ident 1
  if (searchTrack.value === idents[0].trackingId) {
    console.log("its equal!");
    entValid.classList.add("hide");
    //Display the status's
    status.classList.remove("hide");
    // check content is there for each one, if so then display it
    if (ident1.payStatus === "") {
      paymentShow.classList.add("hide");
    } else {
      paymentTitle.textContent = ident1.payStatus;
      paymentShow.classList.remove("hide");
    }
    if (ident1.courierStatus === "") {
      courierShow.classList.add("hide");
    } else {
      courierTitle.textContent = ident1.courierStatus;
      courierShow.classList.remove("hide");
    }
    if (ident1.outForStatus === "") {
      outForShow.classList.add("hide");
    } else {
      outForTitle.textContent = ident1.outForStatus;
      outForShow.classList.remove("hide");
    }
    if (ident1.deliverStatus === "") {
      deliverShow.classList.add("hide");
    } else {
      deliverTitle.textContent = ident1.deliverStatus;
      deliverShow.classList.remove("hide");
    }
  } else {
    console.log("Its NOT :(");
    alert("Please enter a valid Tracking ID such as 45429638");
    entValid.classList.add("hide");
    initApp();
  }
};
//enter buttons pressed
searchTrack.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    displayStatus();
  }
});
// submit button clicked
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  displayStatus();
});

console.log(`Use Tracking ID ${idents[0].trackingId}`);
