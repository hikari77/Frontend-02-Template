import {Component, createElement} from './framework';


class Carousel extends Component {
    constructor(){
        super();
        this.attributes = Object.create(null);
    }
    setAttribute(name, value){
        this.attributes[name] = value;
    }
    render(){
        this.root = document.createElement("div")

        for(let record of this.attributes.src){
            let child = document.createElement('img');
            child.src = record;
            this.root.appendChild(child)
        }
        return this.root;
    }
    mountTo(parent){
        parent.appendChild(this.render())
    }
}



let d = [
    '/statics/cat1.jpg',
    '/statics/cat2.jpg',
    '/statics/cat3.jpg'
]

// document.body.appendChild(a);

let a = <Carousel src={d}/>
a.mountTo(document.body)