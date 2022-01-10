const longElement = document.getElementById("render")

document.getElementById("submit").addEventListener("click", (e)=> {
    const url = document.getElementById("url").value;

fetch("https://api.shrtco.de/v2/shorten?url=" + url)
      .then((response) => response.json())
      .then((data) => {
        
        if (data.result.short_link) {
          
          longElement.textContent = data.result.short_link;
        }
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
    })