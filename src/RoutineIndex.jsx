export function RoutinesIndex(props) {
  return (
    <div>
      <h1>All Routines</h1>
      {props.routines.map((routine) => (
        <div key={routine.id}>
          <h2>{routine.name}</h2>
          <img src={routine.url} />
          <p>User ID: {routine.user_id}</p>
          <p>Exercise ID: {routine.exercise_id}</p>
          <p> Reps: {routine.reps} </p>
        </div>
      ))}
    </div>
  );
}
