const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container2 = document.querySelector(".container2");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
    container2.classList.add("sign-up-mode")
});
sign_in_btn.addEventListener("click", () => {
    container2.classList.remove("sign-up-mode")
});
sign_up_btn2.addEventListener("click", () => {
    container2.classList.add("sign-up-mode2")
});
sign_in_btn2.addEventListener("click", () => {
    container2.classList.remove("sign-up-mode2")
});