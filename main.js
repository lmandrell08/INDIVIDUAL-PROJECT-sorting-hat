console.log("Here stays the Sorting Hat")
const newStudents = [];
const theDarkArmy = [];

//render to dom
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML= htmlToRender;
};
//cards on the DOM
const sortingHat = (arr) => {
  console.log();
  let domString = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Welcome to your new home!</h5>
    <p class="card-text">Stay away from the forbidden forrest.</p>
    <a href="#" id="startButton" class="btn btn-primary">Here you are to be sorted in to your house.</a>
  </div>
</div>`;
  
  renderToDom("#sortingHat", domString);
};

sortingHat();

//form

const studentForm = () => {}
  
  let domString = `
  <form id="studentNameForm">
  <div class="mb-3">
  <label for="studentName" class="form-label">Student Name</label>
  <input type="text" placeholder="Enter your name here." class="form-control" id="studentName">
</div>
<button type="submit" id="submitButton" class="btn btn-primary">Submit</button>
</form>
`;
  
  renderToDom("#studentForm", domString);


studentForm();



//button
const buttonControl = (event) => {
  console.log();
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
  };

  if (event.target.id === "submitButton" && event.target.type === "submit") {
    console.log(nameofStudent);
    const nameofStudent = document.getElementById("studentName").value;
  

    document.querySelector("studentForm").reset();
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




//starts app

const init = () => {
  sortingHat();
  button();
  placeStudents(newStudents);
  sortDeathEaters(deathEaters);
};

init();
