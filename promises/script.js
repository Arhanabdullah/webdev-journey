function getCheese(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const cheese = "cheese"
            resolve(cheese);
        },2000)

    })
    
}

function makeDough(cheese){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dough = cheese +"dough";
            resolve(dough);
        },2000)
    }) 
}

function makePizza(dough){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const pizza= dough+ "pizza";
            resolve(pizza);
            
        }, 2000)
    })
}

async function orderPizza(){
    const cheese= await getCheese()
    console.log("Here is the cheese", cheese);
    const dough= await makeDough(cheese)
    console.log("Here is the dough", dough);
    const pizza= await makePizza(dough)
    console.log("Here is the pizza", pizza);
}
orderPizza()
// getCheese()
//     .then((cheese)=>{
//     console.log("Here is the cheese", cheese);
//     return makeDough(cheese);   
// }).then((dough)=>{
//     console.log("Here is the dough", dough);
//     return makePizza(dough);
// }).then((pizza)=>{
//     console.log("Here is the pizza", pizza);
// }).catch((data)=>{
//     console.log("Error occured");
// }).finally(()=> {
//     console.log("Process Ended");
    
// })