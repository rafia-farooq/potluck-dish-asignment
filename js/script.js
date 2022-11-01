// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// Assign dishes
const assignButton = document.querySelector(".assign");
const assignedItem = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;

  if (guest !== "") {
    createItem(guest);
    clearInput();
    updateGuestCount();
  }
});

const createItem = function (guest) {
  const list = document.createElement("li");
  list.innerText = guest;
  guestList.append(list);
};

const clearInput = function () {
  guestInput.value = "";
};

const updateGuestCount = function () {
  const total = document.querySelectorAll(".guest-list li");
  guestCount.innerText = total.length;

  if (total.length === 8) {
    addGuestButton.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestInput.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

// assign potluck dishes

const assignItems = function () {
  const potluckItems = [
    "Potato salad",
    "Hummus",
    "Cookies",
    "Fruit Salad",
    "Chocolate cake",
    "Mac and Cheese",
    "Pizza bites",
    "Lemonade",
    "Honey Wings",
    "Cheese Puffs",
    "Ice cream",
    "Tea and Coffee"
  ];
  const allGuests = document.querySelectorAll(".guest-list li");

  for (let guest of allGuests) {
    // select random item
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];
    // console.log(randomPotluckIndex, randomPotluckItem);
    // create a list
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;

    // add list to page
    assignedItem.append(listItem);

    // remove the selected item from array in order to
    // avoid re-assigning the same item to someone else
    potluckItems.splice(randomPotluckIndex, 1);
    // console.log(potluckItems);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  // disable button to not allow assigning a second time
  assignButton.disabled = true;
});
