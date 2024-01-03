//icons
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

type Props = { image: String };

function Doctor({ image }: Props) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 mb-5">
      <div className="group w-full sm:w-11/12 flex flex-col items-center rounded-lg border-t-4 border-solid border-bg-primary relative">
        <div className="w-40 hidden group-hover:flex justify-between text-bg-primary text-3xl absolute top-[100px] z-10">
          <BsFacebook />
          <AiFillInstagram />
          <AiFillTwitterCircle />
        </div>
        <img
          alt="doctor"
          src={require(`../../../images/doctros/doctor${image}.jpg`)}
          className="w-full h-[300px] rounded-t-lg transition-all group-hover:blur-sm"
        />
        <div className="p-2 border-2  border-solid border-bg-primary rounded-b-lg">
          <p className="text-bg-primary font-bold text-xl">دکتر بیمارستان</p>
          <p className="text-sm text-text-secondary">متخصص</p>
          <p className="text-xs text-text-secondary text-justify line-clamp-5 my-2 ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آیندهs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
