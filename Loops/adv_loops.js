function search(name,array) {
var flag=0; // flags
 for (i=0; i<array.length; i++) {
   if(array[i].name==name){
  console.log(name+ " was found at "+(i+1));
  flag=1; // populate flag if true
                     }
 }
 if(flag==0) console.log("name was not found");  
// if 0 then it will print - my old else line printed not found for each entry till it got to the match 
}

function filter(array,score) {
var display_array=[];
  for (i=0; i<array.length; i++) {
    if(array[i].score>score)
	   display_array.push(array[i]);
								}
  return display_array;
 }

const PERSONDATA = [{
    name:"Michael",
    rank:4,
    age:19,
    score: 66
},{
    name:"Emily",
    rank:7,
    age:22,
    score: 37
},{
    name:"Sam",
    rank:2,
    age:23,
    score:80
},{
    name:"William",
    rank:10,
    age:26,
    score:11
},{
    name:"James",
    rank:8,
    age:26,
    score:28
},{
    name:"Mia",
    rank:5,
    age:28,
    score:54
},{
    name:"Isabella",
    rank:1,
    age:31,
    score:100
},{
    name:"Alex",
    rank:3,
    age:34,
    score:75
},{
    name:"Olivia",
    rank:6,
    age:36,
    score:42
},{
    name:"Geoff",
    rank:9,
    age:41,
    score:19
}]

search("Alex",PERSONDATA);
console.log(filter(PERSONDATA, 50));
