function cifrarTrans(){
            var lista = obtenerClave()
            var textoOriginal = document.getElementById("texto2").value
            var textoCifrado = ""
            contador = 0
            var matriz = []
            while(contador<textoOriginal.length)
            {
                var fila = [textoOriginal[contador]]
                for( var j=0; j<4; j++)
                {
                    contador+=1
                    if(textoOriginal[contador]==" ")
                    {
                        fila.push("_")
                    }else if(textoOriginal[contador]!=undefined)
                    {
                        fila.push(textoOriginal[contador])
                    }
                }
                contador+=1
                matriz.push(fila)
                delete(fila)
            }
            contador=0
            console.log(matriz)
            var fila=0
            while(contador<textoOriginal.length)
            {
                for(var columna=0; columna<5; columna++)
                { 
                    if(matriz[fila][lista[columna]-1]!=undefined)
                    {
                        textoCifrado+=matriz[fila][lista[columna]-1]
                        contador+=1
                    } 
                }
                fila+=1
            }
            console.log(textoCifrado)
            document.getElementById("labelTrans").innerHTML = textoCifrado
            alert("La clave es : " + lista.toString() + ", Guárdala bien")
        }
