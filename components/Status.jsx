export default function Status({ count, status }) {
  return (
    <div className="container">
      <h1>{count}</h1>
      <p>{status}</p>
    </div>
  );
}
