//Crea un archivo llamado fechas.js que contenga las siguientes líneas


//- La fecha de hoy
const fecha=new Date()
console.log(fecha)

//- La fecha de tu nacimiento
const fecha2= new Date("december 26,2003 12:15:15")

console.log(fecha2)
//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

console.log(fecha>fecha2)
//- Una variable que contenga el día de tu nacimiento
console.log(fecha2.getDate())
//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

console.log(fecha2.getMonth()+1)
//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
console.log(fecha2.getFullYear())
