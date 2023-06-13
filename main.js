function submitForm(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  console.log(email);
  if(!email || !emailRegex.test(email)){
    error_label.style.display = "inline";
    email_id.classList.add("error");
    return;
  }
  myForm.reset();
  container.style.display = "none";
  sucess_container.style.display = "flex";
  sucess_message.innerHTML = `A confirmation email has been sent to <b>${email}</b>. Please open it and click the button inside to confirm your subscription.`;
}

const error_label = document.getElementById("error-label");
error_label.style.display = "none";
const email_id = document.getElementById("email");
const container = document.getElementsByClassName("container")[0];

const sucess_container = document.getElementsByClassName("success-cont")[0];

function dismiss(){
  sucess_container.style.display = "none";
  container.style.display = "grid";
}