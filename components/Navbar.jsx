import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar bg-light-subtle shadow-sm border">
      <div className="container-md ">
        <a className="navbar-brand  text-uppercase fw-bold" href="/">
          <i className="bi bi-camera-video-fill me-2"></i>
          CreatorHub
        </a>
      </div>
    </nav>
  );
}
