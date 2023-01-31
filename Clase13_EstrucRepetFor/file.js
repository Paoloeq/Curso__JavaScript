for (var contador =1; contador <= 7; ++contador)
{
    document.writeln("<p style = 'font-size: " + contador +"ex'>Tamaño de fuente de html5 " + contador + "ex</p>");
    
}

// Modificar la variable de control de  1 a 100 en incrementos de 1
for( var i = 1; i<=100; ++i ){}

// Modificar la variable de control de  100 a 1 en incrementos de -1 (decrementos de 1)
for( var i = 100; i>=1; --i ){}

// Modificar la variable de control de 7 a 77 en incrementos de 7
for( var i = 7; i<=77; i += 7 ){}

// Modificar la variable de control de  20 a 2 en incrementos de -2
for( var i = 20; i>=2; i -= 2 ){}

var suma=0;
for( var numero =2 ;numero<=100 ; numero+=2 ){
    suma+=numero;
}

document.writeln("La suma de los enteros pares " + "del 2 al 100 es " + suma);
