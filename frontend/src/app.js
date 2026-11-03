function renderApp(root) {
  let count = 0;

  root.innerHTML = `
    <h1>Git Lab 3</h1>
    <button id="counter">Clicked 0 times</button>
  `;

  const button = root.querySelector("#counter");
  button.addEventListener("click", () => {
    count++;
    button.textContent = `Clicked ${count} times`;
  });
}
