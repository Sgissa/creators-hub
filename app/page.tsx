import Image from "next/image";
import AppBanner from '@/components/Appbanner'
import Link from "next/link";



export default function Home() {
  return (
    <>
    <div className="container-md mt-4 ">
      <h1 className="fs-1" style={{ fontWeight: 700 }}>Your Creator <span className="gradient-text">Toolkit</span></h1>
      <p className="text-secondary" >Everything you need to plan, create, and grow your content.<br/> All your essential tools in one place.</p>
    </div>
    {/* The grid displaying the apps  */}
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <Link href="/ContentPlanner"  className="text-decoration-none d-block">
          <AppBanner icon="📅" title="Content Planner" description="Plan, track, and organize your content from idea to published across all platform" comingSoon={false}/>
          </Link>
        </div>
        <div className="col opacity-50 ">
          <Link href="#" className="text-decoration-none d-block">
          <AppBanner icon="📊" title="Analytics Dashboard" description="Track your performance metrics and growth across all your social platforms" comingSoon/>
          </Link>
        </div>
      </div>
    </div>
    
    </>
  );
}
