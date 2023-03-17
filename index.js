function receivesAFunction(callback){
     callback()
}

function returnsANamedFunction(){
    return function named(){
        console.log("Scooter")
    }
}

function returnsAnAnonymousFunction() {
    return  function() {
        console.log("not Scooter")
    }
}





