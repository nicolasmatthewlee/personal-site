interface Props {
  text: string;
}

export const Tag = ({ text }: Props) => {
  return (
    <h3 className="text-sm w-fit bg-gray-800 text-white rounded-[5px] px-[10px] py-[3px] border-t-[2px] border-gray-500 truncate whitespace-nowrap">
      {text}
    </h3>
  );
};
