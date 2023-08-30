import { CoursePart } from "../types";
import Part from "./Part";


const Content = ( { parts }: {parts: CoursePart[]}) => {

    return (
        <div>
        {parts.map((part, i) => 
            <div key={i}>            
                <div>
                    <h3>Name: {part.name}</h3>
                    <p> Exercises: {part.exerciseCount}</p>
                </div>
                <Part part={part} />
            </div>            
        )}
        </div>
    );
};

export default Content;