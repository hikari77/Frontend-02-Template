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

        let position = 0;

        this.root.addEventListener('mousedown', event => {

            let children = this.root.children;
            let startX = event.clientX;

            console.log('mouse down');
            
            let move = event => {
                let x = event.clientX - startX;

                let current = position - ((x - x %450) / 450)

                for(let offset of [ -1, 0, 1]){
                    let pos = current + offset;
                    pos = (pos + children.length) % children.length;

                    children[pos].style.transition = "none";
                    children[pos].style.transform = 
                        `translateX(${- pos * 450 + offset * 450 + x % 450}px)`;

                }
            }

            let up = event => {
                let x = event.clientX - startX;
                position = position - Math.round(x / 450);

                for(let offset of [0, -Math.sign(Math.round(x / 450) - x + 225 * Math.sign(x))]){
                    let pos = position + offset;
                    pos = (pos + children.length) % children.length;

                    children[pos].style.transition = "";
                    children[pos].style.transform = 
                        `translateX(${- pos * 450 + offset * 450}px)`;

                }
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