const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10 text-white">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          © 2024 Teeweety. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400 hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-400 hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
