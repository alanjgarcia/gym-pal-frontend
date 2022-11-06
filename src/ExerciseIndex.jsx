export function ExerciseIndex(props) {
  return (
    <div>
      <h1>All Exercises</h1>
      {props.exercises.map((exercise) => (
        <div key={exercise.id}>
          <h2>{exercise.name}</h2>
          <img src={exercise.image_url} />
          <p>Name: {exercise.name}</p>
          <p>Description: {exercise.description}</p>
          <p> Video Link: {exercise.video_url} </p>
        </div>
      ))}
    </div>
  );
}
