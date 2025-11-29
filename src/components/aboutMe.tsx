import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full">
      <div className="flex flex-col flex-1 gap-4">
        <h2 id="aboutMe" className="text-3xl font-bold">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Hi, I'm a passionate full-stack developer with expertise in modern web
          technologies. I love building innovative solutions that solve
          real-world problems and create delightful user experiences.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          With several years of experience in software development, I specialize
          in React, Next.js, TypeScript, and Node.js. I'm always eager to learn
          new technologies and take on challenging projects.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-48 h-48 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <Image
            src="/profile.png"
            alt="Profile Image"
            width={200}
            height={200}
            className="w-full- h-full object-cover rounded-full"
          ></Image>
        </div>
      </div>
    </div>
  );
}
