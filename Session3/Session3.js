
let item=["t-shirt","sweater","pant","pullover","jacket","jean","suit","shoes"]
let user=prompt("what you want to do? C R U D")
if(user=="r"){
    console.log(item)
}
 if (user=="c"){
    let create= confirm("Do you want to create new item?")
    while(create==true){
        let citem=prompt("Enter item here:")
        item.push(citem)
        console.log(item)
        user=prompt("what you want to do next? C R U D")
        break;
    }
}
if(user=="u"){
    for(i=0;i<item.length;i++){
        console.log(i,item[i])
    }
    let update=prompt("what item you want to update? 1 2 3 4")
    console.log(item[update])
    let uitem=prompt("Enter new item:")
    item[update]=uitem
    console.log(item)
}
if(user=="d"){
    for(i=0;i<item.length;i++){
        console.log(i,item[i])
    }
    let del=prompt("what do you want to delete? 1 2 3 4")
    console.log(item[del])
    let conf=confirm(`Do you want to delete item ${item[del]} ?`)
    while(conf==true){
        item.splice(del,1);
        console.log(item)
        break;
    }
}
