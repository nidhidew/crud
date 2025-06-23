# crud_table

## What is CRUD and build a simple CRUD APP using Javascript
* CRUD stands for Create, Read, Update and Delete.
* To build CRUD app using javascript, 1st create a html page to create data and manage that data.
* in the html page we will create input fields to create data.
```
  <form id="userForm">
    <input type="text" id="name" placeholder="Name" required />
    <input type="email" id="email" placeholder="Email" required />
    <button type="submit">Add User</button>
  </form>
```

* when we click on the Add User button, it will trigger form submit event listener which is added from javascript code using `form.addEventListener`. 
* using `document.getElementById` for getting value from that particular mentioned id in html form input. after storing that value in variable, push them in users array.

```
let users = [];

const form = document.getElementById("userForm");
const userList = document.getElementById("userList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && email) {
    users.push({ name, email });
    renderUsers();
    form.reset();
  }
});
```

* next for reading that stored data, create a function `renderUsers()`.
* using forEach iterate the data from users array and print them in list of the html page.
```
function renderUsers() {
  userList.innerHTML = "";

  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${user.name} (${user.email}) 
      <button onclick="editUser(${index})">Edit</button> 
      <button onclick="deleteUser(${index})">Delete</button>
    `;
    userList.appendChild(li);
  });
}
```
* to delete the data used .splice in deleteUser function.
```
function deleteUser(index) {
  users.splice(index, 1);
  renderUsers();
}
```
* to edit/update used editUser function and access the value from users array and re-assign to the id of input fields.
```
function editUser(index){
    const user = users[index];
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;

    users.splice(index,1)
    renderUser();
}
```

## What is LocalStorage and how to add localStorage so data persists on page reload

