'use client';
import Page from '../Components/page.jsx';
import Department from '../Components/department/page.jsx';
import Activities from '../Components/activities/page.jsx';
import Contact from '../Components/contact/page.jsx';

export default function Home() {
  return (
    <div className="scroll-smooth"> {/* This will ensure smooth scroll behavior */}
      <Page />
      <Department />
      <Activities />
      <Contact />
    </div>
  );
}
