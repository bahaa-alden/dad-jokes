let url = "https://icanhazdadjoke.com/";
let joke = document.querySelector("p");
let btn = document.querySelector(".container button");
btn.onclick = () => {
  fetcha(url);
};
async function fetcha(url) {
  try {
    let respon = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });
    console.log(respon);
    let data = await respon.json();
    joke.textContent = data.joke;
  } catch {}
}
