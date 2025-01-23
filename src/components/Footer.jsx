const date = new Date().getFullYear();
const Footer = () => (
  <div className="flex items-center justify-center gap-4 text-sm p-4">
    <h1 className="text-white text-md font-bold">
      © {date} Khadalicioso. All Rights Reserved.
    </h1>
  </div>
);

export default Footer;
