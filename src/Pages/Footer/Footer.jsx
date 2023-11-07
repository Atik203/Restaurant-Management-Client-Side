const Footer = () => {
  return (
    <div className=" bg-red-500">
      <footer className="footer text-white p-12 md:p-12 md:flex md:gap-4 lg:grid ">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Photography & Video</a>
          <a className="link link-hover">Beauty & Makeup</a>
          <a className="link link-hover">Wedding Cake</a>
          <a className="link link-hover">Jewellery</a>
        </nav>

        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Location</a>
        </nav>

        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <p className="text-sm mb-1 text-center text-gray-300">
        &copy;2023 All Rights Reserved | RestoControl
      </p>
    </div>
  );
};

export default Footer;
