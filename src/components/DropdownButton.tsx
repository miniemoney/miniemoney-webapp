import useOutsideClick from "@/hooks/useOutsideClick";
import { DropdownButtonProps } from "@/types/button";
import { useRef, useState } from "react";
import CustomButton from "./CustomButton";


function DropdownButton({
  dropdownContent,
  ...customButtonProps
}: DropdownButtonProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    setDropdownOpen(false);
    setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  };

  const openDropdown = () => {
    setShowDropdown(true);
    setTimeout(() => {
      setDropdownOpen(true);
    }, 50);
  };

  useOutsideClick(dropdownRef, closeDropdown);

  return (
    <div ref={dropdownRef} className="relative">
      <CustomButton
        {...customButtonProps}
        onClick={() => {
          if (showDropdown) {
            closeDropdown();
          } else {
            openDropdown();
          }
        }}
      />
      {showDropdown && (
        <div
          className={`overflow-hidden min-w-[180px] absolute right-0 top-[44px] z-10 -translate-y-4 rounded-[12px] border border-gray-200 bg-white shadow-lg transition-all ${
            dropdownOpen
              ? "opacity-100 translate-y-0"
              : "-translate-y-4 opacity-0"
          }`}
        >
          {dropdownContent}
        </div>
      )}
    </div>
  );
}

export function MobileDropdownButton({
  dropdownContent,
  ...customButtonProps
}: DropdownButtonProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    setDropdownOpen(false);
    setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  };

  const openDropdown = () => {
    setShowDropdown(true);
    setTimeout(() => {
      setDropdownOpen(true);
    }, 50);
  };

  useOutsideClick(dropdownRef, closeDropdown);

  return (
    <div ref={dropdownRef} className="flex flex-col gap-2 w-full items-start">
      <CustomButton
        {...customButtonProps}
        onClick={() => {
          if (showDropdown) {
            closeDropdown();
          } else {
            openDropdown();
          }
        }}
      />
      {showDropdown && (
        <div
          className={`w-full z-10 -translate-y-4 rounded-[12px] border border-gray-200 bg-white shadow-lg transition-all ${
            dropdownOpen
              ? "opacity-100 translate-y-0"
              : "-translate-y-4 opacity-0"
          }`}
        >
          {dropdownContent}
        </div>
      )}
    </div>
  );
}

export default DropdownButton;
