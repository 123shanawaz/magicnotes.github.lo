console.log("Welcome to app note");
showNotes();
// if user adds a notes,add it to local Storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
//   console.log(notesObj);
  showNotes();
});
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="notscrad my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">notes ${index + 1}</h5>
                        <p class="card-text">${element}</p>
                        <button id="${index} "onclick="deleteNote(this.id)" class="btn btn-primary">Delete notes</button>
                    </div>
                </div>
        `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `nothing to show use "add a note" section to the add notes`;
  }
}

function deleteNote(index) {
//   console.log("i am dleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}



let serach=document.getElementById('searchTxt');
serach.addEventListener("input",function(){
//     console.log('input event fired');
let inputval=serach.value.toLowerCase();
let noteCard=document.getElementsByClassName('noteCard');
Array.from(noteCard).forEach(function(element){
    let cardTxt=element.getElementsByTagName("p")[0].innerText;
    if(cardTxt.includes(inputval)){
        element.style.display="block";
    }
    else{
        element.style.display="none";
    }
})

})

