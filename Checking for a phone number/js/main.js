document.getElementById("phoneNum").addEventListener("input", () => {
    const regex = /^(\+?(00)?\(?(\d{3})\)?)?[-. ]?(\d{2})[-. ]?(\d{3})[-. ]?(\d{4})$/g;
    const input = document.getElementById("phoneNum");
    const format = document.querySelector(".phoneFormat");
    const phone = input.value;
    const found = regex.test(phone);
    if (!found && phone.length) {
      input.classList.add("invalid");
      format.classList.add("block");
    } else {
      input.classList.remove("invalid");
      format.classList.remove("block");
    }
  });
  
document.getElementById("phoneForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("phoneNum");
    const regex = /[()-. ]/g;
    const savedPhoneNum = input.value.replaceAll(regex, "");
    sessionStorage.setItem("myPhoneNum", savedPhoneNum);
});

document.getElementById("textForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("textEntry");
    const regex = / {2,}/g;
    const newText = input.value.replaceAll(regex, " ").trim();
    sessionStorage.setItem("myName", newText);
})
