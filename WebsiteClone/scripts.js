async function show() {
    let input = document.querySelector("input");
    let value = input.value;

    let apiKey = "d_IMD2e6asRHPfCx5sQf8dqNwdGuUEEYMPPY0R_4LAE";

    let url = `https://api.unsplash.com/search/photos?query=${value}&per_page=30&client_id=${apiKey}`;


    let data = await fetch(url);


    let response = await data.json();

    console.log(response);


    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // clear previous search

    response.results.forEach((photo) => {
        let card = document.createElement("div");

        let img = document.createElement("img");
        img.src = photo.urls.small;

        let name = document.createElement("div");
        name.innerText = photo.user.name;
        name.classList.add("photo-name");

        card.appendChild(img);
        card.appendChild(name);

        resultsDiv.appendChild(card);
    });
}

async function display() {


    const imageurl = ["https://images.unsplash.com/photo-1648235692910-947cb90ddd97?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
        " https://images.unsplash.com/photo-1767623356286-4e22875c0a74?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ", "https://images.unsplash.com/photo-1637430308606-86576d8fef3c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1682001971734-85b0bdbbb358?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", " https://images.unsplash.com/photo-1568345284020-590abc9390d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1492112007959-c35ae067c37b?q=80&w=684&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        , "https://images.unsplash.com/photo-1703688829445-1eff11545108?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1549654917-9ddb6fed998f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1639452148691-2c92c8390017?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];



    let data = document.getElementById("default-image");
    imageurl.forEach((url) => {
        let defaultimg = document.createElement("img");

        defaultimg.src = url;
        defaultimg.alt = "Default Image";

        data.appendChild(defaultimg)
    })
}
display();