import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Link className="btn" href="/">
        Back to Home
      </Link>
      <p>Copyright 2021 Ninja List</p>
    </footer>
  );
};

export default Footer;
