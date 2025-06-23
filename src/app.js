let users = [];

const form = document.getElementById("userForm");
const userList = document.getElementById("userList");

//create
form.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if(name && email){
        users.push({ name,email });
        console.log(users);
        renderUser();
        form.reset();
    }
});

//read
function renderUser(){
    userList.innerHTML = "";
    users.forEach((user, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${user.name} (${user.email})
            <button onclick = "editUser(${index})">Edit</button>
            <button onclick = "deleteUser(${index})">Delete</button>
        `;
        userList.appendChild(li);
    });
}

//delete
function deleteUser(index){
    users.splice(index, 1);
    renderUser();
}

//edit
function editUser(index){
    const user = users[index];
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;

    users.splice(index,1)
    renderUser();
}