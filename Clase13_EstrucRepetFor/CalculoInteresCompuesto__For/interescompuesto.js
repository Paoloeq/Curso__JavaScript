var monto;
var principal=1000.00;
var tasa=0.05;

document.writeln("<table>");
document.writeln("<Caption>Cálculo del interés compuesto</caption>");
document.writeln("<thead> <tr> <th>Año</th> ");
            document.writeln("<th>Monto de Depósito</th>");
        document.writeln("<tr> </thead><tbody>");

for (var anio=1;anio <=10;++anio){
    monto =principal*Math.pow(1.0+tasa,anio);

    if (anio % 2!==0) {
        document.writeln("<tr class='filaimpar'><td>"+anio+"</td><td>"+monto.toFixed(2)+"</td></tr>");
    }else{
        document.writeln("<tr><td>"+anio+"</td><td>"+monto.toFixed(2)+"</td></tr>");
    }
}

document.writeln("</tbody></table>");
