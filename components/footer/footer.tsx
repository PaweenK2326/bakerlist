import NavLink from "../nav-link/nav-link";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={classes.space}></div>
      <footer className={classes.footer}>
        <div className="w-full grid grid-cols-6">
          <div className="col-start-2 col-span-4 flex justify-between">
            <div className="flex flex-col gap-1 justify-center">
              <p>Bakerlist 2024</p>
              <p>Powered by PonGz & Kookkai</p>
              <p>Cheering by Yuki & Suna the guineapig</p>
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <NavLink href="/report-bug">Report Bug</NavLink>
              <NavLink href="/contact-us">Contact Us</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
