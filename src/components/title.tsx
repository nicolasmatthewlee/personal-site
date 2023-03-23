import IMAGE from "../assets/bitmap.png";

export const Title = () => {
  return (
    <div
      className="w-full flex flex-col justify-center space-y-[60px] px-[30px]
      sm:px-[75px]
      md:px-[60px]
    lg:space-x-[30px] lg:flex-row lg:space-y-0 lg:justify-around lg:items-center"
    >
      <div className="z-10 text-gray-800">
        <h1
          className="text-4xl font-medium
        sm:text-5xl"
        >
          Nicolas Lee
          <br />
          <span
            className="text-gray-600 text-3xl font-normal lg:whitespace-nowrap
          sm:text-4xl"
          >
            Full stack developer
          </span>
        </h1>
      </div>
      <div className="flex justify-center">
        <div
          className="w-[330px] pt-[248px] bg-gray-100 rounded relative
        lg:pt-[75%]"
        >
          <img
            src={IMAGE}
            alt="nicolas lee"
            className="object-cover rounded w-full h-full opacity-90 absolute top-0"
          />
        </div>
      </div>
    </div>
  );
};
