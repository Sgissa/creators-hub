"use client";

export default function ContentPlanner() {
  return (
    <div className="container d-flex align-items-center justify-content-between py-4">
      {/* ✅ Modal MUST be inside the return */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">...</div>

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

      {/* The title and description */}
      <div>
        <h1 className="fs-2" style={{ fontWeight: 700 }}>
          📅 Content Planner
        </h1>
        <p className="text-secondary mb-0">
          Track your content from idea to published
        </p>
      </div>

      {/* The button to add new content */}
      <button
        type="button"
        className="btn btn-brand p-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i className="bi bi-plus me-2"></i>
        New Content
      </button>
    </div>
  );
}
