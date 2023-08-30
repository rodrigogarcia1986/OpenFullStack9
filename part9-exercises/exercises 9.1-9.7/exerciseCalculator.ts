interface exerciseResults {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
} 

// const exerciseCalculator = (training: number[], target: number) : exerciseResults => {
    
//     const periodLength = training.length
//     const trainingDays = training.filter(day => day > 0).length
//     const average = training.reduce((acc, day) => acc + day , 0) / periodLength
//     const success = average >= target ? true : false
//     let rating
//     let ratingDescription

//     if (average < target) {
//         rating = 1
//         ratingDescription = "Not bad, but it could be better!"
//     } else if (average === target) {
//         rating = 2
//         ratingDescription = "You've done it! Keep going!"
//     } else {
//         rating = 3
//         ratingDescription = "Wow, you're killing it!"
//     }
//     const result = {
//         periodLength,
//         trainingDays,
//         target,
//         average,
//         success,
//         rating,
//         ratingDescription
//     }    
    
//     return result
// }

//console.log(exerciseCalculator([3, 0, 2, 4.5, 0, 3, 1], 2))

const parseArguments = (args: string[]): {value1: number[], value2: number} => {
    if (args.length < 4) throw new Error('Not enough arguments');
    //if (args.length > 4) throw new Error('Too many arguments');

    const valuesArray = args.slice(2).map(Number);

    //const value1Array = trueValues.split(',').map(Number)

    if (valuesArray.every(num => !isNaN(num))) {
        return {
          value1: valuesArray.slice(1),
          value2: valuesArray[0]
        };
      } else {
        throw new Error('Provided values were not valid!');
      }
};

const exerciseCalculator = (training: number[], target: number) : exerciseResults => {    
    
    const periodLength = training.length;
    const trainingDays = training.filter(day => day > 0).length;
    const average = training.reduce((acc, day) => acc + day , 0) / periodLength;
    const success = average >= target ? true : false;
    let rating;
    let ratingDescription;

    if (average < target) {
        rating = 1;
        ratingDescription = "Not bad, but it could be better!";
    } else if (average === target) {
        rating = 2;
        ratingDescription = "You've done it! Keep going!";
    } else {
        rating = 3;
        ratingDescription = "Wow, you're killing it!";
    }
    const result = {
        periodLength,
        trainingDays,
        target,
        average,
        success,
        rating,
        ratingDescription
    };    
    
    return result;
};

try {
    const { value1, value2 } = parseArguments(process.argv);
    console.log(exerciseCalculator(value1, value2));
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}

export default exerciseCalculator;



