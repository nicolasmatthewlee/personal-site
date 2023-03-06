import PROFILE from "../assets/placeholder.jpg";

export const Title = () => {
  return (
    <div
      className="w-full flex flex-col px-[30px] space-y-[60px]
    lg:flex-row lg:space-y-0 lg:justify-end lg:items-center lg:px-[10%]"
    >
      <div
        className="
      lg:absolute lg:left-[30px] lg:top-[150px] lg:px-[5%]"
      >
        <h1 className="text-5xl font-medium">Nicolas Lee</h1>
        <h1 className="text-5xl text-gray-600 relative">
          Full stack developer
        </h1>
      </div>
      <div className="flex justify-center">
        <img
          src={PROFILE}
          alt="nicolas lee"
          className="rounded object-fit w-[330px] shadow"
        />
      </div>
    </div>
  );
};
