const userForm = document.getElementById("userForm");
userForm.onsubmit = (e) => {
  e.preventDefault();
  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data);
  console.log(data);
};
