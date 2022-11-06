console.log("Here stays the Sorting Hat")
const newStudents = [{
  id: 1,
  name: "Jake",
  house: "Gryffindor",
},
{
  id: 2,
  name: "Fyo",
  house: "Hufflepuff",
},
{
  id: 3,
  name: "Piper",
  house: "Slytherin",
},
{
  id: 4,
  name: "John",
  house: "Ravenclaw",
},
{
  id: 5,
  name: "Mary",
  house: "Hufflepuff",
}
];
const theDarkArmy = [{
  id: 6,
  name: "Joffrey",
  house: "The Dark Army"
}];

//render to dom
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML= htmlToRender;
};
//query selects
const form = document.querySelector('#formDOM');


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
   
  renderToDom('#sortingHatDOM', domString);
};

sortingHat();
//really doesn't need a button but we're leaving for now bc I don't want to break anything^

//form
const studentForm = () => {
  console.log("formElementRendered");
//formElementRendered.reset('#studentName');
  let domString = `
  <form id=studentNameForm>
  <h4>Enter name now</h4>
  <div class="form-floating mb-3">
  <input type="string" placeholder="Enter your name here." class="form-control" id="studentName" required>
  <label for="studentName">Student Name</label>
</div>

<button class="btn btn-primary" id="submitButton" type="submit">Submit</button>
</form>
`;

renderToDom('#formDOM', domString);
}

studentForm();


//button 
const button = () => {
  console.log("button function called");
  document.querySelector(`body`).addEventListener("click", buttonControl);
  //document
    //.querySelector(`students`)
    //.addEventListener("click", expelStudents);
};


const buttonControl = (event) => {
  console.log("#submitButton");
 
  if (event.target.id === "submitButton" && event.target.type === "submit") {
    //console.log(nameofStudent);
    const nameofStudent = document.getElementById("studentName").value;
      if (nameofStudent === "#") {
        callName();
      } else {
        event.preventDefault();
        //sortStudents('#');
      }
      console.log(nameofStudent);

      document.querySelector('#studentNameForm').reset("click");
      //renderToDom('#formDOM', domString)
  }
  };

//submitButton();
button();


//student cards to page
const placeNewStudents = (event) => {
  console.log("#newStudents")
  const targetType = event.target.type;
  const targetId = event.target.id;

  if (targetType === "button") {
    event.preventDefault();

    const placeStudents = newStudents.splice(targetId, 1);

    newStudents.push(acceptedStudents[0]);

    sortNewStudents(newStudents);
    placeStudents(newStudents);
  }
};

//placing students function
const placeStudents = (arr) => {
 
  //console.log(placeStudents);
  let domString = ``
  arr.forEach =((student, i) => {
    //if (card.type=== "studentName"){
    domString += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title"> Name: ${student.name}</h5>
                <h5 class="card-text"> House: ${student.house}</h5>
                <button id="expel--${student.id}" type="button" class="btn btn-secondary">Expel</button>
            </div>
        </div>
`
renderToDom("#placeStudentsDOM", domString);    
}
  )};



//placeStudents();


//sorting students function
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
}
  placeStudents(newStudents);

//sortStudents();

  function startApp() {
    sortingHat();
    //submitButton();
    //sortStudents();
    //placeStudents();

  }
startApp();
