let count = 0;

let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let elementId = e.currentTarget.id;
    if (elementId == "decrease") {
      count--;
    } else if (elementId == "reset") {
      count = 0;
    } else {
      count++;
    }
    // if (count > 0){
    //     value.style.color = "green"
    // }
    // else if (count < 0){
    //     value.style.color = "red"
    // }
    // else {
    //     value.style.color = "black"
    // }
    value.textContent = count;
  });
});
