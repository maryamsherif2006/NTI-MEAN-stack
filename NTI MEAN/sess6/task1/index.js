
let container = [];
let curIndex = -1;
let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let Age = document.getElementById("age");
let isStudent = document.getElementById("isG");
let Addbtn = document.getElementById("Add");
let Search = document.getElementById("search");
let Student;

if(localStorage.getItem("container")){
    container = JSON.parse(localStorage.getItem("container"));
    diUser();
}


Addbtn.onclick = function () {
    if(Addbtn.innerHTML == "Add user"){
        addUser();
    }else{
        updateUser();
    }
}



function addUser(){

   const currentStudentStatus = isStudent.checked ? "Not a student" : "Student";

    var User = {
        firstName : firstName.value,
        lastName: lastName.value,
        Age: Age.value,
        isStudent :currentStudentStatus,
    };
    container.push(User);
    localStorage.setItem("container",JSON.stringify(container));
    diUser();
}


function diUser (){
    var allUsers =``;
    for(var i = 0;i<container.length;i++){
        allUsers += `
                   <tr>
                        <td>${container[i].firstName}</td>
                        <td>${container[i].lastName}</td>
                        <td>${container[i].Age}</td>
                        <td>${container[i].isStudent}</td>
                        <td class="action">
                            <button class="btn-update" onclick="returnData(${i})">Update</button>
                            <button class="btn-delete" onclick="delUser(${i})">Delete</button>
                        </td>
                    </tr>
        `;
    }
   document.getElementById("tbody").innerHTML = allUsers;
}


function delUser(userIndex){
    container.splice(userIndex,1);
    localStorage.setItem("container",JSON.stringify(container));
    diUser();
}


function returnData(userIndex){
    firstName.value = container[userIndex].firstName;
    lastName.value = container[userIndex].lastName;
    Age.value = container[userIndex].Age;
    Addbtn.innerHTML = "Update user";
    curIndex = userIndex;
}


function updateUser(){

     const currentStudentStatus = isStudent.checked ? "Not a student" : "Student";

    var User = {
        firstName : firstName.value,
        lastName: lastName.value,
        Age: Age.value,
        isStudent :currentStudentStatus,
    };
    container[curIndex] = User;
    localStorage.setItem("container",JSON.stringify(container));
    diUser();
    Addbtn.innerHTML = "Add user";
}

Search.onkeyup = function(){
    searchUser(Search.value)
}
function searchUser(term){
     var allUsers =``;
    for(var i = 0;i<container.length;i++){
        if(container[i].firstName.toLowerCase().includes(term.toLowerCase())){
        allUsers += `
                   <tr>
                        <td>${container[i].firstName}</td>
                        <td>${container[i].lastName}</td>
                        <td>${container[i].Age}</td>
                        <td>${container[i].isStudent}</td>
                        <td class="action">
                            <button class="btn-update" onclick="returnData(${i})">Update</button>
                            <button class="btn-delete" onclick="delUser(${i})">Delete</button>
                        </td>
                    </tr>
        `; 
        }
      
    }
   document.getElementById("tbody").innerHTML = allUsers;
}

if(!Search.value){
    diUser();
}






























// التحقق من حالته
// if (checkbox.checked) {
//     console.log("اليوزر **معلم** على التشيك بوكس");
// } else {
//     console.log("اليوزر **مش** معلم عليه");
// }



// var container = [];
// var curIndex = -1;
// var proName = document.getElementById("proName");
// var proPrice = document.getElementById("proPrice");
// var proCategory = document.getElementById("proCategory");
// var proDesc = document.getElementById("proDesc");
// var btn = document.getElementById("btn");
// var proSearch = document.getElementById("proSearch");

// if(localStorage.getItem("container")){
//     container = JSON.parse(localStorage.getItem("container"));
//     dipros();
// }

// btn.onclick = function () {
//     if(btn.innerHTML == "Add Product"){
//         addPro();
//     }else{
//         updatePro();
//     }
// }

// function addPro(){
//    var product = {
//         name :proName.value,
//         price:proPrice.value,
//         Category:proCategory.value,
//         desc :proDesc.value,
//     };
//     container.push(product);
//     localStorage.setItem("container",JSON.stringify(container));
//     dipros();
// }

// function dipros (){
//     var allPros =``;
//     for(var i = 0;i<container.length;i++){
//         allPros += `
//          <tr>
//             <td>${i+1}</td>
//             <td>${container[i].name}</td>
//             <td>${container[i].price}</td>
//             <td>${container[i].Category}</td>
//             <td>${container[i].desc}</td>
//             <td>
//             <button class="btn delete" onclick="delPro(${i})" >delete</button>
//             <button class="btn uptade" onclick="returnData(${i})">update</button>
//             </td>
//          </tr>
//         `;
//     }
//    document.getElementById("tbody").innerHTML = allPros;
// }

// function delPro(prIndex){
//     container.splice(prIndex,1);
//     localStorage.setItem("container",JSON.stringify(container));
//     dipros();
// }

// function returnData(prIndex){
//     proName.value = container[prIndex].name;
//     proPrice.value = container[prIndex].price;
//     proCategory.value = container[prIndex].category;
//     proDesc.value = container[prIndex].desc;
//     btn.innerHTML = "Update Product";
//     curIndex = prIndex;
//     console.log(curIndex);
// }

// function updatePro(){
//     var product = {
//         name :proName.value,
//         price:proPrice.value,
//         Category:proCategory.value,
//         desc :proDesc.value,
//     };
//     container[curIndex] = product;
//     localStorage.setItem("container",JSON.stringify(container));
//     dipros();
//     btn.innerHTML = "Add Product";
// }


// proSearch.onkeyup =function(){
//     search(proSearch.value)
// }
// function search(term){
//      var allPros =``;
//     for(var i = 0;i<container.length;i++){
//         if(container[i].name.toLowerCase().includes(term.toLowerCase())){
//         allPros += `
//          <tr>
//             <td>${i+1}</td>
//             <td>${container[i].name}</td>
//             <td>${container[i].price}</td>
//             <td>${container[i].Category}</td>
//             <td>${container[i].desc}</td>
//             <td>
//             <button class="btn delete" onclick="delPro(${i})" >delete</button>
//             <button class="btn uptade" onclick="returnData(${i})">update</button>
//             </td>
//          </tr>
//         `; 
//         }
      
//     }
//    document.getElementById("tbody").innerHTML = allPros;
// }