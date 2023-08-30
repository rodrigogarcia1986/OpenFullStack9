import { CoursePart } from "../types"

const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

const Part = ({ part} : {part: CoursePart}) => {      
        
    switch (part.kind) {
        case "basic":
            return (
                <>
                   <p>Description: {part.description}</p>
                </>
                );
        case "group":
            return (
                <>
                    <p>Group Project {part.groupProjectCount}</p>
                </>
                );
        case "background":
            return (
                <>
                    <p>Description: {part.description}</p>
                    <p>Background Material: <a href={part.backgroundMaterial}>cool material!</a></p>
                </>
                );
        default:
            return assertNever(part);            
    }
}                 

export default Part