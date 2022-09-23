const Guitarra = require("./Guitarra");
const Guitarrista = require("./Guitarrista")

const guitarra1 = new Guitarra("verde", "limpio", "guitarra")
const guitarra2 = new Guitarra("azul", "distorsion", "guitarra2")
const fulano = new Guitarrista("fulano", 95949008, 14, "blues", guitarra1)


fulano.setNombreGuitarrista("fulano")

console.log ("el nombre del guitarrista es " + fulano.getNombreGuitarrista())

guitarra1.setNombreGuitarra("guitarra1")
fulano.setNombreGuitarrista("fulano");
fulano.agarraUnaGuitarra(guitarra1)

console.log ("el nombre de la guitarra 1 es " + guitarra1.getNombreGuitarra())
console.log("-------------")
console.log (fulano.getNombreGuitarrista() + " está usando " + fulano.getGuitarraEnUso().getNombreGuitarra())

fulano.agarraUnaGuitarra(guitarra2)
console.log (fulano.getNombreGuitarrista() + " está usando " + fulano.getGuitarraEnUso().getNombreGuitarra())

fulano.tocarMuyFuerte()
fulano.tocarMuyFuerte()
fulano.tocarMuyFuerte()