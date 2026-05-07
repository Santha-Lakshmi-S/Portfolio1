var typed = new Typed(".typing",{
  strings:[
    "Systems Engineer",
    "Cloud Infrastructure Engineer",
    "PowerShell Automation Developer",
    "Machine Learning Enthusiast"
  ],
  typeSpeed:60,
  backSpeed:40,
  loop:true
});

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.onclick = () =>{
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    toggleBtn.innerHTML="☀️";
  }else{
    toggleBtn.innerHTML="🌙";
  }
};

particlesJS("particles-js",{
  particles:{
    number:{value:70},
    size:{value:3},
    move:{speed:2},
    line_linked:{enable:true}
  }
});

function sendMessage(){

  const input=document.getElementById("userInput");
  const text=input.value.trim();

  if(text==="") return;

  const chatBody=document.querySelector(".chat-body");

  const userMsg=document.createElement("div");
  userMsg.className="user-message";
  userMsg.innerText=text;

  chatBody.appendChild(userMsg);

  const botMsg=document.createElement("div");
  botMsg.className="bot-message";

  botMsg.innerText="Thanks for your message. Ask me about skills, projects or certifications.";

  setTimeout(()=>{
    chatBody.appendChild(botMsg);
  },500);

  input.value="";
}
