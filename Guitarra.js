const Guitarrista = require("./Guitarrista")

class Guitarra{
    #color = "Rojo";
    #vidaUtilCuerdas = 100;
    #cuerdaRota = false;
    #sonido = "Limpio";
    #nombreGuitarra = "ninguno";

    /**
     * 
     * @param {String} color: color nuevo
     * @param {String} sonido: sonido nuevo
     * @param {String} nombreGuitarra: nombre de guitarra nueva
     */

    constructor(color,sonido,nombreGuitarra){
        this.#color = color;
        this.#sonido = sonido;
        this.#nombreGuitarra= nombreGuitarra;
    }

    bajarVidaUtilCuerdas(daño){
        this.#vidaUtilCuerdas = this.#vidaUtilCuerdas - daño;
        if (this.#vidaUtilCuerdas < 30){
            this.#cuerdaRota = true;
        }
        if (this.#cuerdaRota == true){
            console.log("Se rompió una cuerda de " + this.#nombreGuitarra) 
        }
    }

    setNombreGuitarra(nuevoNombre){
        this.#nombreGuitarra = nuevoNombre;
    }

    getNombreGuitarra(){
        return this.#nombreGuitarra;
    }


    setSonido(nuevoSonido){
        this.#sonido = nuevoSonido;
    }

    getColorGuitarra(){
        return this.#color;
    }
    
    setColorGuitarra(nuevoColor){
        this.#color = nuevoColor;
    }
}

module.exports = Guitarra;