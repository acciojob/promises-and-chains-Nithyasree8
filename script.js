//your JS code here. If required.
document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value.trim(), 10);

  if (!name || isNaN(age)) {
    alert("Please fill out both fields.");
    return;
  }

  validateAge(name, age)
    .then(message => {
      alert(message);
    })
    .catch(errorMessage => {
      alert(errorMessage);
    });
});

function validateAge(name, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4 seconds delay
  });
}
