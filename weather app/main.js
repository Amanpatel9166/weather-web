var inputvalue=document.querySelector('#cityinput')
var btn =document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip =document.querySelector('#description')
var temp = document.querySelector('temp')
var wind = document.querySelector('#wind')
apik='90f8a6c3949ebee05af621a09601a396'
function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
    {
        var nameval=data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var wndspeed = data['wind']['speed']
    }
    )
})