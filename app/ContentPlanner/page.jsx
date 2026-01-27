"use client";

import { useState } from "react";

export default function ContentPlanner() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Idea");
  const [platform, setPlatform] = useState("Youtube");

  function handleCreate(e) {
    e.preventDefault();

    const newContent = {
      title,
      status,
      platform,
    };

    console.log("Created content:", newContent);

    setTitle("");
    setStatus("idea");
    setPlatform("youtube");
  }
  return (
    <div className="container d-flex align-items-center justify-content-between py-4">
      {/* MODAL */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Header */}
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                New Content
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            {/* ✅ FORM starts here */}
            <form onSubmit={handleCreate}>
              <div className="modal-body">
                {/* Title */}
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="what are we making?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                {/* Status */}
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="idea">Idea</option>
                    <option value="filming">Filming</option>
                    <option value="editing">Editing</option>
                    <option value="published">Published</option>
                  </select>
                </div>

                {/* Platform */}
                <div className="mb-3">
                  <label className="form-label">Platform</label>
                  <select
                    className="form-select"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                  >
                    <option value="youtube">YouTube</option>
                    <option value="tiktok">TikTok</option>
                    <option value="instagram">Instagram</option>
                  </select>
                </div>
              </div>

              {/* Footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn btn-brand"
                  data-bs-dismiss="modal"
                >
                  Create
                </button>
              </div>
            </form>
            {/* ✅ FORM ends here */}
          </div>
        </div>
      </div>

      {/* Page title */}
      <div>
        <h1 className="fs-2" style={{ fontWeight: 700 }}>
          📅 Content Planner
        </h1>
        <p className="text-secondary mb-0">
          Track your content from idea to published
        </p>
      </div>

      {/* Trigger button */}
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
