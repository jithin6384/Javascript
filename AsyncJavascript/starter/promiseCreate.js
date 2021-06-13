const lotteryPrice = new Promise(function(resolve, reject){
    console.log(`lottery draw is happening`)
    setTimeout(function(){
        if(Math.random() > 0.5){
            resolve(`you won`);
        }else{
            reject(`You lost`)
        }
    },2000)
    
})

lotteryPrice.then(res => console.log(res)).catch(err => console.error(err))