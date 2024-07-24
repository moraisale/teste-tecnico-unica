import Link from "next/link";
import React from "react";

const learnMoreLinks = [
  "Pós-Graduação",
  "Segunda Graduação",
  "Disciplinas Isoladas",
  "Cursos Livres",
];

export const LearnMoreSession = () => {
  return (
    <div className="flex flex-col px-6 border-t-2 lg:px-[124px]">
      <p className="font-bold text-xs lg:text-xl text-white py-[22px] lg:pt-[50px] lg:pb-9 ">
        Saiba mais da Faculdade Única
      </p>
      <div className="flex flex-col lg:flex-row lg:gap-[72px]">
        {learnMoreLinks.map((link, index) => (
          <Link
            href="/"
            key={+index}
            className="text-[10px] lg:text-xl font-bold leading-[22.32px] text-white pb-[27px]"
          >
            {link}
            <p className="font-medium text-white text-[10px] lg:text-lg">
              Ver nossos cursos
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
