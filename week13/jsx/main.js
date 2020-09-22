import { createElement } from './framework'
import { Carousel } from './carousel.js';
import { Timeline, Animation } from './animation';


let d = [
    '/statics/cat1.jpg',
    '/statics/cat2.jpg',
    '/statics/cat3.jpg'
]

// document.body.appendChild(a);

let a = <Carousel src={d}/>
a.mountTo(document.body)

let tl = new Timeline();
window.tl = tl;

window.animation = new Animation({set a(v) {console.log(v)}}, "a", 0, 100, 1000, null)
// object, property, startValue, endValue, duration, delay, timingFunction
// tl.add(new Animation({set a(v) {console.log(v)}}, "a", 0, 100, 1000, null))

tl.start();