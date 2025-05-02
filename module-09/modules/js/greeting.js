// export default function greeting(name = "", selector = "") {
function greeting(name = "", selector = "") {
  const element = document.querySelector(selector);

  if (!element) {
    alert("❌ Invalid selector");
    return;
  }

  let counter = 800;
  let text = "Hello "

  for (let i = 0; i < name.length; i++) {
    setTimeout(() => {
      element.innerHTML = text += name[i];
    }, counter += 200);
  }
}

export default greeting;
