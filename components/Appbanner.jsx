export default function AppBanner({ icon, title, description, comingSoon }) {
  let comingSoonTag = null;
  if (comingSoon == true) {
    comingSoonTag = (
      <span className="position-absolute top-0 end-0 m-3 small text-secondary">
        Coming Soon
      </span>
    );
  }

  return (
    <>
      <div className="card h-100 shadow-sm border-0 app-banner">
        {comingSoonTag}

        <div className="card-body">
          <div className="fs-3 mb-2">{icon}</div>
          <h5 className="card-title fw-semibold">{title}</h5>
          <p className="card-text text-secondary small mb-0">{description}</p>
        </div>
      </div>
    </>
  );
}
