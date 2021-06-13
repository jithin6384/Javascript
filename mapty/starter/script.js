'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


let map, mapEvent;


class Workout{
    constructor(coords, distance, duration){
        this.date  = new Date();
        this.id = (Date.now() + '').slice(-10);
        this.coords = coords; //[lat, lng]
        this.distance = distance; // km
        this.duration = duration; // in minutes
    }
}

class Running extends Workout{
    constructor(coords, distance, duration, cadence){
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
    }
    calcPace(){
        //pace --> min/km
        this.pace = this.duration/this.distance
        return this.pace
    }
}

class Cycling extends Workout{
    constructor(coords, distance, duration, elevationGain){
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();

    }

    calcSpeed(){
        this.speed = this.distance/(this.duration/60);
        return this.speed;
    }
}

const runner = new Running([35,-16], 5, 30, 1000);
const cycle1 = new Cycling([35,-16], 25, 100, 30 )
//refactoring for project artitecture
console.log(runner, cycle1);
class App {
    #map;
    #mapEvent;
    constructor(){
      this._getPosition();

      form.addEventListener('submit',this._newWorkout.bind(this));
      inputType.addEventListener('change',this._toggleElevationField);
    }

    _getPosition(){
        //229 using geolocation api
        console.log(this)
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function(){
                     alert("cant get your position")
                })
        }
       
    }

    _loadMap(position){
        
            const {latitude, longitude} = position.coords;
            // console.log(position);
            // console.log(latitude, longitude);
            const coords = [latitude, longitude];
             this.#map = L.map('map').setView(coords, 13);
        
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);
            //handling click on map
            this.#map.on('click',this._showForm.bind(this))
            
    }

    _showForm(mapE){
        form.classList.remove('hidden');
                inputDistance.focus();
                this.#mapEvent = mapE;
    }

    _toggleElevationField(){
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e){
            e.preventDefault();
            //Get data from form
            //Check if Data is valid
            //If workout is running create running object
            //If workout is cycling create cycling object
            // Add new object to workout array
            //render workout on map as marker
            const {lat,lng} = this.#mapEvent.latlng;
            L.marker([lat,lng]).addTo(this.#map).bindPopup(L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: 'running-popup',
            })).setPopupContent('Workout')
            .openPopup();
            //Clear Value
            inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
            //Display Marker
            
        
    }
}

const app = new App();



//trigerring changes every time save is pressed;

// document.addEventListener('keypress',function(e){
//     if(e.ctrlKey){
//     debugger;
//     }
// })