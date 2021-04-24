
function one(){
    var a=+prompt("Enter marks of computer")
    document.write("Your computer  marks are"+""+a+"<br>")
    document.write("<br>")
    var b= +prompt("Enter marks of math")
    document.write("Your math  marks are"+""+ b +"<br>")
    document.write("<br>")
    var c= +prompt("Enter marks of physics")
    document.write("Your physics  marks are"+""+ c +"<br>")
    document.write("<br>")
    var d= +prompt("Enter chemistry  marks")
    document.write("Your chemistry marks are"+""+ d +"<br>")
    var f = a+b+c+d
    document.write("<br>")
    return(f)
}
var acha = one()
alert(acha)
function perc(f) {
  var two =(f/400*100)
document.write("Your percentage is" +two)
}
perc(acha)