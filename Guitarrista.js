const Guitarra = require("./Guitarra");

class Guitarrista{
    #nombre = "nombre por default";
    #dni = "número de dni";
    #aniosDeExperiencia = "anios de experiencia" ;
    #estilo = "metal";
    #guitarraEnUso = "ninguna";

    /**
     * 
     * @param {String} nombre nombre del guitarrista nuevo    
     * @param {Number} dni documento del guitarrista nuevo
     * @param {Number} aniosDeExperiencia experiencia en años del guitarrista nuevo
     * @param {String} estilo estilo musical
     * @param {Guitarra} guitarraEnUso guitarra en uso por el guitarrista
     */

    constructor(nombre, dni, aniosDeExperiencia, estilo, guitarraEnUso){
        this.#nombre = nombre;
        this.#dni = dni;
        this.#aniosDeExperiencia = aniosDeExperiencia;
        this.#estilo = estilo;
        this.#guitarraEnUso = guitarraEnUso;
    }

    getEstiloMusical(){
        return this.#estilo;
    }

    setNombreGuitarrista(nuevoNombre){
        this.#nombre = nuevoNombre;
    }

    getNombreGuitarrista(){
        return this.#nombre;
    }

    getGuitarraEnUso(){
        return this.#guitarraEnUso;
    }

    agarraUnaGuitarra(guitarraAUsar){
        this.#guitarraEnUso = guitarraAUsar;
    }

    tocarMuyFuerte(){
        this.#guitarraEnUso.bajarVidaUtilCuerdas(30);
    }

}

module.exports = Guitarrista;
