import { usersData } from "./users.js";

// variables :
const userParentDiv = document.querySelector(".users");
const input = document.querySelector(".search-input");
const filter = {
  searchItem: "",
};

function filterUsers(_users, _filters) {
  const filterdUsers = _users.filter((item) => {
    return item.userName.toLowerCase().includes(_filters.searchItem.toLowerCase());
  });

  userParentDiv.innerHTML = "";

  filterdUsers.forEach((items) => {
    const userBox = document.createElement("div");
    userBox.className = "user";

    const profileDiv = document.createElement("div");
    profileDiv.className = "user-profile";

    const profileImg = document.createElement("img");
    profileImg.className = "profile";
    profileImg.src = items.imageURL;

    const usernameDiv = document.createElement("div");
    usernameDiv.className = "user-name";

    const userName = document.createElement("h3");
    userName.className = "name";
    userName.textContent = items.userName;

    const skills = document.createElement("p");
    skills.className = "skill";
    skills.textContent = items.skill;

    // appending elements
    userBox.appendChild(profileDiv);
    userBox.appendChild(usernameDiv);
    profileDiv.appendChild(profileImg);
    usernameDiv.appendChild(userName);
    usernameDiv.appendChild(skills);

    userParentDiv.appendChild(userBox);
  });
}
input.addEventListener("input", (e) => {
  filter.searchItem = e.target.value;
  filterUsers(usersData, filter);
});
