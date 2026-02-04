interface AboutHeadingProps {
  className?: string;
}

export const AboutHeading: React.FC<AboutHeadingProps> = ({
  className = "",
}) => {
  return (
    <h1
      className={`self-start mt-20 text-6xl font-bold text-zinc-700 max-md:mt-10 max-md:text-4xl ${className}`}
    >
      <span className="">About</span> <span className="text-myred-500">me</span>
    </h1>
  );
};
