// for loop

for(let index=0; index<5; index++){
    console.log(index)
} // 0 1 2 3 4

for(let i=0; i<=10; i++){
    console.log(`outer loop: ${i}`);
    for(let j=0; j<=10; J++){
        console.log(`inner loop: ${j} and inner loop: ${i}`);
        console.log(i + '*' + j + '=' + (i*j));
    }
}

let myArray = ["flash", "superman", "batman"]
for(let i=0;i<myArray.length; i++){
    console.log(myArray[i]);
    console.log(i);
} // flash 0 superman 1 batman 2

// break and continue

for(let i=0;i<10;i++){
    
    if(i===5){
        console.log(`Detected 5`);
        break; // exit the loop
    }
    console.log(`Value of i is ${i}`);
}