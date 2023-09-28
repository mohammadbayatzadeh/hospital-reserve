type Props = {
  color: string;
  w?: string | number | undefined;
  h?: string | number | undefined;
};

function PatientIcon({ color, h, w }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w ? w : "24"}
      height={h ? h : "18"}
      viewBox="0 0 24 18"
      fill="none"
      className="ml-1"
    >
      <path
        d="M0 18V0H24V18H0ZM0 18H24V0H0V18ZM4.5 13.5H6V11.25H18V13.5H19.5V7.5C19.5 6.675 19.2062 5.96875 18.6187 5.38125C18.0312 4.79375 17.325 4.5 16.5 4.5H11.25V9.75H6V3H4.5V13.5ZM8.625 9C9.15 9 9.59375 8.81875 9.95625 8.45625C10.3187 8.09375 10.5 7.65 10.5 7.125C10.5 6.6 10.3187 6.15625 9.95625 5.79375C9.59375 5.43125 9.15 5.25 8.625 5.25C8.1 5.25 7.65625 5.43125 7.29375 5.79375C6.93125 6.15625 6.75 6.6 6.75 7.125C6.75 7.65 6.93125 8.09375 7.29375 8.45625C7.65625 8.81875 8.1 9 8.625 9Z"
        fill={color}
      />
    </svg>
  );
}

export default PatientIcon;
