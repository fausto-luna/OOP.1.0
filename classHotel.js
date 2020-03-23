class Hotel{
    constructor(name, rooms, floors, sqMeters){
        this.name = name;
        this.rooms = rooms;
        this.floors = floors;
        this.sqMeters = sqMeters;
    }
    get getName(){
        return this.name;
    }
    get getRooms(){
        return this.rooms;
    }
    get getFloors(){
        return this.floors;
    }
    get getSqMeters(){
        return this.sqMeters;
    }
    set setName(name){
        this.name = name;
    }
    set setRooms(rooms){
        this.rooms = rooms;
    }
    set setFloors(floors){
        this.floors = floors;
    }
    set setSqMeters(sqMeters){
        this.sqMeters = sqMeters;
    }
    houseKeeping(){
        let cleaners = Math.ceil(this.rooms / 20);
        let salaries = cleaners * 1500;
        document.getElementById('readHotelResultID').innerHTML += 
        'You need ' + cleaners + ' cleaners to maintain '+ this.name + ' Hotel. <br>';
        document.getElementById('readHotelResultID').innerHTML += 
        'The total amount of salaries is ' + salaries + '€';
    }
}