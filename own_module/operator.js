


const add=(a,b)=>{
    return (a+b)
}

const sub=(a,b)=>{
    return (a-b)
}

const name ="gm"

// casse 1
module.exports.add=add   // module.exports.<any name>= add
module.exports.sub=sub

// case 2

module.exports={add,sub} 
