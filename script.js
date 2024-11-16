// Example: Add an animation to alert when clicking on the Resume button
const resumeBtn = document.querySelector(".btn");
resumeBtn.addEventListener("click", () => {
  Swal.fire({
    title: "Downloading...",
    text: "Your resume is downloading!",
    icon: "success",
    confirmButtonText: "Great!",
  });
});
