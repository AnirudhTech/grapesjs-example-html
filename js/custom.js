function validatForm() {
  "use strict";
  const forms = document.getElementById("create-page");
  if (!forms.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    forms.classList.add("was-validated");
    return false;
  }
  return true;
}
function clearForm() {
  /**
   * Get name field and reset it's value
   */
  const nameField = document.getElementById("name");
  nameField.value = "";
  /**
   * Remove was-validated class from Form
   */
  const forms = document.getElementById("create-page");
  forms.classList.remove("was-validated");
}
