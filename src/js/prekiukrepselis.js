/**
 * Created by HP on 2016.12.21.
 */

app.controller("prekiukmController", function () {

    var mc = this;

    mc.prekiumasyvas =
        [
            {
                'id': '1',
                'url': '',
                'img': 'src/pictures/15032847_1385907601420578_2904714286766267430_n.jpg',
                'Pavadinimas': 'Pauksciai',
                'aprasymas': 'Cia turetu but prekes aprasymas'
            },
            {
                'id': '2',
                'url': '',
                'img': 'src/pictures/15032308_1385913438086661_7471027308842516511_n.jpg',
                'Pavadinimas': 'Pedos',
                'aprasymas': 'Cia turetu but prekes aprasymas'
            },
            {
                'id': '3',
                'url': '',
                'img': 'src/pictures/15032890_1385913448086660_1485710228594869623_n.jpg',
                'Pavadinimas': 'Pedos su zuikiu',
                'aprasymas': 'Cia turetu but prekes aprasymas'
            },
            {
                'id': '4',
                'url': '',
                'img': 'src/pictures/15036622_1385913441419994_3886206400751419442_n.jpg',
                'Pavadinimas': 'Keturios pedos',
                'aprasymas': 'Cia turetu but prekes aprasymas'
            },
            {
                'id': '5',
                'url': '',
                'img': 'src/pictures/15094471_1385903594754312_6249980919776817129_n.jpg',
                'Pavadinimas': 'Pedos pilkumoj',
                'aprasymas': 'Cia turetu but prekes aprasymas'
            },
            {
                'id': '6',
                'url': '',
                'img': 'src/pictures/15110245_1385910011420337_8150649659147828340_o.jpg',
                'Pavadinimas': 'Pasileidusios avys',
                'aprasymas': 'Cia turetu but prekes aprasymas'
            }
        ];

    mc.prekiukm = [];

    vm.pridetiPreke = function (pid) {
        var produktas = mc.prekiumasyvas[pid];
        mc.prekiukm.push(produktas);
    }

});