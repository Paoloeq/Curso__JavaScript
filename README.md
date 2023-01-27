# Curso de javascript
## Clase 1: Mostrar una linea de texto en js
```html
<html>
    <meta charset="utf-8">
    <title>El primer Programa en javascript</title>
    <script type="text/javascript">
        document.writeln("<h1>Bienvenido a la programación en JavaScript</h1>");
    </script>
</html>
```


## Clase 2: Mostrar una linea de texto coloreado
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Imprimir una linea con varias instrucciones</title>
    <script>
        document.write("<h1 style ='color:magenta'>" );
        document.write("Bienvenido a la Programación" + "En javasCript</h1>");
    </script>
</head>

</html>
```


## Clase 3: Mostrar una texto en un dialogo de alerta
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Imprimir varias lineas en un cuadro de dialogo</title>
    <script>
        window.alert("Bienvenido a\nla programación \nen javascript");
    </script>
</head>
    <body>
        <p>Recargue la página para ejecutar de nuevo la alerta</p>
    </body>
</html>
```


## Clase 4: Pagina de Bienvenidad Dinámica, comando Prompt

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uso de Cuadros Prompt</title>
    <script>
        var nombre;// cadena introducida por el usuario
        // lee el cuadro prompt como una cadena
        nombre = window.prompt("Escriba su nombre");
        document.writeln("<h1>Hola "+ nombre +", bienvenidoa a la proramación ; en JavaScript</h1>");
        
    </script>
</head>
<body>
    
</body>
</html>

```


## Clase 5: Suma de enteros, conversión a enteros

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Un programa de suma</title>
    <script>
        var primerNumero; // primera cadena introducida por el usuario
        var segundoNumero; // segunda cadena introducida por el usuario
        var numero1; // primer numero a sumar
        var numero2; // segundo numero a sumar
        var suma; // suma de numero1 y numero 2

        // lee el primer número del susuario como una cadena
        primerNumero =window.prompt("Escriba el primer número");

        // lee el segundo número del susuario como una cadena
        segundoNumero =window.prompt("Escriba el segundo número");

        // convierte los npumeros de cadenas a enteros

        numero1 = parseInt(primerNumero);
        numero2 = parseInt(segundoNumero);

        suma = numero1 +numero2; // suma de enteros
        //muestra ñlos resultados

        document.writeln("<h1>La suma es: "+ suma +"</h1>");

    </script>
</head>
<body>
    
</body>
</html>
```



## Clase 6: if and else, date

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uso de operadores racionales</title>
    <script>
        var nombre; // cadena introducida por el usuario
        var ahora = new Date(); // Fecha y hora actuales
        var hora = ahora.getHours(); // hora actual(0-23)
        
        //lee el nombre del cuadro indicador como una cadena
        nombre = window.prompt("Escriba su nombre");

        // determina si es mañana
        if (hora<12) {
            document.write("<h1>Buenos días ");
        }

        //determina si es la hora PM
        if (hora>=12) {
            //convierte el reloj de 12 horas
            hora = hora - 12;

            //determina si es antes de las 6 pm

            if ( hora < 6) {
                document.write("<h1>Buenas tardes ");
            }else{
                document.write("<h1>Buenas Noches ");
            }

        }

        document.writeln(nombre+", bienvenido a la programación en javascript");

    </script>
</head>
<body>
    
</body>
</html>
```
## Clase 7: Instrucción de repetición de while
While significa mientras, lo que nos da entender MIENTRAS si se cumple una determinada condición se hace la instrucción.
```js
var producto = 2;
while (producto <=1000)
    producto = 2*producto;
```

## Clase 8: Promedio de calificaciones con while
In this problem use while repeating structure, window.prompt and parseInt.

```html
<title>Programa del promedio de una clase</title>
    <script>
        var total=0;
        var contador=1;
        
        while (calificacion!=-1) {
                        
            calificacion =parseInt(window.prompt("Ingrese la siguiente calificación"));

            total=total+calificacion;
            
            contador+=1;
            
        }

        var promedio = total/10;
        document.writeln("<h1>El promedio de la clase es: "+ promedio+"</h1>");

    </script>
```

## Clase 9: Promedio de notas (while, if else, centinela -1)
Aqui se utiliza una repetición controlada por centinela, es decir Mientras las calificaciones no sean -1, el programa sigue iterando. 

```js
var total=0;
var contador=0;
var calificacion;
var promedio;

calificacion = parseInt( window.prompt("Ingrese una calificación entera, -1 para salir","0"));

while (calificacion!=-1) {
    total=total+calificacion;   
    contador+=1; 

    calificacion =parseInt(window.prompt("Ingrese la siguiente calificación, -1 para salir"));
            
}
        
if (contador != 0) {
    promedio = total/contador;
    document.writeln("<h1>El promedio de la clase es: "+ promedio+"</h1>");
}else{
    document.writeln("<h1>No se introdujeron calificaciones");
}

```

## Clase 10: Promedio de notas aprobados y desaprobados
Utilizando la estructura while 
```js
        var contadorAprobados =0;
        var contadorReprobados =0;
        var nota=0;
        var sumaAprobados=0;
        var sumaReprobados=0;
        var totalAlmunos=0;
        var promedio=0;
        
        while (nota!=-1){
            nota = parseInt(window.prompt("Ingrese una calificación entera, -1 para salir"));

            if(nota<=10){
                sumaAprobados+=nota;
                contadorAprobados+=1;
            }else{
                sumaReprobados+=nota;
                contadorReprobados+=1;
            }
        }

        totalAlmunos=contadorAprobados+contadorReprobados;
        promedio=(sumaAprobados+sumaReprobados)/totalAlmunos;

        document.writeln("<h1>El numero de aprobados es:"+ contadorAprobados+ "</h1>")
        document.writeln("<h1>El numero de reprobados es:"+ contadorReprobados+ "</h1>")
        document.writeln("<h1>El total de alumnos es:"+ totalAlmunos+ "</h1>")
        document.writeln("<h1>El promedio de notas de todos los alumnos es: "+ promedio+"</h1>")
```