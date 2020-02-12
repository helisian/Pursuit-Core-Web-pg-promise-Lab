

const loadUsers = async () => {
    const usersList = document.querySelector('#usersList');
    usersList.innerHTML = "";
    const response = await axios.get(`http://localhost:3000/users/all`);
    response.data.users.forEach((user) => {
        let listItem = document.createElement("li");
        listItem.innerText = `${user.firstname} ${user.lastname}, age ${user.age}`;
        usersList.appendChild(listItem);
    });
}
loadUsers()

const loadPosts = async () => {
    const postsList = document.querySelector('#postsList');
    postsList.innerHTML = "";
    const response = await axios.get(`http://localhost:3000/posts/all`);
    response.data.posts.forEach((posts) => {
        let listItem = document.createElement("li");
        listItem.innerText = `${posts.poster_id}, ${posts.body}`;
        postsList.appendChild(listItem);
    });
}
loadPosts()


const addUserFormSubmitted = async (event) =>  {
    event.preventDefault();    
    const firstname = document.querySelector('#firstNameInput').value;
    const lastname = document.querySelector('#lastNameInput').value;
    const age = document.querySelector('#ageInput').value;
    let response = await axios.post(`http://localhost:3000/users/register`, { firstname, lastname, age });
    loadUsers();
}

let userForm = document.querySelector('#addUserForm');
userForm.addEventListener('submit', addUserFormSubmitted);

let postForm = document.querySelector('#addPostForm');

const addPostFormSubmitted = async (event) =>  {
    event.preventDefault();    
    const posterId = document.querySelector('#poster_id').value;
    const body = document.querySelector('#post').value;
    let response = await axios.post(`http://localhost:3000/posts/register/${posterId}`, {body});
    postForm.reset()
    loadPosts();
}

postForm.addEventListener('submit', addPostFormSubmitted);