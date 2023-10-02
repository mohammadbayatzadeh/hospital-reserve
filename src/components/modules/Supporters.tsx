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

function Supporters() {
  return (
    <div className="mb-10">
      <h4 className="text-center text-3xl text-bg-primary m-4">حامیان ما</h4>
      <div className="w-full flex flex-wrap justify-around text-8xl text-gray-300 ">
        <div className="transition-all duration-500 hover:text-bg-primary">
          <TbBrandHtml5 />
        </div>
        <div className="transition-all duration-500 hover:text-bg-primary   ">
          <TbBrandNextjs />
        </div>
        <div className="transition-all duration-500 hover:text-bg-primary   ">
          <TbBrandCss3 />
        </div>
        <div className="transition-all duration-500 hover:text-bg-primary   ">
          <TbBrandGithubFilled />
        </div>
        <div className="transition-all duration-500 hover:text-bg-primary   ">
          <TbBrandJavascript />
        </div>
        <div className="transition-all duration-500 hover:text-bg-primary   ">
          <TbBrandTypescript />
        </div>
        <div className="transition-all duration-500 hover:text-bg-primary   ">
          <TbBrandTailwind />
        </div>
        <div className="transition-all duration-500 hover:text-bg-primary   ">
          <TbBrandReactNative />
        </div>
      </div>
    </div>
  );
}

export default Supporters;
