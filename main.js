console.log("Here stays the Sorting Hat")
const newStudents = [];
const theDarkArmy = [];

//render to dom
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML= htmlToRender;
};
//cards on the DOM
const cardsOnDom = (arr) => {
  let domString = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Welcome to your new home!</h5>
    <p class="card-text">Stay away from the forbidden forrest.</p>
    <a href="#" id="startButton" class="btn btn-primary">Here you are to be sorted in to your house.</a>
  </div>
</div>`;
  
  renderToDom("#app", domString);
};


//button

const button = () => {
  document.querySelector(`body`).addEventListener("click", buttonControl);
  document.querySelector(`#students`)
  document.addEventListener("click", expelStudents);
};

const buttonControl = (event) => {
  if (event.target.id === "startButton") {
    let domString = `
     <form id="studentNameForm">
     <div class="mb-3">
       <label for="studentName" class="form-label">Student Name</label>
       <input type="text" placeholder="Enter your name here." class="form-control" id="studentName">
     </div>
     <button type="submit" id="submitButton" class="btn btn-primary">Submit</button>
     </form>
     `

    renderToDom("#studentForm", domString);
  }

  if (event.target.id === "submitButton" && event.target.type === "submit") {
    const nameofStudent = document.getElementById("studentName").value;
    if (nameofStudent === "") {
      makeHowler();
    } else {
      event.preventDefault();
      sortStudents();
    }

    document.querySelector("form").reset();
  }
};

//student cards to page
const placeStudents = (arr) => {
  let domString = " ";

  arr.forEach((student, i) => {
    domString += `
        <div class="card ${student.style}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${student.name}</h5>
                <p class="card-text">${student.house}</p>
                <a href="#" type= "button" id= "${i}" class="btn btn-primary">Expel student</a>
            </div>
        </div>
`;
  });

  renderToDom("#hogwartsStudents", domString);
};

//expels student to the dark army
const expelStudents = (event) => {
  const targetType = event.target.type;
  const targetId = event.target.id;

  if (targetType === "button") {
    event.preventDefault();

    const expelledStudent = newStudents.splice(targetId, 1);

    deathEaters.push(expelledStudent[0]);

    sortDarkArmy(darkArmy);
    placeStudents(newStudents);
  }
};


//randomNum function for sorting
//redo everything below
const sortTheDarkArmy = (array) => {
  let domString = " ";

  array.forEach((student) => {
    domString += `
        <div class="card evil" style="width: 18rem;">
            <img src="https://static.wikia.nocookie.net/pottermore/images/7/71/Screenshot_-_10_5_2013_%2C_3_57_20_PM.png" class="card-img-top" alt="The Dark Mark!">
            <div class="card-body">
                <h5 class="card-title">${student.name}</h5>
                <p class="card-text">This student is now a Death Eater!</p>
            </div>
        </div>
`;

    renderToDom("#expelledStudents", domString);
  });
};

// Sorts students into houses and adds to the array.

const sortStudents = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 4) + 1;
  };

  const studentHouse = randomNumber();

  if (studentHouse === 1) {
    const student = {
      name: document.querySelector("#studentName").value,
      house: "Gryffindor",
      crest: `https://static.wikia.nocookie.net/pottermore/images/1/16/Gryffindor_crest.png`,
      style: "grif-style",
    };
    newStudents.push(student);
  }
  if (studentHouse === 2) {
    const student = {
      name: document.querySelector("#studentName").value,
      house: "Hufflepuff",
      crest: `https://static.wikia.nocookie.net/pottermore/images/5/5e/Hufflepuff_crest.png`,
      style: "huff-style",
    };
    newStudents.push(student);
  }
  if (studentHouse === 3) {
    const student = {
      name: document.querySelector("#studentName").value,
      house: "Ravenclaw",
      crest: `https://static.wikia.nocookie.net/pottermore/images/4/4f/Ravenclaw_crest.png`,
      style: "rave-style",
    };
    newStudents.push(student);
  }
  if (studentHouse === 4) {
    const student = {
      name: document.querySelector("#studentName").value,
      house: "Slytherin",
      crest: `https://static.wikia.nocookie.net/pottermore/images/4/45/Slytherin_Crest.png`,
      style: "sly-style",
    };
    newStudents.push(student);
  }

  placeStudents(newStudents);
};