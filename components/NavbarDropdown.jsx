"use client";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Head from "next/head";
import { Menu, Transition, Disclosure } from "@headlessui/react";


import { ChevronDownIcon } from "@heroicons/react";
import LogoImg from "/public/disney-dreamers-guide-low-resolution-logo-white-on-transparent-background.png";

export default function NavbarDropdown() {
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Articles", path: "/articles" },
    {
      title: "Wait Times",
      path: "#",
      children: [
        { title: "Magic Kingdom", path: "/wait-times/magic-kingdom" },
        { title: "Epcot", path: "/wait-times/epcot" },
        { title: "Hollywood Studios", path: "/wait-times/hollywood-studios" },
        { title: "Animal Kingdom", path: "/wait-times/animal-kingdom" },
      ],
    },
  ];

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com/" />
        <title>TDisney Dreamer`&apos;`s Guide</title>
      </Head>
      <Script
        async
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.1/iframeResizer.contentWindow.min.js"
        integrity="sha512-qw2bX9KUhi7HLuUloyRsvxRlWJvj0u0JWVegc5tf7qsw47T0pwXZIk1Kyc0utTH3NlrpHtLa4HYTVUyHBr9Ufg=="
        crossOrigin="anonymous"
      />
      <div className="w-full min-h-[250px]">
        <nav className="relative flex flex-wrap items-center justify-between px-8 py-6 mx-auto lg:justify-between">
          {/* Logo  */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                  <Link href="#" className="flex items-center space-x-2 text-2xl font-medium text-indigo-900 dark:text-gray-100">
                      <Image src={LogoImg} alt="logo" />
                  </Link>

                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-700 rounded-md lg:hidden hover:text-indigo-900 focus:text-indigo-900 focus:bg-indigo-50 focus:outline-none ">
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className="flex flex-col w-full my-5 lg:hidden">
                    <>
                      <NavMenu
                        navigation={navigation}
                        mobile={true}
                      />
                    </>
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>

          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 lg:pt-0 list-reset lg:flex">
              <NavMenu navigation={navigation} />
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

const NavMenu = (props) => {
  return (
    <>
      {props.navigation.map((item, index) => {
        return (
          <div key={index}>
            {item.children && item.children.length > 0 ? (
              <DropdownMenu
                menu={item}
                items={item.children}
                mobile={props.mobile}
              />
            ) : (
              <MenuItem item={item} mobile={props.mobile} />
            )}
          </div>
        );
      })}
    </>
  );
};

const MenuItem = ({ item, mobile }) => {
  return (
    <Link href={item?.path ? item.path : "#"} 
        className={`
        text-gray-700 dark:text-gray-300 rounded-md
    outline-none hover:text-indigo-500 focus:text-indigo-500  transition-all
     focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none ${
       mobile
         ? "w-full block px-4 py-2 -ml-4"
         : "inline-block px-6 py-2"
     }`}>
        {item.title}
    </Link>
  );
};

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu as="div" className="relative text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center gap-x-1 transition-all rounded-md outline-none focus:outline-none ${
              open
                ? "text-indigo-500   hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 dark:focus:bg-gray-800 "
                : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800  focus:text-indigo-500"
            }  ${
              mobile
                ? "w-full px-4 py-2 -ml-4"
                : "inline-block px-4 py-2"
            }`}>
            <span>{menu.title}</span>
            <ChevronDownIcon className="w-4 h-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95">
            <Menu.Items
              className={`z-20 lg:w-56 origin-top-left  rounded-md  lg:absolute lg:right-0  focus:outline-none ${
                mobile ? "" : "  bg-white shadow-lg  dark:bg-gray-800"
              }`}>
              <div className={`${!mobile ? "py-3" : ""}`}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={index}>
                    {({ active }) => (
                      <Link href={item?.path ? item.path : "#"} className={`flex space-x-2 lg:space-x-4 items-center px-5 py-2
                          ${
                            active
                              ? "  text-indigo-500"
                              : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500"
                          }
                          `}>
                          <span> {item.title}</span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
