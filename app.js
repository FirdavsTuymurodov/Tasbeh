let count1 = 0;
let count2 = 0;
let count3 = 0;

const values = document.querySelectorAll("#value");
const btns = document.querySelectorAll(".btn");
const reset = document.querySelector("#reset");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const classes = e.currentTarget.classList;
    if (classes.contains("zero")) {
      count1++;
      values[0].textContent = count1;
    } else if (classes.contains("first")) {
      count2++;
      values[1].textContent = count2;
    } else if (classes.contains("second")) {
      count3++;
      values[2].textContent = count3;
    }
  });
});

reset.addEventListener("click", () => {
  count1 = 0;
  count2 = 0;
  count3 = 0;
  values.forEach((val) => (val.textContent = 0));
});
