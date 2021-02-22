import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { FiInstagram, FiMail } from 'react-icons/fi'
import { IoCall } from 'react-icons/io5'
import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'

const FooterCommon = () => {
  return (
    <div className="relative lg:bg-footer-pattern bg-mobile-footer-pattern bg-cover">
      <div className="absolute w-full h-1 bg-black top-0"></div>
      <div
        className="absolute top-2/3 transform sm:block hidden -translate-y-full right-0 z-40"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }}
      >
        <h1 className="text-white transform rotate-90 text-xl font-light flex items-center cursor-pointer">
          <BsArrowLeft className="text-white mr-2 text-2xl" />
          Back to top
        </h1>
      </div>

      <div className="relative">
        <div className="absolute flex text-white md:text-2xl text-xl md:top-20 md:bottom-auto top-auto bottom-24 right-1/2 transform translate-x-1/2 md:translate-x-0 md:right-16">
          <Link href="https://www.instagram.com/srmkzilla/">
            <div className="md:h-12 group h-10 relative md:w-12 w-10 border hover:border-logoGreen border-white rounded-full mr-3">
              <FiInstagram className="absolute group-hover:text-logoGreen left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
            </div>
          </Link>
          <Link href="https://m.facebook.com/SRMKZILLA/">
            <div className="md:h-12 group h-10 relative md:w-12 w-10 border hover:border-logoGreen border-white rounded-full mr-3">
              <FaFacebookF className="absolute group-hover:text-logoGreen left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
            </div>
          </Link>
          <Link href="https://twitter.com/SRMKZILLA_Club">
            <div className="md:h-12 group h-10 relative md:w-12 w-10 border hover:border-logoGreen border-white rounded-full mr-3">
              <FaTwitter className="absolute group-hover:text-logoGreen left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/company/srmkzilla/">
            <div className="md:h-12 group h-10 relative md:w-12 w-10 border hover:border-logoGreen border-white rounded-full mr-3">
              <FaLinkedinIn className="absolute group-hover:text-logoGreen left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
            </div>
          </Link>
        </div>
        <div className="flex justify-center lg:justify-end md:pt-52 pt-24 pb-20 text-white lg:pr-72 pr-auto">
          <div className="md:mr-28 mr-12 ml-2 sm:block hidden">
            <h1 className="md:text-2xl text-xl relative">
              Explore
              <div className="absolute top-full mt-2 left-0 w-24 md:w-32 h-1 bg-white opacity-25"></div>
              <div className="absolute top-full h-1 mt-2 w-16 md:w-24 bg-baseBlue left-0"></div>
            </h1>
            <div className="mt-8 text-sm md:text-lg">
              <Link href="/">
                <p className="cursor-pointer">Home</p>
              </Link>
              <Link href="https://events.srmkzilla.net/">
                <p className="mt-2 cursor-pointer">Events</p>
              </Link>
              <Link href="/about">
                <p className="mt-2 cursor-pointer">About Us</p>
              </Link>
              <Link href="/services">
                <p className="mt-2 cursor-pointer">Our services</p>
              </Link>
              <Link href="/team">
                <p className="mt-2 cursor-pointer text-logoGreen">Team</p>
              </Link>
            </div>
          </div>

          {/* second */}
          <div>
            <h1 className="md:text-2xl text-xl relative">
              Get in touch
              <div className="absolute top-full mt-2 left-0 w-24 md:w-32 h-1 bg-white opacity-25"></div>
              <div className="absolute top-full h-1 mt-2 w-16 md:w-24 bg-baseBlue left-0"></div>
            </h1>
            <div className="mt-8 text-sm md:text-lg">
              <Link href="mailto:hello@srmkzilla.net">
                <p className="cursor-pointer flex items-center">
                  <FiMail className="text-green-500 mr-2" />
                  hello@srmkzilla.net
                </p>
              </Link>
              <Link href="tel:7869858868">
                <p className="mt-2 cursor-pointer flex items-center">
                  <IoCall className="text-green-500 mr-2" />
                  Akshat Sinha
                </p>
              </Link>
              <Link href="tel:9685159058">
                <p className="mt-2 cursor-pointer flex items-center">
                  <IoCall className="text-green-500 mr-2" />
                  Ishan Chabbra
                </p>
              </Link>
              <Link href="tel:7978309039">
                <p className="mt-2 cursor-pointer flex items-center">
                  <IoCall className="text-green-500 mr-2" />
                  Sweta Nayak
                </p>
              </Link>
            </div>
          </div>

          {/* second */}
        </div>
        <h1 className="text-center text-white mt-16 text-sm md:mt-auto pb-5">
          &#169; crafted with ❤️ by SRMKZILLA 2021
        </h1>
      </div>
    </div>
  )
}

export default FooterCommon