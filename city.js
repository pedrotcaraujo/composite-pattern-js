var City = function (title, id) {
    this.children = [];
    this.template;
}

City.prototype = {
    add: function (child) {
        this.children.push(child);
    },

    remove: function (child) {    
        for (var node, i = 0; node = this.getChild(i); i++) {
            if (node == child) {
                this.children.splice(i, 1);
                return true;
            }

            if (node.remove(child)) {
                return true;
            }
        }

        return false;
    },

    getChild: function (i) {
        return this.children[i];
    },

    hide: function () {
        for (var node, i = 0; node = this.getChild(i); i++) {
            node.hide();
        }
         
        this.element.hide(0);
    },
     
    show: function () {    
        for (var node, i = 0; node = this.getChild(i); i++) {
            node.show();
        }
    },
     
    getElement: function () {
        return this.template;
    }
}

var saoPaulo = new City('São Paulo', 'sao-paulo');
var rioDeJaneiro = new City('Rio de Janeiro', 'rio-de-janeiro');
var liberdade = new City('Liberdade', 'liberdade');
var ipiranga = new City('Ipiranga', 'ipiranga');
var lapa = new City('Lapa', 'lapa');
var leblon = new City('Leblon', 'leblon');
var casa1 = new City('Casa 1', 'casa-1');
var casa2 = new City('Casa 2', 'casa-2');
var casa3 = new City('Casa 3', 'casa-3');
var casa4 = new City('Casa 4', 'casa-4');
var casa5 = new City('Casa 5', 'casa-5');
var casa6 = new City('Casa 6', 'casa-6');
var casaRemover7 = new City('Casa remover 7', 'casa-remover-7');

liberdade.add(casa1);
liberdade.add(casa2);

ipiranga.add(casa3);
ipiranga.add(casaRemover7);

ipiranga.add(casaRemover7); // Removido

lapa.add(casa4);

leblon.add(casa5);
leblon.add(casa6);

saoPaulo.add(liberdade);
saoPaulo.add(ipiranga);

rioDeJaneiro.add(lapa);
rioDeJaneiro.add(leblon);