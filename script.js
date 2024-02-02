let key = '45669db964054b2e487eb9eb9bb108ad'

function printHome(dados){
    console.log(dados)
    document.querySelector('.city').innerHTML = `${dados.name}`
    document.querySelector('.graus').innerHTML = `${Math.floor(dados.main.temp)} ºC` 
    document.querySelector('.tempo').innerHTML = `${dados.weather[0].description}`
    document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector('.umidade').innerHTML = `${dados.main.humidity}%`

    const icones = () => {
        if(dados.weather[0].icon == "10n"){
            return   document.querySelector('body').style.backgroundImage = 'url(https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
            }else if(dados.weather[0].icon == "02d"){
                return   document.querySelector('body').style.backgroundImage = 'url(https://images.unsplash.com/photo-1498496294664-d9372eb521f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
            }else if(dados.weather[0].icon == "04d"){
                return   document.querySelector('body').style.backgroundImage = 'url(https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1502&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
            }else if(dados.weather[0].icon == "01d"){
                return   document.querySelector('body').style.backgroundImage = 'url(https://images.unsplash.com/photo-1453997713495-a541a4d5d81a?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
            }
            else{
               return document.querySelector('body').style.backgroundImage = 'url(https://images.unsplash.com/photo-1548684486-f61d163b2f6a?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'

        }
    }
    icones()
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    key + 
    "&lang=pt_br" +
    "&units=metric"
    ).then(resposta => resposta.json())

    printHome(dados)
   
}

function clickBtn(){

    let cidade = document.querySelector('.input').value

    console.log(cidade)

    buscarCidade(cidade)
}