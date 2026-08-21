const loader = document.getElementById("loader");

// Demo delay only.
// In your real website, remove the setTimeout and hide the loader
// when your actual critical page/app initialization is complete.
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("is-hidden");
  }, 2200);
});
