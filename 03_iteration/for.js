//for

for (let i = 1; i <= 10; i++) {
    // console.log(i);

}

// for (let i = 1; i < 10; i++) {
//     console.log(`outervalue:${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`Innervalue:${j}`);

//     }

// }
// ---------Table from 1 to 10-------
for (let i = 1; i < 10; i++) {
        // console.log(`outervalue:${i}`);
        for (let j = 1; j <= 10; j++) {
            // console.log(i+"*"+j+"="+i*j);
    
        }
    }

    const myArray=["flash","superman","batman"]

    for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index];
        // console.log(element);
    }

    //break
    for (let i = 1; i <= 10; i++) {
    if(i==5){
        // console.log("5 Detected");
        break
    }
        // console.log(i);
    
    }
    
    //continue
    for (let i = 1; i <= 10; i++) {
    if(i==5){
        console.log("5 is Detected");
        continue
    }
        console.log(i);
    }