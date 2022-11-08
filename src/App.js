import { useState } from "react"
import {initialWorkouts, generateWorkout} from "./Workouts.js"
import "./App.css"

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts)

  const addNewWorkout = () => {
    const newWorkout = generateWorkout()
    console.log("addNewWorkout:", newWorkout)
    const newWorkOutArray = [...workouts, newWorkout];
    setWorkouts(newWorkOutArray)
    
  }

  const deleteWorkout = (targetworkout) => {
    console.log("deleteWorkout:", targetworkout)

    const newWorkoutArray = workouts.filter((workout) => {
      if(workout !== targetworkout ) return true
      return false
    })
    setWorkouts(newWorkoutArray)


  }

  const completeWorkout = (targetWorkout) => {
    console.log("completeWorkout:", targetWorkout)

    // BASIC Function/Method
    // const newArray = [];
    // for (let i = 0; i < workouts.length; i++){
    //   if(workouts[i] !== targetWorkout){
    //     newArray.push(workouts[i])
    //   } else {
    //     const workOutCopy = { ...workouts[i] };
    //     workOutCopy.done = !workOutCopy.done
    //     newArray.push(workOutCopy)

    //   }
    // }
    // setWorkouts(newArray)


    //  MAP function:
  //   const newArrayForMap = workouts.map(workout => {
  //     if (workout === targetWorkout){
  //       const workOutCopy = {...workouts}
  //       workOutCopy.done = !workOutCopy.done
  //       return workOutCopy
  //     } else {
  //       return workout
  //     }
      
  //   })
  //   setWorkouts(newArrayForMap)

//  MORE CONCISE VERSION:

const newArreyMapShort = workouts.map((workout) => {
  if(workout === targetWorkout) {return{...workouts, done: !workout.done};
} 
   return workout;
});
setWorkouts(newArreyMapShort)



  }

  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      <button onClick={addNewWorkout}>Add New Workout</button>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <p>
              {workout.sets}x sets of <strong>{workout.reps}x{workout.exercise}</strong> with {workout.rest} seconds rest
            </p>
            {!workout.done && 
              <button onClick={e=>completeWorkout(workout)}>Done</button>}
            {workout.done && 
             <p>✅</p>}
            <button onClick={e=>deleteWorkout(workout)}>Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default App
