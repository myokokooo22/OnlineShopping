let addbtns = document.querySelectorAll('.addtocart')
let lists = document.querySelector('.lists');
let carts = document.querySelector('.carts');
let productLists = document.querySelector('.product-lists');
const itemLists = [];
    
addbtns.forEach((addbtn)=>{
    console.log(addbtn)
    addbtn.addEventListener('click',(e)=>{
        let count = Number(carts.getAttribute('data-count'));
        carts.setAttribute('data-count',count +1);
      
       carts.classList.add('active')

       let price = e.target.parentNode.previousElementSibling;
       let name = e.target.parentNode.parentNode.childNodes[1];
       let imgs = e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].src;
      
        let cloneItemName = name.cloneNode(true);
        let clonePrice = price.cloneNode(true);
        // let cloneimgs = imgs.cloneNode(true)

       let createDiv = document.createElement('div');
       createDiv.classList.add('lists');
    //    console.log(createDiv)
       createDiv.innerHTML = `
       <div class="row">
       <div class="col-4">
          
       </div>
       <div class="col-4">
           <h5>${cloneItemName.innerText}</h5>
       </div>
       <div class="col-4">
           <span>$</span><span class="itemprice">${(clonePrice.innerText)}</span>
       </div>
      
   </div>
 </div>
       `;
    // lists.appendChild(cloneItemName);
    // lists.appendChild(clonePrice);
    // lists.appendChild(cloneimgs);

    lists.appendChild(createDiv);
    itemLists.push(createDiv);

    let pricedata = [];
    let priceClone = lists.querySelectorAll('.itemprice');
    priceClone.forEach((pcl)=>{
        let innerPrice = Number(pcl.innerText);
        // console.log(innerPrice)
        pricedata.push(innerPrice);

        let finalPrice = pricedata.reduce((prev,next)=>{
            return prev + next;
        },0);

        // console.log(finalPrice)

        let updateprice = document.getElementById('total');
        updateprice.textContent = finalPrice.toFixed(2);
     })
    });
   });