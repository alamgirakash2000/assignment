
// Function to convert Feet to Mile
function feetToMile(feet){
    if(typeof feet==='number' && feet>=0){
        var mile=feet/5280                 // 1 Mile = 5280 Feet 
        return mile.toFixed(2)
    }else{
        return "Value of 'feet' must be a positive number"
    }
}

/* Function to Calcutate the total required wood in Cubic feet
   where, 
          1 chair= 1 cubic feet
          1 table= 3 cubic feet
          1 bed= 5 cubic feet
*/
function woodCalculator(chair,table,bed){
    if((typeof table==='number' && table>=0) && (typeof chair==='number' && chair>=0) && (typeof bed==='number' && bed>=0)){

        return chair*1 + table*3 + bed*5

    }else{
        return "Values must be positive numbers"
    }
}

/* A Function to calculate the required number of bricks for a building
   where we need 1000 bricks for per feet height and the heights of per storey are--
       1-10 storied   = 15 feet
       11-20 storied  = 12 feet
       >20 storied    = 10 feet
*/
function brickCalculator(storied){
    if(typeof storied==='number' && storied>0){
    
         if(storied<=10){
             return storied*15*1000
         }else if(storied<=20){
             return (10*15 + (storied-10)*12)*1000
         }else if(storied>20){
             return (10*15 + 10*12 + (storied-20)*10)*1000
         }

    }else{
        return "Value of 'storied' must be a positive integer"
    }
}

// A function that return a name whice has the minimum length from an array
function tinyFriend(friends){
    if(friends.length===0){
        return 'This is an empty array'
    }else{
        var tinyFriend =friends[0]
        var minLength=friends[0].length
        for(var i=0; i<friends.length; i++){
            if(friends[i].length < minLength){
                minLength=friends[i].length
                tinyFriend = friends[i]
            }
        }
    }
    return tinyFriend
}