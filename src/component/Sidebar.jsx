import React from "react";
import SidebarData from "./../data/sidebarData.json";
import Avatar from "./../assets/my-avatar.png";
import EmailIcon from '../assets/email.svg'
import PhoneIcon from "./../assets/phone.svg";
import CalendarIcon from "./../assets/calendar.svg";
import LocationIcon from "./../assets/location.svg";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-background_secondary border border-border_primary rounded-[30px] overflow-hidden p-8">
      <div className="flex flex-col gap-4 py-8 border-b-2 border-background_ternary items-center">
        <div className="bg-background_ternary flex flex-col items-center justify-center rounded-[30px] m-6">
          <img src={Avatar} />
        </div>
        <h1 className="text-xl font-semibold text-text_white">
          {SidebarData.name}
        </h1>
        <div className="bg-background_ternary bg-opacity-50 px-4 py-1 rounded-md text-text_white text-sm text-opacity-60">
          <p>{SidebarData.designation}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
      <div className="flex items-center">
          <span className="w-[30%] p-2 rounded-xl">
            <img className="w-6 h-6" src={EmailIcon} />
          </span>
          <div>
            <p>{SidebarData.userDetails[0].field}</p>
            <p className="break-normal">{SidebarData.userDetails[0].value}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="p-2 rounded-xl">
            <img className="w-6 h-6" src={PhoneIcon} />
          </span>
          <div>
            <p>{SidebarData.userDetails[1].field}</p>
            <p>{SidebarData.userDetails[1].value}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="p-2 rounded-xl">
            <img className="w-6 h-6" src={CalendarIcon} />
          </span>
          <div>
            <p>{SidebarData.userDetails[2].field}</p>
            <p>{SidebarData.userDetails[2].value}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="p-2 rounded-xl">
            <img className="w-6 h-6" src={LocationIcon} />
          </span>
          <div>
            <p>{SidebarData.userDetails[3].field}</p>
            <p>{SidebarData.userDetails[3].value}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
