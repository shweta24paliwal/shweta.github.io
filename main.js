const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/garden.jpg") {
    myImage.setAttribute("src", "images/trees.jpg");
  } else {
    myImage.setAttribute("src", "images/garden.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `A Place on earth, ${storedName}`;
  }

myButton.onclick = () => {
    setUserName();
  };

  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `A Place on earth, ${myName}`;
    }
  }

  