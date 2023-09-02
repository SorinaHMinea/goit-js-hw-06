const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const listElem = document.querySelector("ul");

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");

  li.innerText = ingredient;
  listElem.append(li);
});

listElem.classList.add("item");
