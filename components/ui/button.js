import classes from "./button.module.css";
import Link from "next/link";

function Button({ children, link }) {
  return (
    <Link href={link} legacyBehavior>
      <a className={classes.btn}>{children}</a>
    </Link>
  );
}

export default Button;