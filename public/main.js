const search = document.querySelector(".submitBtn");

search.addEventListener("click", getCharResults);

async function getCharResults() {
  const character = document.querySelector(".search").value;
  try {
    console.log(character);
    const res = await fetch("/getCharResults", {
      method: "get",
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error(err);
  }
}
