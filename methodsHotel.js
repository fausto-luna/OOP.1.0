// ------------- CREATE ------------- //
// El mètode crearHotel() haurà de demanar a l’usuari que introdueixi per pantalla les dades de nom,
// nombre d’habitacions, nombre de plantes i superfície total de l’hotel. Un cop hagi demanat totes
// aquestes dades, s’ha d’instanciar l’objecte de la classe i afegir-lo a un array d’hotels.
var arrHotels = new Array();
function createHotel(){
    document.getElementById('resultCreateID').innerHTML = '';
    let name = document.getElementById('nameID').value;
    let rooms = parseInt(document.getElementById('roomsID').value);
    let floors = parseInt(document.getElementById('floorsID').value);
    let sqMeters = parseInt(document.getElementById('sqMetersID').value);
    if (name !== '' && isNaN(rooms) == false && isNaN(floors) == false && isNaN(sqMeters) == false){
        let hotel = new Hotel(name, rooms, floors, sqMeters);
        arrHotels.push(hotel);
        let x = document.getElementById('resultCreateID');
        x.innerHTML = 'That was brilliant! <br> You just succesfully created <br> ' + name + ' Hotel.'
    }
    if (name == '' || isNaN(rooms) == true || isNaN(floors) == true || isNaN(sqMeters) == true){
        alert('Error! A field is missing or mistyped.');
    }
}

// ------------- READ ------------- //
// El mètode veureHotel() ha de demanar a l’usuari el nom de l’hotel que vol que mostrem per
// pantalla, si l’hotel està a la nostra aplicació, li mostrarem l’hotel, si no hi és, informarem l’usuari dient
// que l’hotel que ens ha demanat no està dintre de la nostra aplicació.
// Quan mostrem l’hotel, a més, de mostrar el nombre d’habitacions, nombre de plantes i superfície
// total de l’hotel també es cridarà al mètode calcularManteniment().

function readHotel(){
    document.getElementById('readHotelResultID').innerHTML = '';
    let found = false;
    let name = document.getElementById('nameReadID').value;
    if (name === ''){
        alert('Error! A field is missing or mistyped.');
    }
    for (var i = 0; i < arrHotels.length; i++){
        if ( name === arrHotels[i].name ){
            document.getElementById('readHotelResultID').innerHTML += arrHotels[i].name + ' Hotel <br>';
            document.getElementById('readHotelResultID').innerHTML += arrHotels[i].rooms + ' Rooms <br>';
            document.getElementById('readHotelResultID').innerHTML += arrHotels[i].floors + ' Floors <br>';
            document.getElementById('readHotelResultID').innerHTML += arrHotels[i].sqMeters + ' Square Meters <br>';
            // function display(values,key){  
            //     document.getElementById('readHotelResultID').innerHTML += values + ' - ' + key + '<br>';
            // }
            // arrHotels.forEach(display); !!! buscar loop for in!!!
            arrHotels[i].houseKeeping();
            found = true;
        }
        if (found == false && i == (arrHotels.length - 1)){
            let x = document.getElementById('readHotelResultID');
            x.innerHTML = 'Sorry! Hotel ' + name + ' was not found.';
        }
    }
}

// ------------- UPDATE ------------- //
// El mètode modificarHotel() ha de demanar a l’usuari quin hotel vol modificar. L’usuari introduirà el
// nom de l’hotel. Si el tenim a l’aplicació, li demanarem si vol modificar el nombre d’habitacions, el
// nombre de plantes o la superfície total de l’hotel. Farem la modificació pertinent i avisarem a l’usuari
// que la modificació s’ha realitzat.

function updateHotel(){
    document.getElementById('updateHotelResultID').innerHTML = '';
    let updated = false;
    name = document.getElementById('nameUpdateID').value;
    if (name === ''){
        alert('Error! A field is missing or mistyped.');
    }
    for (var i = 0; i < arrHotels.length; i++){
        if ( name === arrHotels[i].name){
            do {
                let x = prompt('Do you want to update NAME, ROOMS, FLOORS or sqMETERS?');
                x.toLocaleLowerCase;
                switch(x){ // buscar cómo obligar a poner string o number en el prompt.
                     case 'name':
                        arrHotels[i].name = prompt('Insert new name.');
                        updated = true;
                         break;
                     case 'rooms':
                         arrHotels[i].rooms = parseInt(prompt('Insert number of rooms.'));
                         updated = true;
                         break;
                     case 'floors':
                         arrHotels[i].floors = parseInt(prompt('Insert number of floors.'));
                         updated = true;
                         break;
                     case 'sqmeters':
                         arrHotels[i].sqMeters = parseInt(prompt('Insert total amount of square meters.'));
                         updated = true;
                         break;
                     default:
                       alert('There was an error! Please specify NAME, ROOMS, FLOORS or sqMETERS?');  
                }
            }
            while (updated == false);
            if (updated == true){
                let y = document.getElementById('updateHotelResultID');
                y.innerHTML = 'Brilliant! You just succesfully updated ' + arrHotels[i].name + ' Hotel.'
            }
        }
        if (updated == false && i == (arrHotels.length - 1)){
           let j = document.getElementById('updateHotelResultID');
           j.innerHTML = 'Sorry! ' + name + ' Hotel was not found.'
        }
    }
}
// ------------- DELETE ------------- //
// El mètode donarDeBaixaHotel() ha de demanar quin hotel es vol donar de baixa. L’usuari introduirà
// el nom de l’hotel i si l’hotel està dintre de l’array, l’eliminarem i mostrarem un missatge per pantalla
// informant l’usuari que hem eliminat l’hotel. Si no hem trobat l’hotel dintre de l’array, avisarem l’usuari
// dient que l’hotel no estava dintre de la nostra aplicació.

function deleteHotel(){
    document.getElementById('deleteHotelResultID').innerHTML = '';
    let found = false;
    let removed = false;
    let name = document.getElementById('deleteHotelNameID').value;
    if (name === ''){
        alert('Error! A field is missing or mistyped.');
    }
    for (var i = 0; i < arrHotels.length; i++){
        if ( name === arrHotels[i].name){
            found = true;
            arrHotels.splice(i,1);
            removed = true;
        }
        if (found == true && removed == true){
            let x = document.getElementById('deleteHotelResultID');
            x.innerHTML = 'Well done! <br> You just succesfully deleted ' + name + ' Hotel.'
        }
        if (found == false && i == (arrHotels.length - 1)){
            let y = document.getElementById('deleteHotelResultID');
            y.innerHTML = 'Sorry! ' + name + ' Hotel was not found';
        }
    }
}

// // ------------- CREATE 5 HOTELS AT ONCE (for dubbuging) ------------- //
function create5Hotels(){
    let hotel1 = new Hotel('London', 250, 5, 560);
    let hotel2 = new Hotel('Paris', 350, 19, 1860);
    let hotel3 = new Hotel('New York', 150, 11, 2560);
    let hotel4 = new Hotel('Tokyo', 950, 12, 3760);
    let hotel5 = new Hotel('Barcelona', 450, 15, 1560);
    arrHotels.push(hotel1);
    arrHotels.push(hotel2);
    arrHotels.push(hotel3);
    arrHotels.push(hotel4);
    arrHotels.push(hotel5);
    let hotelsNames = hotel1.name + ' Hotel, ' + hotel2.name + ' Hotel, ' + hotel3.name + ' Hotel, ' 
    + hotel4.name + ' Hotel and ' + hotel5.name + ' Hotel.';
    let x = document.getElementById('txtResultCreate5HotelsID');
    x.innerHTML = 'Cool! You just succesfully created ' + hotelsNames;
}