<template>
  <div>
    <div id="message"></div>
    <form
      id="newsletter"
      class="subscribe"
      action="/.netlify/functions/form-handler"
      method="post"
    >
      <input
        type="email"
        id="inputEmail"
        name="email"
        placeholder="Enter email to subscribe for FREE"
        class="email"
        required
        autofocus
      />
      <button class="button" type="submit">Subscribe</button>
    </form>
  </div>
</template>

<script>
var form = document.getElementById("newsletter")

form.addEventListener("submit", function (e) {
  e.preventDefault()
  var email = document.getElementById("inputEmail").value
  submitEmail(email)
})

function submitEmail(email) {
  fetch("/.netlify/functions/form-handler", {
    method: "post",
    body: JSON.stringify({
      email: email
    })
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log("data from function", data)
      var messageDiv = document.getElementById("message")
      messageDiv.innerText = "Confirmation email has been sent!"
    })
}
</script>
