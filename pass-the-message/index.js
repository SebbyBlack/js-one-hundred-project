document.getElementById("myButton").addEventListener("click", function (e) {
  e.preventDefault();
  let myMessage = document.getElementById("theMessage").value;
  let previousMessage = document.getElementById("lastMessage");
  let form = document.getElementById("theForm");
  console.log(myMessage);

  previousMessage.innerHTML = myMessage;
  form.reset();
});
