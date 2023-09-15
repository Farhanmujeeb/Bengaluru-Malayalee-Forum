function openGmail(event) {
  event.preventDefault();
  const defaultRecipient = "bmfalerts@gmail.com";
  const emailAddress = document.getElementById("gmailLink").textContent.trim();
  const composeURL = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encodeURIComponent(
    emailAddress || defaultRecipient
  )}`;
  window.open(composeURL, "_blank");
}
document.getElementById("gmailLink").addEventListener("click", openGmail);
