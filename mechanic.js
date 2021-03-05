// loop1
const display1 = document.querySelector(".content1")
for(count1 = 0; count1 < 5; count1++)
{
    display1.innerHTML += ("I love homework" + "<br>")
}
// loop2
const display2 = document.querySelector(".content2")
for(count2 = 0; count2 < 5; count2++)
{
    display2.innerHTML += (count2 + "<br>")
}
// loop3
const display3 = document.querySelector(".content3")
for(count3 = 15; count3 < 31; count3++)
{
    if(count3%3 == 0)
    {
        display3.innerHTML += (count3 + "<br>")
    }
}
// loop4
const display4 = document.querySelector(".content4")
for(count4 = 1; count4 <= 4; count4++)
{
    for(count5 = 1; count5 <=5; count5++)
    {
        display4.innerHTML += "⬜"
    }
    display4.innerHTML += "<br>"
}
// loop5
const display5 = document.querySelector(".content5")
for(count6 = 1; count6 <= 7; count6++)
{
    for(count7 = 1; count7 <= count6; count7++)
    {
        display5.innerHTML += "🦴"
    }
    display5.innerHTML += "<br>"
}
// loop6
const display6 = document.querySelector(".content6")
for(count8 = 1; count8 <= 7; count8++)
{
    for(count9 = 1; count9 <= (7-count8); count9++)
    {
        display6.innerHTML += "~"
    }
    for(count10 = 1; count10 <= count8; count10++)
    {
        display6.innerHTML += "🦴"
    }
    display6.innerHTML += "<br>"
}
// loop7
const display7 = document.querySelector(".content7")
for(count11 = 1; count11 <= 5; count11++)
{
    for(count12 = 1; count12 <= count11; count12++)
    {
        for(count13 = 1; count13 <= count12; count13++)
        {
            display7.innerHTML += "🦴"
        }
        display7.innerHTML += "<br>"
    }
    display7.innerHTML += "<br>"
}

