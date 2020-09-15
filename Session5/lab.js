let phone = 
   [
	{
		Name:'Xiaomi portable charger 20000mah',
		Brand: 'Xiaomi',
		Price: '428',
		Color:['White','Blue','Black','Green','Yellow'] 
	},
        {
		Name:'VSmart Active 1',
		Brand: 'VSmart',
		Price: '5487',
		Color:['White','Black','Red','Yellow'] 
	},
        {
		Name:'IPhone X',
		Brand: 'Apple',
		Price: '21490',
		Color:['White','Pink','Gray','Green','Yellow'] 
	},
        {
		Name:'Samsung Galaxy A9',
		Brand: 'Samsung',
		Price: '8490',
		Color:['White','Blue','Black','Green','Yellow','Red'] 
	},
        {
        Name:'Samsung Galaxy j3',
        Brand: 'Samsung',
        Price: '5090',
        Color:['White','Blue'] 
    }
    ]

   let count=0
   var idea=[]
   let newp=[]
   let arrbrand=[]
 while(true){ 
   let step1=prompt("Hello, who are you? Please enter a number as below \n 1.Customer \n 2.Admin \n 3.Cancel")  
   if(step1==1){
        let step2=prompt("Wellcome to our store! Please enter a number as below! \n 1.Buy a product \n 2.Support \n 3.Cancel")
        if(step2==1){

<<<<<<< HEAD
            
         
            for(let i=0;i<phone.length;i++){
                if(arrbrand.indexOf(phone[i].Brand===-1)){
                    arrbrand.push(phone[i].Brand+"\n")
                    console.log(arrbrand.indexOf(phone[i].Brand))
                    console.log(arrbrand)
                }
            }
                arrbrand.push("All products")

            let step3=prompt("we have a lot of brands as below:\n"+arrbrand +"\n Enter brand or All" )

            if(step3!="all"){
            let step3a=[]
            for(x=0;x<phone.length;x++){
                if(phone[x].Brand==step3){
                    step3a.push(x)
                    }
                    }
                    let step3b=[]
               
                    for(let i=0;i<step3a.length;i++){ 
                    step3b.push((i+1)+". "+ phone[step3a[i]].Name+"\n Price: "+phone[step3a[i]].Price+"\n Color: "+phone[step3a[i]].Color+"\n------------------\n")
                    }
                    
                    console.log(step3b)

                    step4=Number(prompt("this is the product: \n"+ step3b + "\n What do you prefer? "))
                        let rdcolor=Math.floor(Math.random()*phone[step3a[step4-1]].Color.length)
                        let step4a=confirm("Name. "+ phone[step3a[step4-1]].Name +"\n Price: "+ phone[step3a[step4-1]].Price +"\n Color: "+ phone[step3a[step4-1]].Color[rdcolor] +"\n Do you want to choose color?")
                        let arrcolor=[]
                        for(let j=0;j<phone[step4-1].Color.length;j++){
                            arrcolor.push((j+1)+". "+ phone[step4-1].Color[j]+"\n")
                        }
                        if(step4a==true){ 
                        let step5=Number(prompt("Select your color with number as below: \n"+ arrcolor ))
                        let step6=confirm(phone[step3a[step4-1]].Brand+"\n"+phone[step3a[step4-1]].Name +"\n"+phone[step3a[step4-1]].Price +"\n"+phone[step3a[step4-1]].Color[step5-1] +"\n Do you want to buy it?")
                        if(step6==true){
                            alert("Congrats! you just bought a new phone") 
                           }
                           }
                           }
                            if(step3=="all"){
                            for(let x in phone){
                            console.log("Brand: "+ phone[x].Brand + "\n Name: "+ phone[x].Name + "\n Color: "+ phone[x].Color + "\n Price: "+ phone[x].Price+ "\n------------------------------------\n")
                        }  
                    }
        }
        if(step2==2){
            let support=prompt("Enter your idea at below, we will reply to you as soon as possible")
            idea.push(support)
            console.log(idea)
        }
        if(step2==3){
            break;
        }
        count++
    }
    if(step1==2){
        let admin1=prompt("1. Add new phone\n 2. Delete phone\n 3. Update phone\n 4.View customer's questions\n 5.Cancel")
        if(admin1==4){
            if(idea.length>0){
                alert(idea)
            } else{
                alert("There is no idea for you!")
            }
        }
        else if(admin1==1){
            admin2a=prompt("Input new phone brand, name, price, color seperated by commas (,): ")
            let admin2b=admin2a.split(",")
            newp.Brand=admin2b[0]
            newp.Name=admin2b[1]
            newp.Price=admin2b[2]
            newp.Color=[]
            newp.Color.push(admin2b[3].split(" "))
            phone.push(newp)
            
            
            
        }
    }
    }
         
            

       
     
=======
//MINH xin chao
>>>>>>> 6dfb1dc97d83d081bc6cf8c1783ee2e84b1b23d1
