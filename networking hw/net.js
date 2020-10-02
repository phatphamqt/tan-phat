// ////IMPLEMENT AN OFFLINE RANDOM QUOTE

// const url = "https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json";
// let dat = []

// //GET DATA
// async function getData(){
//     const response = await fetch(url)
//     data = await response.json()
//     console.log(data)
//     console.log(create(data))

//     //ADD EVENT LISTENER FOR BUTTON
//     btn.addEventListener('click',function(){
//         let rd = create(data)[Math.floor(Math.random()*create(data).length)]
//         quote.insertAdjacentHTML('beforeend',`<p>${rd.Text}</p> \n<p>${rd.Author}</p>`)
//     })
// }

// getData(url)


// //SELECTOR

// let btn = document.getElementById("btn")
// let quote=document.getElementById("quote")


// //???
// function create(list){
//     return list.map(function(quote){
    
//         return{
//         Text:    quote.quoteText,
//         Author:  quote.quoteAuthor
//         }
//     })
// }

//

var timesheetData=[
    {
        project: "Learn front-end",
        task: "Learn HTML",
        timespent: "6",
    },
    {
        project: "Learn front-end",
        task: "Learn CSS",
        timespent: "8",
    },
    {
        project: "Learn front-end",
        task: "Learn Js Variables and data types",
        timespent: "6",
    },
    {
        project: "Learn git",
        task: "Learn git basics",
        timespent: "2",
    }
]


let tab=document.getElementById("tab")
for(i=0;i<timesheetData.length;i++){
    tab.insertAdjacentHTML("beforeend",
    `<tr id="${i+1}">
    <td class="project" id="pj${i+1}">${timesheetData[i].project}</td>
    <td class="task" id="task${i+1}" >${timesheetData[i].task}</td>
    <td class="time"id="time${i+1}" >${timesheetData[i].timespent}</td>
    <td><button class="butt">X</button> <button class="up" >U</button></td>
    </tr>`)
}


console.log(tab)
let newitem={}

let newpj=document.getElementById("pj")
let newt=document.getElementById("t")
let newtim=document.getElementById("tim")
let button=document.getElementById("bttn")
let sheet=timesheetData.length
let update=document.getElementById("update")
update.style.visibility="hidden";
//BUTTON ADD TASK
button.addEventListener('click',function(){
    newitem.project=`${pj.value}`
    newitem.task=`${t.value}`
    newitem.timespent=`${tim.value}`
    timesheetData.push(newitem)
    console.log(timesheetData)
    let i = timesheetData.length
    tab.insertAdjacentHTML("beforeend",
    `<tr id="${i+1}">
    <td class="project">${timesheetData[sheet].project}</td>
    <td class="task">${timesheetData[sheet].task}</td>
    <td class="time">${timesheetData[sheet].timespent}</td>
    <td><button class="butt">X</button> <button class="up">U</button></td>
    </tr>`)
    for(i=0;i<window.delete.length;i++){
        window.delete[i].addEventListener('click',function(e){
            e.target.parentElement.parentElement.remove();        
        })    
    }
    
})
let head=document.getElementById("head")
head.insertAdjacentHTML("beforeend",` <th>Actions</th>`)
//BUTTON DELETE TASK
window.delete=document.getElementsByClassName("butt")

for(i=0;i<window.delete.length;i++){
    window.delete[i].addEventListener('click',function(e){
        e.target.parentElement.parentElement.remove();        
    })    
}
//BUTTON CLEAR TASK
clear.addEventListener('click',function(){
    newpj.value = "";
    newt.value = "";
    newtim.value = "";
})

//BUTTON UPDATE TASK
function upd(){ 
let up = document.getElementsByClassName("up")
let clear = document.getElementById("clear")

for(i=0;i<up.length;i++){
    up[i].addEventListener('click',function(e){
        button.style.visibility="hidden";
        console.log(e.target.parentElement.parentElement)
        let x =e.target.parentElement.parentElement.id
        newpj.value = tab.rows[x].cells[0].innerHTML
        newt.value = tab.rows[x].cells[1].innerHTML
        newtim.textContent = tab.rows[x].cells[2].innerHTML
        
        update.style.visibility="visible";
        update.addEventListener('click',function(){
            tab.rows[x].cells[0].innerHTML = newpj.value
            tab.rows[x].cells[1].innerHTML = newt.value
            tab.rows[x].cells[2].innerHTML = newtim.value
            update.style.visibility="hidden"
            button.style.visibility="visible"
        })
    })
}

}

upd()