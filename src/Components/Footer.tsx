const Footer: React.FC = () => {
  const services = [
    "Hand Holding",
    "Land Monitoring",
    "Thorough Legal Verification",
    "Get Your Land Surveyed",
  ];
  const company = [
    { label: "Terms and Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Blog", href: "#" },
  ];
  const contactInfo = {
    phone: "+91-9390674324",
    email: "support@1acre.in",
  };

  return (
    <footer className="py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-xl mb-4">Services</h3>
          <ul className="flex flex-col space-y-2 text-center">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-xl mb-4">Company</h3>
          <ul className="flex flex-col space-y-2 text-center">
            {company.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-gray-500 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-xl mb-4">Contact Us</h3>
          <p>Phone: {contactInfo.phone}</p>
          <p>Email: {contactInfo.email}</p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        <p className="text-2xl font-semibold">
          © 2023 - 1acre.in - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
