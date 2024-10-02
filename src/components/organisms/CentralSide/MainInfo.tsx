"use client";
import React from "react";
import { useState } from "react";
import Button from "@/components/atoms/Button";
import Image from "@/components/atoms/Image";
import PopUp from "@/components/molecules/PopUp";

/**
 * The main information section of the page.
 *
 * This component renders the main information about the author, including a
 * photo, name, title, and a short description. It also renders a button to
 * contact the author and a pop up with a longer description of the author.
 *
 * @returns {React.ReactElement} The rendered main information section.
 */
const MainInfo = () => {
  const [open, setOpen] = useState(false);

  const handleContactMeClick = () => {
    setOpen(false);
    window.open("mailto:jonatan.leal@udea.edu.co", "_blank");
  };

  return (
    <main className="mx-2 my-2 flex flex-col p-4 rounded bg-white shadow-lg shadow-white/40 lg:mx-5 lg:flex-row">
      <section className="my-auto flex w-fit flex-col p-2">
        <div className="text-4xl ">
          <p className="font-semibold ">Jonatan Leal</p>
          <p className="font-bold text-primary">
            Back-end{" "}
            <span className="font-semibold text-neutral-700">Developer</span>
          </p>
        </div>
        <p className=" my-5 w-fit text-justify-left ">
          Aspiring innovator with a strong commitment and excellent
          interpersonal skills, capable of collaborating effectively within
          teams. Skilled in various programming languages and deeply passionate
          about web development.
        </p>
        <Button
          text="HIRE ME ➤"
          size="w-36"
          classes="hover:duration-500 hover:scale-95"
          onClick={() => setOpen(true)}
        />
        <PopUp
          open={open}
          closeModal={() => setOpen(false)}
          text="I'm highly interested in backend development and web development. Building systems that are both efficient and scalable is something I truly enjoy, and I make it a point to stay informed about new tech trends. I appreciate working with others, as hearing different perspectives enriches my knowledge. Also, I thrive on self-directed learning, which I actively incorporate into my studies."
        >
          <div className="flex justify-center py-4">
            <Button
              text="CONTACT ME ➤"
              size="w-36"
              classes="hover:transition-colors hover:duration-500 hover:scale-95"
              onClick={handleContactMeClick}
            />
          </div>
        </PopUp>
      </section>
      <section className="flex w-fit items-end justify-center">
        <Image src="/photo.png" alt="Jonatan Leal" classes="hidden lg:block" />
      </section>
    </main>
  );
};

export default MainInfo;
