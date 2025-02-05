const users = [
  {
    name: "Vijay",
    id:0,
    messages: [
      {
        content: "Hi",
        time: "02:01",
        date: "02.02.2025",
        sentBy: "me",
      },
      {
        content: "How are you?",
        time: "02:05",
        date: "02.03.2025",
        sentBy: "me",
      },
      {
        content: "I'm good, thanks!",
        time: "02:06",
        date: "02.04.2025",
        sentBy: "Vijay",
      },
    ],
  },
  {
    name: "Anita",
    id:1,
    messages: [
      {
        content: "Hello",
        time: "10:15",
        date: "03.02.2025",
        sentBy: "me",
      },
      {
        content: "What's up?",
        time: "10:20",
        date: "03.02.2025",
        sentBy: "me",
      },
      {
        content: "Not much, just working.",
        time: "10:22",
        date: "03.02.2025",
        sentBy: "Anita",
      },
    ],
  },
  {
    name: "Rahul",
    id:2,
    messages: [
      {
        content: "Hey",
        time: "15:30",
        date: "04.02.2025",
        sentBy: "me",
      },
      {
        content: "Are you coming to the party?",
        time: "15:35",
        date: "04.02.2025",
        sentBy: "me",
      },
      {
        content: "Yes, I'll be there!",
        time: "15:40",
        date: "04.02.2025",
        sentBy: "Rahul",
      },
    ],
  },
  {
    name: "Bumrah",
    id:3,
    messages: [
      {
        content: "Good morning",
        time: "08:00",
        date: "05.02.2025",
        sentBy: "me",
      },
      {
        content: "Did you finish the report?",
        time: "08:10",
        date: "05.02.2025",
        sentBy: "me",
      },
      {
        content: "Yes, I sent it last night.",
        time: "08:15",
        date: "05.02.2025",
        sentBy: "Bumbrah",
      },
    ],
  },
  {
    name: "Suresh",
    id:4,
    messages: [
      {
        content: "Hi there",
        time: "11:45",
        date: "06.02.2025",
        sentBy: "me",
      },
      {
        content: "Can we meet at 3 PM?",
        time: "11:50",
        date: "06.02.2025",
        sentBy: "me",
      },
      {
        content: "Sure, see you then!",
        time: "11:55",
        date: "06.02.2025",
        sentBy: "Suresh",
      },
    ],
  },
];

let userList = document.getElementById("user-list");

let currentUser = document.querySelector('#user-name')
let lastseen = document.getElementById('last-seen')


let userContent = document.getElementById("chat-content")

let updateUser = (user) => {
    currentUser.innerText = user.name
    if (user.messages && user.messages.length > 0) {
        lastseen = user.messages[user.messages.length - 1].date; 
    }

    userContent.innerHTML = ""

    if (user.messages && user.name == currentUser.innerText){
      user.messages.map(obj => {
          let messageDiv = document.createElement('div')
          if (obj.sentBy == "me") messageDiv.className = 'flex justify-end'
          else messageDiv.className = 'flex'
          let mess = document.createElement('p')
          mess.className = (obj.sentBy == "me") ? "bg-[#dcfac6] px-4 py-2 rounded-sm" : "bg-[#fff] px-4 py-2 rounded-sm";
          mess.innerText = obj.content
          messageDiv.appendChild(mess)
          userContent.appendChild(messageDiv)
      });
    }
}

const now = new Date();

let addMessage = () => {
  let newMessage = {
    content: document.getElementById('input-message').value,
    sentBy: "me",
    time: now.getHours() + ":" + now.getMinutes(),
    date: now.toLocaleDateString()
  }

  users.forEach(obj => {
    if(obj.name == currentUser.innerText) {
      let messageDiv = document.createElement('div')
        messageDiv.className = 'flex justify-end'
        let mess = document.createElement('p')
        mess.className ="bg-[#dcfac6] px-4 py-2 rounded-sm";
        mess.innerText = newMessage.content
        messageDiv.appendChild(mess)
        userContent.appendChild(messageDiv)
        obj.messages.push(newMessage)
    }
  })

}



users.map((user) => {
  // creating a new user
  const newUser = document.createElement("li");
  newUser.className =
    "h-[70px] flex items-center justify-between gap-2 cursor-pointer";

  // creating first child for icon
  const avatarDiv = document.createElement("div");
  avatarDiv.className =
    "bg-gray-200 p-2 flex items-center justify-center rounded-full w-[50px] h-[50px]";
  const avatar = document.createElement("i");
  avatar.className = "fa-solid fa-user text-[25px] text-white";
  avatarDiv.appendChild(avatar);

  // creating second child for content display
  const content = document.createElement("div");
  content.className = "w-[calc(100%-50px)]";
  const nameDiv = document.createElement("div");
  nameDiv.className = "flex justify-between items-center";
  const name = document.createElement("h1");
  name.textContent = user.name;
  nameDiv.appendChild(name);
  name.className = "text-black font-semibold";

  if (user.messages && user.messages.length > 0) {
    const date = document.createElement("p");
    date.className = "text-[15px] font-normal text-[#444]";
    date.textContent = user.messages[user.messages.length - 1].time; 
    nameDiv.appendChild(date);
  }

  content.appendChild(nameDiv);
  if (user.messages && user.messages.length > 0) {
    const lastMessage = document.createElement("p");
    lastMessage.textContent = user.messages[user.messages.length - 1].content;
    content.appendChild(lastMessage);
  }

  // appending childs to the parent div
  newUser.appendChild(avatarDiv);
  newUser.appendChild(content);

  newUser.onclick = () => updateUser(user)

  userList.appendChild(newUser);

  if (user.messages && user.name == currentUser.innerText){
    user.messages.map(obj => {
        let messageDiv = document.createElement('div')
        if (obj.sentBy == "me") messageDiv.className = 'flex justify-end'
        else messageDiv.className = 'flex'
        let mess = document.createElement('p')
        mess.className = (obj.sentBy == "me") ? "bg-[#dcfac6] px-4 py-2 rounded-sm" : "bg-[#fff] px-4 py-2 rounded-sm";
        mess.innerText = obj.content
        messageDiv.appendChild(mess)
        userContent.appendChild(messageDiv)
    });
  }
});



