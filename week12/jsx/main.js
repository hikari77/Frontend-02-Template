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
        this.root.classList.add("carousel")
        for(let record of this.attributes.src){
            let child = document.createElement('div');
            child.style.backgroundImage = `url('${record}')`;

            this.root.appendChild(child)
        }

        this.root.addEventListener('mousedown', event => {
            
            console.log('mouse down');
            
            let move = event => {
                console.log('mouse move')
            }

            let up = event => {
                console.log('mouse up');
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', up);
            }

            document.addEventListener('mousemove', move);
    
            document.addEventListener('mouseup', up);
        });


        // let currentIndex = 0;
        // setInterval(() => {
        //     let children = this.root.children;
        //     let nextIndex = (currentIndex + 1) % children.length;
            
        //     let current = children[currentIndex];
        //     let next = children[nextIndex];

        //     next.style.transition = "none";
        //     next.style.transform = `translateX(${100 - nextIndex * 100}%)`;
            
        //     setTimeout(() => {
        //         next.style.transition = "";
        //         current.style.transform = `translateX(${-100 - currentIndex * 100}%)`;
        //         next.style.transform = `translateX(${-nextIndex * 100}%)`;

        //         currentIndex = nextIndex;
        //     }, 16);
        // }, 3000);

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