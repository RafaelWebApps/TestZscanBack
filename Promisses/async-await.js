const conX = () => "Acesso à api x efetuado com sucesso!";

const conY = () => "Acesso à api Y efetuado com sucesso!";

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

const Acessos = async()=>{
    try {
        const conA = await pAcesso1;
        const conB = await pAcesso2;
        if(conA && conB)
            console.log("Acessos efetuados com sucesso!");
    } catch (error) {
        console.log(error);
    }   
}

Acessos();