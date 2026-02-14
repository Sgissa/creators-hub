"use client";

import { useEffect, useState } from "react";
import ContentCard from "../../components/ContentCard";

export default function ContentPlanner() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("idea");
  const [platform, setPlatform] = useState("youtube");
  // The Array of the content entries
  const [contentItems, setContentItems] = useState([]);
  // filtering the content entries
  const ideas = contentItems.filter((item) => item.status === "idea");
  const films = contentItems.filter((item) => item.status === "filming");
  const edits = contentItems.filter((item) => item.status === "editing");
  const published = contentItems.filter((item) => item.status === "published");

  useEffect(() => {
    const saved = localStorage.getItem("content");
    if (saved) {
      setContentItems(JSON.parse(saved));
    }
  }, []);

  function handleCreate(e) {
    e.preventDefault();

    const newContent = {
      title,
      status,
      platform,
    };

    let updated = [newContent, ...contentItems];

    setContentItems(updated);

    localStorage.setItem("content", JSON.stringify(updated));

    console.log(contentItems);

    setTitle("");
    setStatus("idea");
    setPlatform("youtube");
  }

  console.log(contentItems);

  return (
    <>
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

      {/* ✅ GRID of cards */}
      <div className="container mt-4">
        <div className="row g-4">
          {/* IDEAS COLUMN */}
          <div className="col-md-3">
            <h5 className="text-center">Ideas</h5>
            {ideas.map((item, index) => (
              <ContentCard
                key={index}
                title={item.title}
                platform={item.platform}
                status={item.status}
              />
            ))}
          </div>

          {/* FILMING COLUMN */}
          <div className="col-md-3">
            <h5 className="text-center">Filming</h5>
            {films.map((item, index) => (
              <ContentCard
                key={index}
                title={item.title}
                platform={item.platform}
                status={item.status}
              />
            ))}
          </div>

          {/* EDITING COLUMN */}
          <div className="col-md-3">
            <h5 className="text-center">Editing</h5>
            {edits.map((item, index) => (
              <ContentCard
                key={index}
                title={item.title}
                platform={item.platform}
                status={item.status}
              />
            ))}
          </div>

          {/* PUBLISHED COLUMN */}
          <div className="col-md-3">
            <h5 className="text-center">Published</h5>
            {published.map((item, index) => (
              <ContentCard
                key={index}
                title={item.title}
                platform={item.platform}
                status={item.status}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
