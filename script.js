const nextQuoteBtn = document.querySelector(".nextQuote"),
  quote = document.querySelector(".quote-body .mainQuote"),
  author = document.querySelector("span.author");

// btns
const shareOnTwitter = document.querySelector(".shareOnTwitter"),
  copyToClipboard = document.querySelector(".copyToClipboard");

const url = "https://api.quotable.io/random";
const getQuote = async () => {
  nextQuoteBtn.innerText = "Loading ...";
  nextQuoteBtn.classList.add("active");
  const res = await fetch(url);
  const data = await res.json();
  quote.innerText = data.content;
  author.innerText = data.author;
  nextQuoteBtn.classList.remove("active");
  nextQuoteBtn.innerHTML = "Next Quote &gt;&gt;";
};

shareOnTwitter.addEventListener("click", () => {
  window.open(
    `https://twitter.com/intent/tweet?text=${quote.innerText}`,
    "_target"
  );
});

copyToClipboard.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(quote.innerText);
    alert("Successfully quote copied");
  } catch (err) {
    console.error("Failed to copy!", err.message);
  }
});

nextQuoteBtn.addEventListener("click", getQuote);
