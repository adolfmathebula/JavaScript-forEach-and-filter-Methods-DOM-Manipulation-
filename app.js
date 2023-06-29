let app = document.getElementById("app");
let lists = document.querySelector(".lists");

lists.innerHTML=" "

const people = [{
    id: 1,
    name: "Adolf",
    surname: "Mathebula",
    position: "Front End Engineer",
    age: 25,
    salary: "R25000",
    department: "Software Engineering",
    bio: "This is just a short bio, a sample of what must be.",
},
{
    id: 2,
    name: "John",
    surname: "Doe",
    position: "UI/UX Specialist",
    age: 30,
    salary: "R20000",
    department: "Design",
    bio: "This is just a short bio, a sample of what must be.",
},
{
    id: 3,
    name: "Jackie",
    surname: "Smith",
    position: "Senior Engineer",
    age: 38,
    salary: "R45000",
    department: "Software Engineering",
    bio: "This is just a short bio, a sample of what must be.",
},
{
    id: 4,
    name: "Thabo",
    surname: "Maluleke",
    position: "Graphic Designer",
    age: 23,
    salary: "R18000",
    department: "Design",
    bio: "This is just a short bio, a sample of what must be.",
},
{
    id: 5,
    name: "Precious",
    surname: "Chauke",
    position: "Junior Marketer",
    age: 32,
    salary: "R20000",
    department: "Marketing",
    bio: "This is just a short bio, a sample of what must be.",
},
{
    id: 6,
    name: "Livhuwani",
    surname: "Mudau",
    position: "Senior Engineer",
    age: 35,
    salary: "R46000",
    department: "Software Engineering",
    bio: "This is just a short bio, a sample of what must be.",
},
{
    id: 7,
    name: "Cathrine",
    surname: "Fortune",
    position: "Marketing Manager",
    age: 31,
    salary: "R30000",
    department: "Marketing",
    bio: "This is just a short bio, a sample of what must be.",
},
{
    id: 8,
    name: "Stephans",
    surname: "Ramulifho",
    position: "Design Manager",
    age: 40,
    salary: "R35000",
    department: "Design",
    bio: "This is just a short bio, a sample of what must be.",
},
{
    id: 9,
    name: "Jack",
    surname: "Lorris",
    position: "Graphic Designer",
    age: 27,
    salary: "R18000",
    department: "Design",
    bio: "This is just a short bio, a sample of what must be.",
}
];


function loadEmployees(){
    people.forEach((value, key)=>{

        let newDiv = document.createElement('div');
        newDiv.className = "list-item"

        newDiv.innerHTML = `
        <p>Name: <span>${value.name}</span></p>
        <p>Surname: <span>${value.surname}</span></p>
        <p>Position: <span>${value.position}</span></p>
        <p>Age: <span>${value.age}</span></p>
        <div class="line-gray"></div>
        <p>Salary: <span>${value.salary}</span></p>
        <p>Department: <span class="secondary">${value.department}</span></p>
        `;

        lists.appendChild(newDiv);
    })

}

loadEmployees()

function getAllEmployees(){

    let allList = [...people];
    document.querySelector(".lists").innerHTML=""
    allList.forEach((value, key)=>{

        let newDiv = document.createElement('div');
        newDiv.className = "list-item"

        newDiv.innerHTML = `
        <p>Name: <span>${value.name}</span></p>
        <p>Surname: <span>${value.surname}</span></p>
        <p>Position: <span>${value.position}</span></p>
        <p>Age: <span>${value.age}</span></p>
        <div class="line-gray"></div>
        <p>Salary: <span>${value.salary}</span></p>
        <p>Department: <span class="secondary">${value.department}</span></p>
        `;

        lists.appendChild(newDiv);
    })

}


function getEmployees(deptName){

    document.querySelector(".lists").innerHTML=""
    let list = [...people];
   let filtered = list.filter((person)=>person.department === deptName);

   filtered.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.className = "list-item"

        newDiv.innerHTML = `
        <p>Name: <span>${value.name}</span></p>
        <p>Surname: <span>${value.surname}</span></p>
        <p>Position: <span>${value.position}</span></p>
        <p>Age: <span>${value.age}</span></p>
        <div class="line-gray"></div>
        <p>Salary: <span>${value.salary}</span></p>
        <p>Department: <span class="secondary">${value.department}</span></p>
        `;
    
        lists.appendChild(newDiv);
    })
}