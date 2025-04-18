import React from 'react'
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router';
import { Link as ScrollLink } from 'react-scroll';

function Footer() {
    return (
        <footer className="bg-[#222222] text-[#CCCCCC]">
          <hr className=' w-[95%] mx-auto'/>
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <h4 className="text-xl font-bold mb-4">Prgathi Infra And Realty Pvt. Ltd</h4>
                <p className="text-white/80 mb-6 ">
                 Promoted by <span className=' font-bold cta-text-color'>Pragathi Infra And Realty</span>
                </p>
              </div>
    
              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <FooterLink href="/">Home</FooterLink>
                  <WebLink href="overview">Overview</WebLink>
                  <WebLink href="master plan">Master Plan</WebLink>
                  <WebLink href="about">About</WebLink>
                  <WebLink href="projects">Projects</WebLink>
                </ul>
              </div>
    
              {/* Legal */}
              <div>
                <h4 className="text-xl font-bold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <FooterLink href="#">Privacy Policy</FooterLink>
                  <FooterLink href="/#">Terms & Conditions</FooterLink>
                  <FooterLink href="#">Cookie Policy</FooterLink>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-xl font-bold mb-4">Contact Us</h4>
                <address className="not-italic">
                  <div className="flex items-center space-x-3 mb-3 font-bold">
                    <FiPhone className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-white/80">+91 9845041912 <br />+91 9900099963</span>
                  </div>
                  <div className="flex items-center space-x-3 font-bold">
                    <MdOutlineEmail className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-white/80">sales@pragathiinfrarealty.com</span>
                  </div>
                </address>
              </div>
              
            </div>
    
            <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-[#CCCCCC] text-sm">&copy; {new Date().getFullYear()} Pragathi Infra Reality. All rights reserved.</p>
            </div>
          </div>
        </footer>
    )
}

function WebLink({ href, children }) {
    return (
      <li>
        <ScrollLink to={href} smooth={true} duration={800} className="text-[#CCCCCC] hover:text-[#FF6F61] transition-colors">
          {children}
        </ScrollLink>
      </li>
    )
  }
  
  function FooterLink({ href, children }) {
    return (
      <li>
        <Link to={href} className="text-[#CCCCCC] hover:text-[#FF6F61] transition-colors">
          {children}
        </Link>
      </li>
    )
  }
  

export default Footer