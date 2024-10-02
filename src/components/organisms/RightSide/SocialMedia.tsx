import React from "react";
import SocialMediaIcon from "@/components/molecules/SocialMediaIcon";

/**
 * A component that renders a list of social media icons.
 *
 * This component renders a list of SocialMediaIcon components, which are linked to the respective social media platform.
 *
 * @returns {React.ReactElement} The rendered list of social media icons.
 */
const SocialMedia = () => {
  const socialMedia = [
    {
      icon: "mdi:linkedin",
      link: "https://www.linkedin.com/in/jonatan-leal-9a92451a2",
    },
    { icon: "mdi:github", link: "https://github.com/jonaleal" },
  ];

  return (
    <>
      {socialMedia.map((social) => (
        <div className="p-1">
          <SocialMediaIcon key={social.icon} {...social} />
        </div>
      ))}
    </>
  );
};

export default SocialMedia;
