//icons
import {
  TbBrandNextjs,
  TbBrandGithubFilled,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandReactNative,
  TbBrandHtml5,
} from "react-icons/tb";

//components
import SupporterItem from "../elements/landing/SupporterItem";

function Supporters() {
  return (
    <div className="mb-10">
      <h4 className="text-center text-3xl text-bg-primary m-4">حامیان ما</h4>
      <div className="w-full flex flex-wrap justify-around text-8xl text-gray-300 ">
        <SupporterItem icon={<TbBrandHtml5 />} />
        <SupporterItem icon={<TbBrandNextjs />} />
        <SupporterItem icon={<TbBrandCss3 />} />
        <SupporterItem icon={<TbBrandGithubFilled />} />
        <SupporterItem icon={<TbBrandJavascript />} />
        <SupporterItem icon={<TbBrandTailwind />} />
        <SupporterItem icon={<TbBrandReactNative />} />
        <SupporterItem icon={<TbBrandTypescript />} />
      </div>
    </div>
  );
}

export default Supporters;
