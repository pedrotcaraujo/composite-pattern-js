var City = function (title, id, className) {
    this.children = [];
    this.element = document.createElement('div');
    var h2 = document.createElement('h2');

    this.element.id = id;
    if (className) this.element.className = className;

    h2.textContent = title;
    this.element.appendChild(h2);

}

City.prototype = {
    add: function (child) {
        this.children.push(child);
        this.element.appendChild(child.getElement());
    },

    remove: function (child) {    
        for (var node, i = 0; node = this.getChild(i); i++) {
            if (node == child) {
                this.children.splice(i, 1);
                this.element.removeChild(child.getElement());
                return true;
            }
        }

        return false;
    },

    getChild: function (i) {
        return this.children[i];
    },
     
    getElement: function () {
        return this.element;
    }
}

var cities = new City('', 'cities');
var saoPaulo = new City('São Paulo', 'sao-paulo');
var rioDeJaneiro = new City('Rio de Janeiro', 'rio-de-janeiro');
var liberdade = new City('Liberdade', 'liberdade');
var ipiranga = new City('Ipiranga', 'ipiranga');
var lapa = new City('Lapa', 'lapa');
var leblon = new City('Leblon', 'leblon');
var casa1 = new City('Casa 1', 'casa-1', 'composite-house');
var casa2 = new City('Casa 2', 'casa-2', 'composite-house');
var casa3 = new City('Casa 3', 'casa-3', 'composite-house');
var casa4 = new City('Casa 4', 'casa-4', 'composite-house');
var casa5 = new City('Casa 5', 'casa-5', 'composite-house');
var casa6 = new City('Casa 6', 'casa-6', 'composite-house');
var casaRemover7 = new City('Casa remover 7', 'casa-remover-7', 'composite-house');

liberdade.add(casa1);
liberdade.add(casa2);

ipiranga.add(casa3);
ipiranga.add(casaRemover7);

ipiranga.remove(casaRemover7); // Removido

lapa.add(casa4);

leblon.add(casa5);
leblon.add(casa6);

saoPaulo.add(liberdade);
saoPaulo.add(ipiranga);

rioDeJaneiro.add(lapa);
rioDeJaneiro.add(leblon);

cities.add(saoPaulo);
cities.add(rioDeJaneiro);

document.body.appendChild(cities.getElement());

// CSS Layout Debugger
[].forEach.call(document.querySelectorAll("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})
