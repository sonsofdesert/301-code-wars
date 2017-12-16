function validatePIN (pin) {
  //return true or false
  if (pin.length === 4 || pin.length === 6) {
    if (typeof parseFloat(pin) != "number" || /\D/.test(pin) || /[a-z]/.test(pin)) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}