import React from 'react';
import { FaCode } from "react-icons/fa";
import { HoverEffect, Card, CardTitle, CardDescription } from '../ui/card-hover-effect'; // Adjust the import path accordingly

const DepartmentPage = () => {
  // Define the department card data
  const departments = [
    {
      title: "Web Development",
      description: "Team Leader: Rayen Hammami",
      link: "/web-development", // Adjust links accordingly
      avatar: <FaCode />,
    },
    {
      title: "Mobile Development",
      description: "Team Leader: Alice Johnson",
      link: "/mobile-development", // Adjust links accordingly
    },
    {
      title: "Data Science",
      description: "Team Leader: John Doe",
      link: "/data-science", // Adjust links accordingly
    },
    {
      title: "UI/UX Design",
      description: "Team Leader: Jane Smith",
      link: "/ui-ux-design", // Adjust links accordingly
    },
    {
      title: "DevOps",
      description: "Team Leader: Michael Brown",
      link: "/devops", // Adjust links accordingly
    },
  ];

  return (
    <div className="bg-silver h-screen p-12">
      <h1 className="text-4xl  text-center"><strong>OUR DEPARTMENT</strong></h1>
      <HoverEffect items={departments} className="flex justify-center flex-wrap" />
    </div>
  );
};

export default DepartmentPage;
