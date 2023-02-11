let tasks = [{
    taskName: "Shop",
    taskText: "Buy some meet for Wednesday",
    endDate: "15.02.2023",
    priorityLevel: 0,
    image: "https://cdn.pixabay.com/photo/2018/03/03/10/10/meat-3195334_960_720.jpg"
}, {
    taskName: "LaundryDay ahead",
    taskText: "Do not miss it if you want clean clothes",
    endDate: "18.02.2023",
    priorityLevel: 0,
    image: "https://cdn.pixabay.com/photo/2016/11/29/09/17/feet-1868670_960_720.jpg"
}, {
    taskName: "Appointment",
    taskText: "Be ready for your job interview appointment",
    endDate: "13.02.2023",
    priorityLevel: 0,
    image: "https://cdn.pixabay.com/photo/2018/11/02/10/51/job-3790033_960_720.jpg"
}, {
    taskName: "Son needs ps5 game",
    taskText: "He mentioned that the new sequel of Arkham franchise is out",
    endDate: "01.03.2023",
    priorityLevel: 0,
    image: "https://cdn.pixabay.com/photo/2019/11/15/21/25/tank-4629329_960_720.jpg"
}, {
    taskName: "Code review!!!",
    taskText: "Serri is on a high post (again....) and the rest of the group is sharp too, so do your thing",
    endDate: "11.02.2023",
    priorityLevel: 0,
    image: "https://cdn.pixabay.com/photo/2017/09/08/01/23/september-2727393_960_720.jpg"
}, {
    taskName: "Happy hour at Oberlaa",
    taskText: "Do not forget your intensive treatment",
    endDate: "29.02.2023",
    priorityLevel: 0,
    image: "https://cdn.pixabay.com/photo/2019/12/04/00/36/spa-4671389_960_720.jpg"
}, {
    taskName: "Of Dads and tools",
    taskText: "Bring Dad's stuff back in his garage till Sunday",
    endDate: "26.02.2023",
    priorityLevel: 0,
    image: "https://cdn.pixabay.com/photo/2019/04/18/17/55/rocker-4137585_960_720.jpg"
}, {
    taskName: "Wife needs new clothes...",
    taskText: "DON'T MOVE!!! Your back is killing you",
    endDate: "01.04.2023",
    priorityLevel: 0,
    image: "https://cdn.pixabay.com/photo/2017/05/04/14/19/warning-2284170_960_720.jpg"
}, {
    taskName: "Dinner at Joe's",
    taskText: "Knock your self out with a stake",
    endDate: "23.02.2023",
    priorityLevel: 0,
    image: "https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_960_720.jpg"
}];

for (let values of tasks) {                                                                                                     /*it was much easier to extended the code from .js like Serri did  but still i used a test class during the coding to get auto-fill to managed the cards*/
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
  <p class="btn btn-success btn-sm importance">${values.priorityLevel}</p>
</div>
<div class="container-fluid d-flex" id="calenderBlock">
  <p style="margin-right: 5px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-week" viewBox="0 0 16 16">
      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
      <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
    </svg>
  </p>
    <p style="margin: 2px 5px 0px 5px;">Deadline: ${values.endDate} </p>
</div>
<hr>
<div class="container-fluid" id="lastRow">
<p class="btn btn-danger float-end m-1 decrease">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-trash" viewBox="0 0 16 16">
        <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
    </svg> Delete
</p>
<p class="btn btn-success float-end m-1 doneBtn">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-check-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path
            d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
    </svg> Done
</p>
</div>
</div>
</div>`;
}

let increasePriority = document.getElementsByClassName("importance");

for (let i = 0; i < increasePriority.length; i++) {
    increasePriority[i].addEventListener("click", function () {
        tasks[i].priorityLevel++;
        document.getElementsByClassName("importance")[i].innerHTML = tasks[i].priorityLevel;
        document.getElementById("notifications").innerHTML = tasks[i].priorityLevel;
    })
}

let decreasePriority = document.getElementsByClassName("decrease");

for (let i = 0; i < decreasePriority.length; i++) {
    decreasePriority[i].addEventListener("click", function () {
        tasks[i].priorityLevel--;                                               /*the function reduce the priority level only,the thought was to delete the card with result.splice(i,1), will need help with this matter*/
   if(tasks[i].priorityLevel < 0 ){
            tasks[i].priorityLevel = 0
        }
         document.getElementsByClassName("importance")[i].innerHTML = tasks[i].priorityLevel;
        
    })
}

let changeColor = document.getElementsByClassName("importance");

for (let i = 0; i < changeColor.length; i++) {
    changeColor[i].addEventListener("click", function () {
        if(tasks[i].priorityLevel >=0  && tasks[i].priorityLevel <=1 ){
            changeColor[i].style.backgroundColor = "green"
            changeColor[i].style.color = "white";
        }else if(tasks[i].priorityLevel >= 2 && tasks[i].priorityLevel < 4 ){
            changeColor[i].style.backgroundColor = "yellow"
            changeColor[i].style.color = "black";
        }else {
            changeColor[i].style.backgroundColor = "red";
            changeColor[i].style.color = "white";
        }
    })
}

let setItDone = document.getElementsByClassName("doneBtn");

for (let i = 0; i < setItDone.length; i++) {
    setItDone[i].addEventListener("click", function () {
        document.getElementsByClassName("taskCards")[i].style.backgroundColor = "green"
    })
}


