import { coursesList } from "@/helpers/coursesList";
import Link from "next/link";
import React from "react";

export const CoursesList = () => {
  return (
    <div className="flex flex-col text-black dark:text-white text-[10px] px-6 lg:px-[124px] bg-white dark:bg-black">
      <p className="font-bold pb-[27px] lg:text-xl">Graduação</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4">
        {coursesList.map((course, index) => (
          <Link
            key={+index}
            href="/"
            className="text-[12px] font-medium max-w-[154px]"
          >
            {course}
          </Link>
        ))}
      </div>
    </div>
  );
};
