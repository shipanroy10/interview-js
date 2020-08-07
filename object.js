const students = [
{id : 32, name: 'jolo'},
{id : 33,name : 'gaji'},
{id : 35, name : 'jalalu'},
{id : 41, name : 'joli'}

]
const name =[]
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    name.push(element.name);
}
console.log(name);


const names = students.map(x => x.name);
console.log(names);
const ids = students.map( x => x.id);
console.log(ids);
const bigger = students.filter(x => x.id > 33);
console.log(bigger);