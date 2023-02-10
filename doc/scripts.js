/* eslint-disable @typescript-eslint/no-unused-vars */
function copyToClickBoard(id) {
  const content = document.getElementById(id).textContent;

  console.log(content);

  navigator.clipboard
    .writeText(content)
    .then(() => {
      console.log("Text copied to clipboard...");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
}
