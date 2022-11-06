export function UsersIndex(props) {
  return (
    <div>
      <h1>All Users</h1>
      {props.users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <img src={user.image_url} />
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}
