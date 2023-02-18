
let myData = JSON.parse(tasks);

function createCardTable() {
    document.getElementById("result").innerHTML = "";
    for (let values of myData) {
        document.getElementById("result").innerHTML += `
            <div>
                <div class="card mx-auto justify-content-center taskCards">
                    <div class="container-fluid">
                        <button class="btn btn-info btn-sm text-white m-2" disabled >Task</button>
                    </div>
                    <img src="${values.image}" class="card-img-top p-3 border borde-1" alt="${values.taskName}">
                    <div class="card-body">
                        <h5 class="card-title">${values.taskName}</h5>
                        <h3 class="card-subtitle">${values.taskText}</h5>
                    <hr>
                    <div class="container-fluid d-flex" id="priorityBlock">
                        <p style="margin-right: 5px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg></p>
                        <p style="margin: 2px 5px 0px 5px;">Priority Level: </p>
                        <p class="btn btn-success btn-sm increase">${values.priorityLevel}</p>
                    </div>
                    <div class="container-fluid d-flex" id="calenderBlock">
                     <p style="margin-right: 5px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-week" viewBox="0 0 16 16">
                     <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                     <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                     </svg></p>
                     <p style="margin: 2px 5px 0px 5px;">Deadline: ${values.endDate} </p>
                    </div>
                    <hr>
                    <div class="container-fluid" id="lastRow">
                        <p class="btn btn-danger float-end m-1 delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-trash" viewBox="0 0 16 16">
                        <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg> Delete </p>
                        <p class="btn btn-success float-end m-1 doneBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-check-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                        d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                        </svg> Done</p>
                    </div>
                </div>
            </div>`;

    }
}
createCardTable();

let increasePriority = document.getElementsByClassName("increase");

for (let i = 0; i < increasePriority.length; i++) {
    increasePriority[i].addEventListener("click", function () {
        myData[i].priorityLevel++;
        if (myData[i].priorityLevel > 5) {
            myData[i].priorityLevel = 0
        }
        changingColor();
        document.getElementsByClassName("increase")[i].innerHTML = myData[i].priorityLevel;
        document.getElementById("notifications").innerHTML = myData[i].priorityLevel;                   /* button increases the priority level for +1 each time  */
    })
}

// let deleteCard = document.getElementsByClassName("delete");

// for (let i = 0; i < deleteCard.length; i++) {
//     deleteCard[i].addEventListener("click", function () {
//         tasks[i].splice(i, i+1)
//     })
// }

function changingColor() {
    let changeColor = document.getElementsByClassName("increase");

    for (let i = 0; i < changeColor.length; i++) {

        if (myData[i].priorityLevel >= 0 && myData[i].priorityLevel <= 1) {
            changeColor[i].style.backgroundColor = "green"                                          /* function is changing the background color of priority as the priority increases*/
            changeColor[i].style.color = "white";
        } else if (myData[i].priorityLevel >= 2 && myData[i].priorityLevel < 4) {
            changeColor[i].style.backgroundColor = "yellow"
            changeColor[i].style.color = "black";
        } else {
            changeColor[i].style.backgroundColor = "red";
            changeColor[i].style.color = "white";
        }

    }
}

let setItDoneOrUndone = document.getElementsByClassName("doneBtn");

for (let i = 0; i < setItDoneOrUndone.length; i++) {
    setItDoneOrUndone[i].addEventListener("click", function () {
        document.getElementsByClassName("taskCards")[i].style.backgroundColor = "green"                     /*function marks the background with one click green as "Done" and reverts with double click white as "Undone" */
    })
    setItDoneOrUndone[i].addEventListener("dblclick", function () {
        document.getElementsByClassName("taskCards")[i].style.backgroundColor = "white"
    })
}

let sortTheCards = document.getElementById("sortBtn");
sortTheCards.addEventListener("click", function () {
    myData.sort((a, b) => b.priorityLevel - a.priorityLevel);
    createCardTable();
})
