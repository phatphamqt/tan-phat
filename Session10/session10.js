// function diCho(tacDuong) {
//     return new Promise (function(resolve,reject){
//         console.log("dang di cho")
//         if(tacDuong == true){
//             reject("Khong mua duoc me oi")
//         } else {
//             resolve("Thit heo")
//         }
//     })
// }




// diCho(false).then(function(item){
//     console.log(item)
// }).catch(function(err){
//     console.log(err)
// })

const url = "https://5f71cb3c64a3720016e60e83.mockapi.io/api/members";
// fetch(url).then(function(item){
//     return item.json()
// }).then(function(data){
//     console.log(data)
// }).catch(function(err){
//     console.log(err)
// })


// GET DATA
async function getData(){
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    console.log(createMembers(data))
    member.insertAdjacentHTML('beforeend',createMembers(data).join(""))
}

getData()
// POST DATA
async function postData(data){
    await fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    })

}

function createMembers(listMember){
    return listMember.map(function(member){
        console.log(member)
        return `
        <div class="members">
            <h1>${member.name}</h1>
            <h2>${member.role}</h2>
        </div>
        `
    })
}


// // SELECTOR

const member = document.getElementById("members")

// // CLICK
 
// btn.addEventListener('click', function(){
//     const name= ip.value
//     const role2= role.value
//     console.log(name,role2)
//     let data = {
//         name: name,
//         role: role2
//     }
//     postData(data)    
// })

