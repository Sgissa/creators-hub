export default function ContentCard({ title, platform, status }) {
  return (
    <>
      <div className="card mb-3 shadow-sm border-0 app-banner">
        <div className="card-body">
          <h5 className="card-title fw-semibold">{title}</h5>
          <p className="card-text text-secondary small mb-0 ">{platform}</p>
          <p className="card-text text-secondary small mb-0 ">{status}</p>
        </div>
      </div>
    </>
  );
}
