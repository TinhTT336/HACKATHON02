let students = [
    { id: 1, name: "Nguyen Van A", email: "nguyenvana@gmail.com", phone: "0983877746", address: "Ha Nam", gender: "nam" },
    { id: 2, name: "Nguyen Van ", email: "nguyenvanb@gmail.com", phone: "0983677746", address: "Ha Nam", gender: "nam" },
    { id: 3, name: "Nguyen Van B", email: "nguyenvanc@gmail.com", phone: "0983827746", address: "Ha Nam", gender: "nam" },
    { id: 4, name: "Nguyen Van C", email: "nguyenvand@gmail.com", phone: "0983874746", address: "Ha Nam", gender: "nu" },
    { id: 5, name: "Nguyen Van D", email: "nguyenvane@gmail.com", phone: "0983837746", address: "Ha Nam", gender: "nam" },
    { id: 6, name: "Nguyen Van E", email: "nguyenvanf@gmail.com", phone: "0983377746", address: "Ha Nam", gender: "nam" },
    { id: 7, name: "Nguyen Van G", email: "nguyenvang@gmail.com", phone: "0983177746", address: "Ha Nam", gender: "nu" }
];
let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPhone = document.getElementById("phone");
let inputAddress = document.getElementById("address");
let inputMale = document.getElementById("male");
let inputFemale = document.getElementById("female");
let errMess = document.getElementById("errMess");
let idGlobal = null;

function displayList(search = students) {
    let strHTML = "";
    for (let i = 0; i < search.length; i++) {
        const element = search[i];
        strHTML += `
                <tr><td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.email}</td>
                    <td>${element.phone}</td>
                    <td>${element.address}</td>
                    <td>${element.gender}</td>
                    <td width="100px"><button id="btn_edit" onclick="updateStudent(${element.id})">Edit</button></td>
                    <td width="100px"><button id="btn_delete" onclick="delStudent(${element.id})">Delete</button></td>
                    <td></td></tr>`
    }
    document.getElementById("t-body").innerHTML = strHTML;
}
displayList();

function updateStudent(id) {
    let indexUpdate = students.findIndex(student => student.id == id);
    idGlobal = indexUpdate;
    inputName.value = students[indexUpdate].name;
    inputEmail.value = students[indexUpdate].email;
    inputPhone.value = students[indexUpdate].phone;
    inputAddress.value = students[indexUpdate].address;
}

document.getElementById("form_info").addEventListener("submit", function (e) {
    e.preventDefault();
    if (idGlobal != null) {
        students[idGlobal].name = inputName.value;
        students[idGlobal].email = inputEmail.value;
        students[idGlobal].phone = inputPhone.value;
        students[idGlobal].address = inputAddress.value;
        students[idGlobal].gender = inputMale.checked ? 'Nam' : 'Nữ'
        idGlobal = null;
        this.reset();
        displayList();
        return;
    }
    const newStudent = {
        id: getNewId(),
        name: inputName.value,
        email: inputEmail.value,
        phone: inputPhone.value,
        address: inputAddress.value,
        gender: inputMale.checked ? 'Nam' : 'Nữ'
    }
    console.log((newStudent));
    students.push(newStudent);
    console.log(students);
    displayList();
    this.reset();
})
function checkGender() {
    if (students[idGlobal].gender == "Nam") {
        inputMale.checked = true;
    } else if (students[idGlobal].gender == "Nữ") {
        inputFemale.checked = true
    };
}

function delStudent(id) {
    let indexDelete = students.findIndex(student => student.id === id)
    // console.log(indexDelete);
    idGlobal = indexDelete;
    console.log(indexDelete);
    students.splice(idGlobal, 1)
    displayList();
    idGlobal = null;
}


function getNewId() {
    let idMax = 0;
    for (let i = 0; i < students.length; i++) {
        const element = students[i];
        if (idMax < element.id) {
            idMax = element.id;
        }
    } return idMax + 1;
}

function searchByName() {
    let inputSearch = document.getElementById("input_search").value;
    let findStudent = students.filter(student => student.name.toLowerCase().includes(inputSearch.trim().toLowerCase()))
    displayList(findStudent);
}

function sortStudent() {
    students.sort((a, b) => a.name.localeCompare(b.name));
    displayList();
}

document.getElementById("form_info").addEventListener("submit", function (e) {
    e.preventDefault()
    const email = inputEmail.value;
    const name = inputName;
    const phone = inputPhone.value;
    const address = inputAddress.value;
    if (name == "" || name == null) {
        errMess.innerHTML = "Hãy nhập thông tin";
    } else if (address == "" || address == null) {
        errMess.innerHTML = "Hãy nhập thông tin";
    } else if (phone.length !== 10) {
        errMess.innerHTML = "Số điện thoại nhập chưa chính xác";
    }
})
