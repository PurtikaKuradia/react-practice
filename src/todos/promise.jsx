let myPromise = new Promise(function (resolve, reject) {
  const allButtons = document.querySelectorAll("button");
  allButtons.forEach((button) => {
    button.addEventListener("click", () => {
      resolve({ name: "Purtika", age: 30 });
    });
  });
  document.addEventListener("click", () => {
    reject("Oops you didn't click the button");
  });
});
myPromise.then(
  (data) => {
    console.log("resolve with:", data);
  },
  (error) => {
    console.log("reject with:", error);
  }
);

let myPromise1 = new Promise(function (resolve, reject) {
  const allPtag = document.querySelectorAll("p");
  allPtag.forEach((p) => {
    p.addEventListener("click", () => {
      resolve({ Brand: "Maruti", Model: "Suzuki", color: "white" });
    });
  });
  document.addEventListener("focusin", () => {
    reject("Oops! something went wrong");
  });
});
myPromise1.then(
  (data) => {
    console.log("resolve successfully", data);
  },
  (error) => {
    console.log("Reject with error", error);
  }
);
