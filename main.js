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
  id: 0,
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
  <div class="invalid-feedback">
        Please enter a student name.
      </div>
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
};


const buttonControl = (event) => {
  
 if(event.target.id !== "" && event.target.id !== "studentName" 
	&& event.target.id !== "studentNameForm" && event.target.id !== "hogwartsStudents" 
	&& event.target.id !== "expelledStudents" && event.target.id !== "sortingHatDOM")
 {
  if (event.target.id === "submitButton" && event.target.type === "submit") {
    console.log("#submitButton");
    const nameofStudent = document.getElementById("studentName").value;
      if (nameofStudent === "") {
        alert("Please enter a valid student name.");
		console.error("Student name not entered.");
      } else {
			event.preventDefault();
			sortStudents('#');
			//placeNewStudents(event);
			 console.log(nameofStudent);

		  document.querySelector('#studentNameForm').reset("click");
		  
		  placeStudents(newStudents);
		  createDarkArmy(theDarkArmy);
      }
     
  }
  else if(event.target.id.includes("expel--")){
	  console.log("#expelButton");
	  let darkArmySize = theDarkArmy.length;
	  let studentId = parseInt(event.target.value);
	  let newx = newStudents;
	  const studentRecruit = {
		id: darkArmySize,
      name: newStudents[studentId - 1].name,
      house: "The Dark Army",
    };
	  theDarkArmy.push(studentRecruit);
	  newStudents.splice(studentId - 1, 1)
	  
	  placeStudents(newStudents);
	  createDarkArmy(theDarkArmy);
	}
	
	if(event.target.id !== "hogwartsStudents" && event.target.id !== "expelledStudents" && event.target.id !== "sortingHatDOM" && event.target.id !== "submitButton" && !event.target.id.includes("expel--")){
		let cardContainer = document.getElementById("cards");
		let filter = event.target.value;
		for (var i = 0; i < cardContainer.childNodes[1].children.length; i++){
			let filterComparison = cardContainer.childNodes[1].children[i].innerText.toLowerCase().indexOf(filter);
			if(filterComparison === -1 && filter !== "all"){
				cardContainer.childNodes[1].children[i].style.display = "none";
			}
			else if(filterComparison !== -1 && filter !== "all"){
				cardContainer.childNodes[1].children[i].style.display = "";
			}
			else{
				cardContainer.childNodes[1].children[i].style.display = "";
			}
		}
	}
  }
};
  
  
 
button();


//placing students function
const placeStudents = (arr) => {
 let domString = '';

  arr.forEach(student => {
     domString += `
        <div class="card" style="width: 18rem;" id="card--${student.id}">
            <div class="card-body">
                <h5 class="card-title"> Name: ${student.name}</h5>
                <h5 class="card-text"> House: ${student.house}</h5>
                <button id="expel--${student.id}" type="button" class="btn btn-secondary" value="${student.id}">Expel</button>
            </div>
        </div>
		`;
	    })
	renderToDom("#hogwartsStudents", domString); 
  };
  
  const createDarkArmy = (arr) => {
 let darkString = '';

  arr.forEach(student => {
     darkString += `
        <div class="card" style="width: 18rem;" id="card--${student.id}">
            <div class="card-body">
                <h5 class="card-title"> Name: ${student.name}</h5>
                <h5 class="card-text"> House: ${student.house}</h5>
            </div>
        </div>
		`;
	    })
	renderToDom("#expelledStudents", darkString); 
  };



//placeStudents();


//sorting students function
const sortStudents = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 4) + 1;
  };

  const studentHouse = randomNumber();
	let studentBodySize = newStudents.length;
  if (studentHouse === 1) {
    const student = {
		id: newStudents.length + 1,
      name: document.querySelector("#studentName").value,
      house: "Gryffindor",
      crest: `https://static.wikia.nocookie.net/pottermore/images/1/16/Gryffindor_crest.png`,
      style: "grif-style",
    };
    newStudents.push(student);
  }
  else if (studentHouse === 2) {
    const student = {
		id: newStudents.length + 1,
      name: document.querySelector("#studentName").value,
      house: "Hufflepuff",
      crest: `https://static.wikia.nocookie.net/pottermore/images/5/5e/Hufflepuff_crest.png`,
      style: "huff-style",
    };
    newStudents.push(student);
  }
  else if (studentHouse === 3) {
    const student = {
		id: newStudents.length + 1,
      name: document.querySelector("#studentName").value,
      house: "Ravenclaw",
      crest: `https://static.wikia.nocookie.net/pottermore/images/4/4f/Ravenclaw_crest.png`,
      style: "rave-style",
    };
    newStudents.push(student);
  }
  else{ 
    const student = {
		id: newStudents.length + 1,
      name: document.querySelector("#studentName").value,
      house: "Slytherin",
      crest: `https://static.wikia.nocookie.net/pottermore/images/4/45/Slytherin_Crest.png`,
      style: "sly-style",
    };
	newStudents.push(student);
  }
  let x = theDarkArmy;
  for (var i = 0; i < newStudents.length; i++){
		newStudents[i].id = i + 1;
	}
  
  placeStudents(newStudents);
  createDarkArmy(theDarkArmy);
}
  placeStudents(newStudents);
  createDarkArmy(theDarkArmy);

//sortStudents();

  function startApp() {
    sortingHat();
	placeStudents(newStudents);
	createDarkArmy(theDarkArmy);
    //submitButton();
    //sortStudents();
    //placeStudents();

  }
startApp();
