type Props = {
  image: String;
  title: String;
};

function BannerItem({ image, title }: Props) {
  return (
    <div className="w-full relative border-2 border-t-4 border-solid border-bg-primary rounded-b-lg">
      <img
        src={require(`../../images/banners/banner${image}.${
          image === "2" ? "jpg" : "png"
        }`)}
        alt="banner"
        className="w-full h-[300px] md:h-[550px] bg-contain opacity-70"
      />
      <h3 className="absolute top-5 right-2 p-3 bg-bg-primary text-white rounded-lg md:text-3xl">
        {title}
      </h3>
      <a href="/hospital-page" className="absolute top-20 md:top-24 right-2 p-2 bg-bg-primary text-white text-sm rounded-lg hover:bg-bg-tertiary transition-all cursor-pointer">
        همین الان رزرو کنید
      </a>
    </div>
  );
}

export default BannerItem;
