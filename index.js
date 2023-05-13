const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  try {
    await PromiseAPI1();
    await PromiseAPI2();
    await PromiseAPI3();
  } catch (error) {
    console.error(error);
  }
});

function PromiseAPI1() {
    let heading1=document.getElementById('heading1')
    let heading11=document.createElement('h2')
    heading11.innerText="Table-1 "
    heading1.appendChild(heading11)
  return new Promise(resolve => {
    setTimeout(async () => {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      const resultDiv = document.getElementById('container_1');
      
      console.log(data.posts);
      data.posts.forEach(el => {
        // console.log(element.id)
        
        let tr = document.createElement('tr')
       let td = document.createElement('td');
       td.innerHTML = el.id
       let td2 = document.createElement('td');
       td2.innerHTML = el.title;
      // resultDiv.append(tr,td);
      let td3 = document.createElement('td');
       td3.innerHTML = el.body;
       resultDiv.append(tr,td,td2,td3)
      });
     
 
      resolve(true);
    }, 1000);
  });
}

function PromiseAPI2() {
    let heading1=document.getElementById('heading2')
    let heading11=document.createElement('h2')
    heading11.innerText="Table-2 "
    heading1.appendChild(heading11)
  return new Promise(resolve => {
    setTimeout(async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
   
    const resultDiv = document.getElementById('container_2');
   
   
    console.log(data.products)
    data.products.forEach(el => {
       
        
        let tr = document.createElement('tr')
       
       let td = document.createElement('td');
       td.innerHTML = el.id
       let td2 = document.createElement('td');
       td2.innerHTML = el.title;
    
      let td3 = document.createElement('td');
       td3.innerHTML = el.description;
       let td4 = document.createElement('td');
      let thumbnail= document.createElement('img');
      thumbnail.src=el.images;
      thumbnail.width = '30';
      thumbnail.height = '30';
      td4.appendChild(thumbnail)
       resultDiv.append(tr,td,td2,td3,td4)
      });
      resolve(true);
    
    }, 2000);
  });
}

function PromiseAPI3() {
    let heading1=document.getElementById('heading3')
    let heading11=document.createElement('h2')
    heading11.innerText="Table-3 "
    heading1.appendChild(heading11)
  return new Promise(resolve => {
    setTimeout(async () => {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
 
    console.log(data)
    const resultDiv = document.getElementById('container_3');


    data.todos.forEach(el => {
     
        
        let tr = document.createElement('tr')
       let td = document.createElement('td');
       td.innerHTML = el.id
       let td2 = document.createElement('td');
       td2.innerHTML = el.todo;
    
      let td3 = document.createElement('td');
       td3.innerHTML = el.completed;
       let td4 = document.createElement('td');
       td4.innerHTML = el.userId;
       resultDiv.append(tr,td,td2,td3,td4)
      });
      resolve(true);
    }, 3000);
  });
}