function AddBorder() {
  const friends = document.getElementsByClassName("friend");

  for (const friend of friends) {
    friend.style.border = "5px solid red";
    friend.style.borderRadius = "15px";
    friend.style.margin = "15px";
    friend.style.padding = "10px";
  }
}

function AddBackGround() {
  const friends = document.getElementsByClassName("friend");

  for (const friend of friends) {
    friend.style.backgroundColor = "green";
  }
}

function AddFriend() {
  const friends = document.getElementById("friends");
  const FrirendDiv = document.createElement("div");
  FrirendDiv.classList.add("friend");
  FrirendDiv.innerHTML = `
          <h1>Friend-4</h1>
          <p>
            Eos, eligendi. Autem eos, magnam ratione pariatur culpa quas atque,
            quo praesentium vitae illum adipisci a fugiat optio recusandae id.
          </p>
          
          
          
          `;

          friends.appendChild(FrirendDiv);
}
