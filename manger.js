import { Worker } from "node:worker_threads"
import fs from 'fs'


var obj = JSON.parse(fs.readFileSync('./dataset.json', 'utf8'));
let arr=[];
for(let i=0;i<obj.length;i++){
    arr.push(obj[i])
}
let mid = Math.round(arr.length/3)
let worker1=arr.slice(0,mid)
let worker2=arr.slice(mid,arr.length)
console.log("worker 1")
// workers(worker1)
console.log("worker 2")
workers(worker2)


function workers(job){
const worker=new Worker("./index.js");
worker.postMessage(job)
worker.on('message',(str)=>{
    console.log('downlond '+str)
    worker.terminate()
})

}