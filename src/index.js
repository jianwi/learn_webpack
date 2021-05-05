console.log("ssxxssx")
import './layout.css'
import './less/index.less'
import './sass/index.scss'

setTimeout(()=>{
    console.log("666")
},1)

class Person {
    constructor(name){
        this.name = name
    }
}
class Dog{
    name = "大黄"
    static color = 'red'
}
let h = new Dog()
console.log(h)

let xm = new Person("小明")
console.log(xm)

function * gen(){
    yield 123
    yield 333
    return 567
}
let g = new gen()
console.log(g.next())
console.log(g.next())
console.log(g.next())
