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
    tab.insertAdjacentHTML("beforeend",`<tr><td>${timesheetData[i].project}</td>
    <td>${timesheetData[i].task}</td>
    <td>${timesheetData[i].timespent}</td></tr>`)
}

console.log(tab)
let newitem={}

let newpj=document.getElementById("pj")
let newt=document.getElementById("t")
let newtim=document.getElementById("tim")
let button=document.getElementById("bttn")
let sheet=timesheetData.length
button.addEventListener('click',function(){
    newitem.project=`${pj.value}`
    newitem.task=`${t.value}`
    newitem.timespent=`${tim.value}`
    timesheetData.push(newitem)
    console.log(timesheetData)
    tab.insertAdjacentHTML("beforeend",`<tr><td>${timesheetData[sheet].project}</td>
    <td>${timesheetData[sheet].task}</td>
    <td>${timesheetData[sheet].timespent}</td></tr>`)
})

