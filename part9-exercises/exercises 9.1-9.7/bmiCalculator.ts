// const calculateBmi = (height: number, mass: number) => {

//     height = height/100

//     const result: number = mass / Math.pow(height, 2)
//     //console.log(result)

//     if (result < 18.5 ) {
//         console.log("Not normal (underweight)")
//     } else if (result > 24.9) {
//        console.log("Not normal (overweight)")
//     } else {
//         console.log("Normal (healthy weight)")
//     }
// }
// calculateBmi(180, 74)



const calculateBmi = (height: number, mass: number) => {

    height = height/100;

    const result: number = mass / Math.pow(height, 2);
    //console.log(result)

    if (result < 18.5 ) {
        console.log("Not normal (underweight)");
    } else if (result > 24.9) {
       console.log("Not normal (overweight)");
    } else {
        console.log("Normal (healthy weight)");
    }
};

const parseArg = (args: string[]): {value1: number, value2: number} => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    const valuesArray = args.map(Number);
    

    if (!valuesArray.every(num => isNaN(num))) {
        return {
          value1: valuesArray[2],
          value2: valuesArray[3]
        };
      } else {
        throw new Error('Provided values were not valid!');
      }
};



try {
    const { value1, value2 } = parseArg(process.argv);
    calculateBmi(value1, value2);
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }



