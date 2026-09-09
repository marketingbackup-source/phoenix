"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

export default function BaseModal({
  isOpen,
  onClose,
  children,

  // Custom styling control
  overlayClass = "",
  modalClass = "",
  closeButtonClass = "",

  showClose = true,
}) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);


  if (!isOpen) return null;


  return (
    <div
      className={`
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      p-5
      backdrop-blur-sm
      bg-black/60
      animate-in
      fade-in
      duration-300
      ${overlayClass}
      `}
      onClick={onClose}
    >

      <div
        className={`
        relative
        bg-white
        shadow-2xl
        rounded-2xl
        animate-in
        zoom-in-95
        duration-300
        ${modalClass}
        `}
        onClick={(e) => e.stopPropagation()}
      >

        {showClose && (
          <button
            type="button"
            onClick={onClose}
            className={`
            absolute
            right-4
            top-4
            z-10
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-gray-100
            text-gray-600
            transition
            hover:bg-gray-200
            ${closeButtonClass}
            `}
          >
            <X size={18} />
          </button>
        )}


        {children}


      </div>

    </div>
  );
}