import React from "react";
import EducationCard from "@/components/molecules/EducationCard";
import HorizontalLine from "@/components/atoms/HorizontalLine";
import Title from "@/components/atoms/Title";


/**
 * EducationInfo component.
 *
 * This component renders a section of the page with the information about the
 * education of the user. It uses the EducationCard component to display each
 * education item in the list.
 *
 * The component receives a list of education items as a prop, and it maps over
 * the list to render each item as an EducationCard component. The component also
 * renders a horizontal line between each item.
 *
 * @returns {React.ReactElement} The rendered EducationInfo component.
 */
const EducationInfo = () => {
  const educationInfo = [
    {
      title: "University of Antioquia",
      text: "Student",
      initial: "Aug 2016",
      final: "Present",
      educationType: "Systems Engineering Degree",
      description:
        "Systems Engineering focuses on the study of elements in science and technology for the research, innovation, modeling, implementation, and management of physical or abstract systems, oriented towards symbolic processing; designed in accordance with aesthetic, economic, cultural criteria, and respect for the environment.",
    },
    {
      title: "Udemy Course",
      text: "Student",
      initial: "Nov 2021",
      final: "Feb 2022",
      educationType: "Java University",
      description:
        "This course is designed to equip students with the skills needed to create web and enterprise applications using Java, enabling them to stand out in the job market as Java programmers. Throughout the course, participants will gain fundamental knowledge of Java syntax and object-oriented programming principles. They will learn to utilize popular frameworks such as Spring Boot and JavaServer Faces, as well as manage databases using the Java Persistence API (JPA). By the end of the course, participants will be prepared to tackle the challenges of software development in a business environment.",
    },
  ];

  return (
    <div className="w-full">
      <Title title="Education" size="text-3xl" classes="text-white" />
      <div className="mx-6 my-5 rounded border-solid bg-white pb-1">
        {educationInfo.map((info, index) => (
          <>
            <div className="pb-4">
              <React.Fragment key={index}>
                <EducationCard {...info} />
              </React.Fragment>
            </div>
            {index !== educationInfo.length - 1 && (
              <HorizontalLine margin="my-0" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default EducationInfo;
