import {person, sayHello} from './lib';


let test = () => console.log("compiling this");
test();

alert(person.name);
console.log(sayHello('Hi Ela !'));

async function getPosts(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

getPosts().then(posts => console.log(posts));

