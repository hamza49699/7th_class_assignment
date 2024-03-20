//class7 assignment
interface brandTypes {
    no1:string;
        no2:string;
        no3:string;
             
}
type info_of_product = {
    product: string;
    brandname: string;
    sizeNo: number;
    isForMale: boolean;
    colors:string[];
    localbrands:brandTypes   
    };
let info_of_product = {                    
    product: "Shoes",
    sizeNo:7,
    isForMale: true,
    colors:["Black","white","red","yellow"],
    localbrands: {
        no1:"Bata",
        no2:"Stylo",
        no3:"Service",
          
    }   
}


var importedbrands: brandTypes= {
    no1:"Nike",
    no2:"Adidas",
    no3:"Puma",
}


console.log(info_of_product);
console.log(importedbrands);