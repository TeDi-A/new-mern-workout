import { WorkoutContext } from "../context/WorkoutContext.jsx";
import { useContext } from 'react'

export const useWorkoutContext = () => {

    const context = useContext(WorkoutContext)

    if(!context){
        throw Error("Problem here!")
    }

    return context
}