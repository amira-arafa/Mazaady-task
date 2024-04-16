"use client";
import Accordion from "../../_sharedComponents/Accordion/Accordion";
import { useState } from "react";
import "./FollowUs.css";

export default function FollowUs() {
  const [isOpen, setIsOpen] = useState(false);
  const renderAccordionContent = () => {
    return (
      <div className="mt-16">
        <div className="flex bg-ligthOrange gap-4 rounded-18 py-18 px-16 items-center mb-8 xl:mb-16">
          <div className="flex-shrink-0">
            <img src="/assets/document.svg"></img>
          </div>
          <div>
            <p className="font-nunito text-xs text-black font-normal">
              Download the QR code or share it with your friends.
            </p>
          </div>
        </div>
        <div className="qr_border p-16 rounded-20 overflow-hidden">
          <div className="p-13 rounded-13 bg-white flex items-center flex-col overflow-hidden">
            <img className="mb-sm xl:mb-8" src="/assets/logo.png"></img>
            <p className="font-nunito font-bold xl:text-xl text-md text-darkGray">
              Hala Ahmed
            </p>
            <img className="mb-4" src="/assets/qr_code.svg"></img>
            <p className="font-nunito text-black text-sm font-normal">
              Follow Us on Mazaady
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-4">
          <h3 className="font-nunito font-bold xl:text-xl text-md text-black">
            QR Code
          </h3>
        </div>
        <div className="col-span-8 justify-self-end flex">
          <div className="mr-md cursor-pointer">
            <img src="/assets/eye.svg" />
          </div>
          <div className="mr-md cursor-pointer">
            <img src="/assets/share.svg" />
          </div>
          <div className="cursor-pointer">
            <img src="/assets/download.svg" />
          </div>
          <Accordion
            onToggle={(openStatus) => setIsOpen(openStatus)}
            btnClass="ml-md"
            className="block xl:hidden"
          />
        </div>
      </div>
      <div className=" xl:block hidden">{renderAccordionContent()}</div>
      {isOpen && (
        <div className=" block xl:hidden">{renderAccordionContent()}</div>
      )}
    </>
  );
}
