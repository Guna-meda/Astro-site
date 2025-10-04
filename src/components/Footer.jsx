"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Youtube,
  Sun,
} from "lucide-react";

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
              <h3 className="font-heading text-xl font-semibold text-white">
                INDU MOULI
              </h3>
            </div>
            <p className="text-gray-200 mb-4">
              Dedicated to preserving and sharing the sacred traditions of Hindu
              rituals, astrology, and Vastu Shastra to bring peace, prosperity,
              and spiritual alignment.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/puro.hit1975/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="http://www.youtube.com/@srisadgurukrupajyothishyal7855"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-200 hover:text-secondary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-200 hover:text-secondary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-200 hover:text-secondary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-200 hover:text-secondary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-gray-200">
                  No.33 Sri Sadguru Krupa Nilayam, BSK 6th Stage, Bangalore,
                  Karnataka, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <div className="flex flex-col">
                  <a
                    href="tel:+919448225002"
                    className="text-gray-200 hover:text-secondary transition-colors"
                  >
                    +91 94482 25002
                  </a>
                  <a
                    href="tel:+918618280659"
                    className="text-gray-200 hover:text-secondary transition-colors"
                  >
                    +91 86182 80659
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <a
                  href="mailto:mouli.indu25@gmail.com"
                  className="text-gray-200 hover:text-secondary transition-colors"
                >
                  mouli.indu25@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-600 my-6"></div>

        {/* Copyright & Developer Credit */}
        <div className="text-center text-gray-300 text-sm space-y-1">
          <p>
            &copy; {currentYear} Indu Mouli Purohit Services. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-400">
            Developed by {""}
           <a
  href="https://gunaportfilo.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:underline cursor-pointer text-blue-400 hover:text-blue-300 transition-colors"
>
  Guna
</a>

          </p>
        </div>
      </div>
    </footer>
  );
}
