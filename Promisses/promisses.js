const conX = () => "Acesso à con x efetuado com sucesso!";

const conY = () => "Acesso à con Y efetuado com sucesso!";

const pAcesso1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(conX());       
    }, 1000);
    setTimeout(() => {
        reject('Acesso 1 falhou');      
    }, 2000);    
})

const pAcesso2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(conY());
    }, 3000);
    setTimeout(() => {
        reject('Acesso 2 falhou');      
    }, 4000);
})


Promise.all([pAcesso1, pAcesso2])
    .then(result =>{
        if(result) console.log("Acessos efetuados com sucesso!");
    }).catch(err=>{
        console.log(err);
    })
