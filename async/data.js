async function run() {
    let data =await fetch('http://localhost:4000/product') ;
    let response =await data.json();
    console.log(data);
    console.log(response);

    let selecttable = document.querySelector('#tabledata');

    selecttable.innerHTML = response.map((items)=>`
    <tr> 
        <td>${items.id}</td>    
        <td><img width="100px" src="${items.imageurl}"></td> 
        <td>${items.name}</td> 
        <td>${items.pname}</td> 
        <td>${items.pprice}</td> 
    </tr>
    `
    ).join(" ")
    
}