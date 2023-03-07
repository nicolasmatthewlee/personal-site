import IMAGE from "../assets/header.png";

export const Title = () => {
  return (
    <div
      className="w-full flex flex-col justify-center space-y-[60px] px-[60px]
    lg:space-x-[30px] lg:flex-row lg:space-y-0 lg:justify-around lg:items-center"
    >
      <div className="z-10 text-gray-800">
        <h1 className="text-5xl font-medium">
          Nicolas Lee
          <br />
          <span className="text-gray-600 font-normal lg:whitespace-nowrap">
            Full stack developer
          </span>
        </h1>
      </div>
      <div className="flex justify-center">
        <img
          src={IMAGE}
          alt="nicolas lee"
          className="rounded object-fit max-w-[330px] shadow opacity-90"
        />
      </div>
    </div>
  );
};
