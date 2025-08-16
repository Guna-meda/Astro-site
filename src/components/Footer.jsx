"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Sun } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sun className="h-8 w-8 text-secondary" />
              <h3 className="font-heading text-xl font-semibold text-white">INDU MOULI</h3>
            </div>
            <p className="text-gray-200 mb-4">
              Dedicated to preserving and sharing the sacred traditions of Hindu rituals,
              astrology, and Vastu Shastra to bring peace, prosperity, and spiritual alignment.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-200 hover:text-secondary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-secondary transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-secondary transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-gray-200">123 Temple Street, Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <a href="tel:+919876543210" className="text-gray-200 hover:text-secondary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:contact@indumoulipurohit.com" className="text-gray-200 hover:text-secondary transition-colors">
                  contact@indumoulipurohit.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-600 my-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-300 text-sm">
          <p>&copy; {currentYear} Indu Mouli Purohit Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
