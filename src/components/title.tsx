import PROFILE from "../assets/placeholder.jpg";

export const Title = () => {
  return (
    <div
      className="w-full flex flex-col px-[30px] space-y-[60px]
    md:flex-row md:space-y-0 md:justify-end md:items-center"
    >
      <div
        className="
      md:absolute md:left-[30px] md:top-[150px]"
      >
        <h1 className="text-5xl font-medium">Nicolas Lee</h1>
        <h1 className="text-5xl text-gray-600">Full stack developer</h1>
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
