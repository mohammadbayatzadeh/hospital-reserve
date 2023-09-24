import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-full bg-white rounded-lg flex items-center p-1 my-4">
      <select
        id="mon-menu-deroulant"
        className="bg-white w-full py-2 pr-1 border-l-2 border-solid border-text-tertiary"
      >
        <option value="option1">بیمارستان امام خمینی</option>
        <option value="option2">بیمارستان گلستان </option>
        <option value="option3">بیمارستان مهر</option>
        <option value="option4">بیمارستان رازی</option>
      </select>
      <select
        id="mon-menu-deroulant"
        className="bg-white w-full py-2 pr-1 border-l-2 border-solid border-text-tertiary"
      >
        <option value="all">همه ساختمان ها</option>
        <option value="option2"> ساختمان شماره یک </option>
        <option value="option3"> ساختمان شماره دو</option>
      </select>
      <select
        id="mon-menu-deroulant"
        className="bg-white w-full py-2 pr-1 border-l-2 border-solid border-text-tertiary"
      >
        <option value="all">تخت قابل رزرو</option>
        <option value="option2"></option>
        <option value="option3">  شماره دو</option>
      </select>
    </nav>
  );
};

export default Navbar;
