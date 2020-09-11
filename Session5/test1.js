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
            for(let i=0;i<phone.length;i++){
                if(arrbrand.indexOf(phone[i].Brand===-1)){
                    arrbrand.push((i+1)+". "+phone[i].Brand)
                }
            }
                arrbrand.push((arrbrand.length+1)+". All products")
                

}
}
}
