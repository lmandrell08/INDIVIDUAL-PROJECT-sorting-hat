console.log("Here stays the Sorting Hat")
const newStudents = [];
const theDarkArmy = [];

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

<button class="btn btn-primary" type="submit">Submit</button>
</form>
`;


renderToDom('#formDOM', domString);
}

studentForm();

//button 
const button = () => {
  console.log("button function called");
  document.querySelector(`body`).addEventListener("click", buttonControl);
  document
    .querySelector(`students`)
    .addEventListener("click", expelStudents);
};


const buttonControl = (event) => {
  console.log("#submitButton");
 
  if (event.target.id === "submitButton" && event.target.type === "submit") {
    //console.log(nameofStudent);
    const nameofStudent = document.getElementById("studentName").value;
      if (nameofStudent === "") {
        callName();
      } else {
        event.preventDefault();
        sortStudents();
      }
      //console.log(nameofStudent);

    document.querySelector('#buttonDOM').reset();
    renderToDom("#buttonDOM", domString)
    
  };

//submitButton();
buttons();



  function startApp() {
    sortingHat();
    submitButton();

  }
startApp();
}
