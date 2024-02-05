//Q1
var a = 10
var b = ++a
var c = ++b
var d = --c
var e = d
var f = e--
alert(a)
alert(b)
alert(c)
alert(d)
alert(e)
alert(f)
//Q2
var a2 = 2
var b2 = 1
//Q2 = ?

//Q3
var w = prompt("Enter your name?")+"Welcome"
alert(w)
//Q4
var t = prompt("Ënter a number")
if(t){
document.write(t+" "+"x 1"+" "+"="+" "+t*1)
document.write("<br><br>")
document.write(t+" "+"x 2"+" "+"="+" "+t*2)
document.write("<br><br>")
document.write(t+" "+"x 3"+" "+"="+" "+t*3)
document.write("<br><br>")
document.write(t+" "+"x 4"+" "+"="+" "+t*4)
document.write("<br><br>")
document.write(t+" "+"x 5"+" "+"="+" "+t*5)
document.write("<br><br>")
document.write(t+" "+"x 6"+" "+"="+" "+t*6)
document.write("<br><br>")
document.write(t+" "+"x 7"+" "+"="+" "+t*7)
document.write("<br><br>")
document.write(t+" "+"x 8"+" "+"="+" "+t*8)
document.write("<br><br>")
document.write(t+" "+"x 9"+" "+"="+" "+t*9)
document.write("<br><br>")
document.write(t+" "+"x 10"+" "+"="+" "+t*10)
}
else{
    document.write(5+" "+"x 1"+" "+"="+" "+5*1)
    document.write("<br><br>")
    document.write(5+" "+"x 2"+" "+"="+" "+5*2)
    document.write("<br><br>")
    document.write(5+" "+"x 3"+" "+"="+" "+5*3)
    document.write("<br><br>")
    document.write(5+" "+"x 4"+" "+"="+" "+5*4)
    document.write("<br><br>")
    document.write(5+" "+"x 5"+" "+"="+" "+5*5)
    document.write("<br><br>")
    document.write(5+" "+"x 6"+" "+"="+" "+5*6)
    document.write("<br><br>")
    document.write(5+" "+"x 7"+" "+"="+" "+5*7)
    document.write("<br><br>")
    document.write(5+" "+"x 8"+" "+"="+" "+5*8)
    document.write("<br><br>")
    document.write(5+" "+"x 9"+" "+"="+" "+5*9)
    document.write("<br><br>")
    document.write(5+" "+"x 10"+" "+"="+" "+5*10)
    document.write("<br><br>")
}

//Q5 A
var sub1 = prompt("Enter Subject 1")
var sub2 = prompt("Enter Subject 2")
var sub3 = prompt("Enter Subject 3")
var subt = 100
var u1 = prompt("Marks obtained in subject 1")
var u2 = prompt("Marks obtained in subject 2")
var u3 = prompt("Marks obtained in subject 3")
var y = sub1*100/100
var i = sub2*100/100
var o = sub3*100/100
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr>"+"<tr><td>"+sub1+"</td><td>"+subt+"</td><td>"+u1+"</td><td>"+u1*100/subt+" "+"%"+"</td></tr>"+"<tr><td>"+sub2+"</td><td>"+subt+"</td><td>"+u2+"</td><td>"+u2*100/subt+" "+"%"+"</td></tr>"+"<tr><td>"+sub3+"</td><td>"+subt+"</td><td>"+u3+"</td><td>"+u3*100/subt+" "+"%"+"</td></tr>"+"</table>")