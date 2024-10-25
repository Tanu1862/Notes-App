// const notesContainer =document.querySelector(".notes-Container");
// const  createBtn =document.querySelector(".btn");
// let Note = document.querySelectorAll(".input-box");

// function showNote(){
//     notesContainer.innerHTML = localStorage.getItem("notes");

// }
// showNote();


// function updateStorage(){
//     localStorage.setItem("Notes", notesContainer.innerHTML);
// }

// createBtn.addEventListener("click", ()=> {
//     let inputBox = document.createElement("p");
//     let img = document.createElement("img");
//     inputBox.className = "input-box";
//     inputBox.setAttribute("cotenteditable", "true");
//     img.src= "images-2/delete.png";
//     notesContainer.appendChild(inputBox).appendChild(img);

// })
// notesContainer.addEventListener("click", function (e){
//     if( e.target. tagName ==="IMG"){
//         e.target.perentElement.remove();
//         updateStorage();

//     }
//     else if(e.target.tagName === "p" ){
//         Notes = document.querySelectorAll("input-box");
//         Notes.forEach(nt=>{
//             nt.onKeyup = function(){
//                 updateStorage();

//             }
//         })
//     }
// })
//  document.addEventListener("keydown", event=>{
//     if(event.key=== "Enter"){
//         document.execCommand("insertLineBreak");
//          event.preventDefault();
//     }
//  })    
 
 

const notesContainer = document.querySelector(".notes-Container");
const createBtn = document.querySelector(".btn");
let Note = document.querySelectorAll(".input-box");

function showNote() {
    notesContainer.innerHTML = localStorage.getItem("Notes");
}
showNote();

function updateStorage() {
    localStorage.setItem("Notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images-2/delete.png";
    img.className = "delete-btn";
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    updateStorage();
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        let notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onkeyup = function () {
                updateStorage();
            };
        });
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});