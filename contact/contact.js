const name=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const message=document.getElementById('message');
const submit=document.getElementsByClassName('form-contact')[0];

//Add event listener
submit.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log("clicked");

//email code...
Email.send({
  SecureToken : "c3257958-c0bb-4bac-ab9d-4fc0dc93a6b8",
  To : 'manuelhigh503@gmail.com',
  From : "manuelhigh503@gmail.com",
  Subject : "new message",
  Body : "This is me testing email or contact form"
}).then(
message => alert(message)
);

})


