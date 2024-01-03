//components
import Footerpart from "../modules/general/Footerpart";

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center border-t-4 border-bg-primary rounded-t-lg p-5">
      <h4>
        <a href="/" className="flex item-center w-fit">
          <img
            alt="logo"
            src={require("../../images/main.png")}
            className=" w-[60px] h-[60px]"
          />
          <h1 className="text-base md:text-3xl w-fit text-bg-primary mb-2 p-3 rounded-t-lg cursor-pointer z-10">
            سامانه رزور تخت
          </h1>
        </a>
      </h4>
      <div className="w-full flex lg:flex-row flex-col justify-between">
        <p className="w-full text-text-secondary text-sm text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <div className="w-full flex flex-col sm:flex-row justify-between text-text-secondary px-0 lg:px-3">
          <Footerpart
            title="راه های ارتباطی"
            items={["اینستاگرام", "تلگرام", "واتساپ", "توییتر"]}
          />
          <Footerpart
            title="آدرس دفتر"
            items={["استان", "شهر", "کوچه", "پلاک"]}
          />
          <Footerpart
            title="راه های ارتباطی"
            items={["اینستاگرام", "تلگرام", "واتساپ", "توییتر"]}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
