import cx from "classnames";
import { twMerge } from "tailwind-merge";

export default function Buttons({
  children,
  handleClick,
  nah,
  onhover,
  click,
}) {
  const classes = twMerge(
    cx("flex items-center px-8 py-3 border", {
      "border-blue-500 bg-blue-600 text-white": nah,
      "border-gray-900 bg-gray-800 text-white": onhover,
      "border-green-500 bg-green-600 text-white": click,
    })
  );

  return (
    <button className={classes} onClick={handleClick}>
      {children}
    </button>
  );
}
