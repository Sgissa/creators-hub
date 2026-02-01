export default function ContentCard({ title, platform }) {
  let data = localStorage.getItem("content");
  const response = JSON.parse(data);

  return (
    <>
      <div className="card h-100 shadow-sm border-0 app-banner">
        <div className="card-body">
          <h5 className="card-title fw-semibold">{title}</h5>
          <p className="card-text text-secondary small mb-0">{platform}</p>
        </div>
      </div>
    </>
  );
}
