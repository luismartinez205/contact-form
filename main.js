const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // 🔹 Inputs y textarea
  const fields = form.querySelectorAll("input[required], textarea[required]");

  fields.forEach(field => {
    const group = field.closest(".form-group");

    if (!field.value.trim()) {
      group.classList.add("error");
      isValid = false;
    } else {
      group.classList.remove("error");
    }
  });

  // 🔹 Radios
  const radios = form.querySelectorAll("input[name='query']");
  const radioGroup = radios[0].closest(".form-group");

  const radioChecked = Array.from(radios).some(r => r.checked);
  
  if (!radioChecked) {
    radioGroup.classList.add("error");
    isValid = false;
  } else {
    radioGroup.classList.remove("error");
  }

  // 🔹 Checkbox
  const checkbox = form.querySelector(".checkbox input");
  const checkboxGroup = checkbox.closest(".form-group");

  if (!checkbox.checked) {
    checkboxGroup.classList.add("error");
    isValid = false;
  } else {
    checkboxGroup.classList.remove("error");
  }

  const toast = document.getElementById("toast");

if (isValid) {
  toast.classList.add("show");

  form.reset();

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}
});



