import React from "react";
import SidebarData from "./../data/sidebarData.json";
import Avatar from "./../assets/my-avatar.png";
import EmailIcon from "../assets/email.svg";
import PhoneIcon from "./../assets/phone.svg";
import CalendarIcon from "./../assets/calendar.svg";
import LocationIcon from "./../assets/location.svg";

import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-background_secondary border border-border_primary rounded-[30px] overflow-hidden p-6">
      <div className="flex flex-col gap-4 py-8 border-b-2 border-background_ternary items-center">
        <div className="bg-background_ternary flex flex-col items-center justify-center rounded-[30px] m-2">
          <img src={Avatar} className="w-36" />
        </div>
        <h1 className="text-[22px] font-medium text-text_white">
          {SidebarData.name}
        </h1>
        <div className="bg-background_ternary bg-opacity-50 px-4 py-2 rounded-md text-text_white text-xs text-opacity-60">
          <p>{SidebarData.designation}</p>
        </div>
      </div>
      <div className="flex flex-col gap-8 py-8">
        
        <div className="grid grid-cols-[48px_auto] gap-x-2 gap-y-[28px]">
          <div className="bg-gradient-to-br from-text_yellow/30 via-transparent to-background_primary p-[1px] rounded-[10px] shadow-md">
            <div className=" bg-background_secondary p-[12px] rounded-[9px]">
              <img src={EmailIcon} className="opacity-80" />
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="text-xs text-white opacity-60">{SidebarData.userDetails[0].field}</p>
            <p className="text-white opacity-80 text-sm line-clamp-1">
              {SidebarData.userDetails[0].value}
            </p>
          </div>
          <div className="bg-gradient-to-br from-text_yellow/30 via-transparent to-background_primary p-[1px] rounded-[10px] shadow-md">
            <div className=" bg-background_secondary p-[12px] rounded-[9px]">
              <img src={EmailIcon} className="opacity-80" />
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="text-xs text-white opacity-60">{SidebarData.userDetails[1].field}</p>
            <p className="text-white opacity-80 text-sm line-clamp-1">
              {SidebarData.userDetails[1].value}
            </p>
          </div>
          <div className="bg-gradient-to-br from-text_yellow/30 via-transparent to-background_primary p-[1px] rounded-[10px] shadow-md">
            <div className=" bg-background_secondary p-[12px] rounded-[9px]">
              <img src={EmailIcon} className="opacity-80" />
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="text-xs text-white opacity-60">{SidebarData.userDetails[2].field}</p>
            <p className="text-white opacity-80 text-sm line-clamp-1">
              {SidebarData.userDetails[2].value}
            </p>
          </div>
          <div className="bg-gradient-to-br from-text_yellow/30 via-transparent to-background_primary p-[1px] rounded-[10px] shadow-md">
            <div className=" bg-background_secondary p-[12px] rounded-[9px]">
              <img src={EmailIcon} className="opacity-80" />
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="text-xs text-white opacity-60">{SidebarData.userDetails[3].field}</p>
            <p className="text-white opacity-80 text-sm line-clamp-1">
              {SidebarData.userDetails[3].value}
            </p>
          </div>
        </div>
        
      </div>
      <div className="flex justify-center gap-4 text-text_yellow my-4">
        <span>
          <IoLogoFacebook />
        </span>
        <span>
          <IoLogoInstagram />
        </span>
        <span>
          <IoLogoTwitter />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
