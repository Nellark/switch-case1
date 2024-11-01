// let day: number = 1;

// switch (day) {
//     case 0:
//         console.log('Today is Sunday ');
//      break

//         case 1: 
//         console.log('Today is Monday ');
//         break;

//         case 2: 
//         console.log('Today is Tuesday ');
//         break;

//         case 3: 
//         console.log('Today is Tuesday ');
//         break;

//        default:
//         console.log('selected day doesnt exist');

// }

// let day : number = 4;

// if(day == 0){
//     console.log(`Today is Sunday`);

// }else if (day == 1){
//     console.log(`Today is Monday`);

// }else if(day == 2){
//     console.log(`Today is Tuesday`);

// }else if(day == 3){
//     console.log(`Today is Wednesday`);

// }else console.log(`You have entered incorrect day`);


class TrafficLight {
    color: string;

    constructor(color: string) {
        this.color = color.toLowerCase();
    }

    getAction(): string {
        switch (this.color) { 
            case "red":
            return "Stop";

            case "yellow": 
            return "Prepare to stop";

            case "green":
            return "Go";

            default:
            return "Invalid color"; 
        }
    }
}

const light1 = new TrafficLight("Red");
console.log(light1.getAction()); 

const light2 = new TrafficLight("Yellow");
console.log(light2.getAction()); 

const light3 = new TrafficLight("Green");
console.log(light3.getAction());

const light4 = new TrafficLight("Blue");
console.log(light4.getAction()); 
