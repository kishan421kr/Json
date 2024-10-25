async function run(){
    let data = await fetch('http://localhost:4000/comics');
    let response =await data.json();
    console.log(data);
    console.log(response);

    let selecttable = document.querySelector('#cardsection');

    selecttable.innerHTML = response.map((items)=>`
    <div id="cards">
            <div>
                <img src="${items.img}" alt=""> <br>
                ${items.name} <br>
                <span>${items.year}</span>
            </div>
        </div>
    
    `).join(" ")
}