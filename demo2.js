const a = name => { `return hi ${name}` ; }

console.log(a('wasurat'));

const b = inname => ` ${inname} `;

console.log(b('1234'))

var c = 1
var e = 2
const d = (a,b) => {int(a+b)}

console.log(c,e)

const Ar2 = ["1","2","3"]

let NAr = Ar2.map(item => item);

console.log(NAr)

//let vara = new Object();

let vara = {
    x : "1",
    y : "2",
    z : "3"
};

console.log(vara)

const addUser = (name,last,...city) => { //Rest Operator
    return name + " " + last + " " +city
}

console.log(addUser("1","2","3",4,5))

const addMessage = (pre,...msg) => {
    return msg.map(msg => pre + msg )
}

const addNumber = (...numner) => {
    return numner.reduce((first,current) => {
        return first + current
    })
}

console.log(addMessage("Number : ","2","3","4"))
console.log(addNumber(1,2,3,4,5)) 

const numner = [1,-1,2,3]

//numner.reduce()

function first() {
    setTimeout(function() {console.log(1);},500)
    
   // console.log(1);
}

function secound(){
    console.log(2);
}

function alertafter(){
    console.log('finished');
}

function doHomework(sub,callback){
    console.log(`${sub} homework`);
    callback();
}

doHomework('Math',alertafter);

//setInterval(() => {console.log(1234);},20



function get_x(){

    setTimeout(() => {console.log('A')},2000)
    
}

function get_y() {
    console.log('B');
}

async function callxy(){
    // await get_x();
    // await get_y();

    await Promise.all([get_x(),get_y()])
}

callxy()

function test(txt){
    return new Promise((resove , reject) => {
        if(txt == 'Hello'){return resove('resove')}
            else{return reject('reject')}
    })
}

test('Hello2')
    .then((c) => {console.log(c);})
    .catch((c) => {console.log(c);})


let ArrNum = [1,2,3,4,5,6]

console.log(ArrNum[0]);

// function Arr_(Arr){
//     Arr.forEach(element => {
//             console.log(element);
//     });
// }

//Arr_(ArrNum)

ArrNum.forEach((num) => {console.log(num)})

let contact = () => ({ Myname : 'W' });

contact()

let data_arr = ['A','B',3,5,6,7]

data_arr.forEach(value => console.log(value))

let new_arr = data_arr.map(
    value => 2*value
)

console.log(new_arr);



