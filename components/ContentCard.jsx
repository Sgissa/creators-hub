export default function ContentCard({ title, platform, status }) {
  function handleEdit() {}
  return (
    <>
      {/* Content Entry Details MODAL  */}
      <div
        className="modal"
        id="content-details"
        tabIndex={-1}
        aria-labelledby="detailModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="detailModalLabel">
                Edit Content
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleEdit}>
              <div className="modal-body">
                <label className="form-label">{title}</label>
              </div>
            </form>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* The Content Card  */}
      <div
        className="card mb-3 shadow-sm border-0 app-banner"
        data-bs-toggle="modal"
        data-bs-target="#content-details"
      >
        <div className="card-body">
          <h5 className="card-title fw-semibold">{title}</h5>
          <p className="card-text text-secondary small mb-0 fw-bold ">
            {platform}
          </p>
          <p className="card-text text-secondary small mb-0 ">{status}</p>
        </div>
      </div>
    </>
  );
}
