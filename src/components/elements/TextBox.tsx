type Props = { form: any; name: string; setForm: any };

function TextBox({ form, name, setForm }: Props) {
  const changeHandler = (e: any) => {
    setForm({ ...form, [name]: e.target.value });
  };

  return (
    <input
      className="w-full my-5 bg-transparent border-y-2 border-bg-primary rounded-lg p-2 "
      placeholder="نام کاربری"
      name={name}
      type={name}
      value={form[name]}
      onChange={changeHandler}
    />
  );
}

export default TextBox;
