const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "c0f4b40f836f69420f6281c4a0b9ca24"

const caixa = document.querySelector(".caixa"); 
const pesquisa = document.querySelector(".pesquisa input");
const pesquisaBotao = document.querySelector(".pesquisa button");
const iconeClima= document.querySelector(".icone-clima")


async function checkWeather(cidade){
    const response = await fetch(apiUrl+ cidade +`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".cidade").innerHTML = data.name;
    document.querySelector(".temperatura").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".vento").innerHTML = data.wind.speed + "Km/h";

    if(data.weather[0].main == "Clouds"){
        iconeClima.src = "imagens/nuvens.png";
        caixa.style.setProperty("background", "linear-gradient(70deg, #999c64, #eddb11)", "important");
        caixa.style.setProperty("box-shadow", "0px 10px 30px #999c64", "important");
    }

    else if(data.weather[0].main == "Clear"){
        iconeClima.src = "imagens/sol.png";
        caixa.style.setProperty("background", "linear-gradient(70deg, #e6960e, #d62222)", "important");
        caixa.style.setProperty("box-shadow", "0px 10px 30px #e6960e", "important");

    }
    else if(data.weather[0].main == "Rain"){
        iconeClima.src = "imagens/chuva.png";
        caixa.style.setProperty("background", "linear-gradient(70deg, #38aae8, #1c1fe6)", "important");
        caixa.style.setProperty("box-shadow", "0px 10px 30px #38aae8", "important");
    }
    else if(data.weather[0].main == "Drizzle"){
        iconeClima.src = "imagens/garoa.png";
        caixa.style.setProperty("background", "linear-gradient(70deg, #e8d638, #1c1fe6)", "important");
        caixa.style.setProperty("box-shadow", "0px 10px 30px #e8d638", "important");
    }
    else if(data.weather[0].main == "Mist"){
        iconeClima.src = "imagens/nublado.png";
        caixa.style.setProperty("background", "linear-gradient(70deg, #1932bf, #9ca5db)", "important");
        caixa.style.setProperty("box-shadow", "0px 10px 30px #1932bf", "important");
    }

}

pesquisaBotao.addEventListener("click", ()=>{
    checkWeather(pesquisa.value);
});

