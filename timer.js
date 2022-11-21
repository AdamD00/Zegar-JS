function Odliczanie()
{
var dzisiaj = new Date();

var dzien = dzisiaj.getDate();
var miesiac = dzisiaj.getMonth()+1;
var rok = dzisiaj.getFullYear();

var godz = dzisiaj.getHours();
if(godz<10) godz = "0"+godz;

var min = dzisiaj.getMinutes();
if(min<10) min = "0"+min;

var sek = dzisiaj.getSeconds();
if(sek<10) sek = "0"+sek;

document.getElementById("zegar").innerHTML = dzien+"/"+miesiac+"/"+rok +"|"+ godz+":"+min+":"+sek;

setTimeout("Odliczanie()",1000);
}