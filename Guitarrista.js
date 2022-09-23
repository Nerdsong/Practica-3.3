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

    setNombreGuitarrista(nuevoNombre){
        this.#nombre = nuevoNombre;
    }

    getNombreGuitarrista(){
        return this.#nombre;
    }

    setAniosDeExperiencia(anios){
        this.#aniosDeExperiencia = anios; 
    }

    getAniosDeExperiencia(){
        return this.#aniosDeExperiencia
    }

    setNuevoEstiloMusical(nuevoEstilo){
        this.#estilo = nuevoEstilo;
    }

    getEstiloMusical(){
        return this.#estilo;
    }


    getGuitarraEnUso(){
        return this.#guitarraEnUso;
    }

    /**
     * Esta función es un setter para el estado guitarraEnUso del Guitarrista
     * @param {Guitarra} guitarraAUsar 
     */
    agarraUnaGuitarra(guitarraAUsar){
        this.#guitarraEnUso = guitarraAUsar;
    }

    tocarMuyFuerte(){
        this.#guitarraEnUso.bajarVidaUtilCuerdas(30);
    }

}

module.exports = Guitarrista;
