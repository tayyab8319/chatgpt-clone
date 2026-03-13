"use client";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import SocialButton from "./SocialButton";

const providers = [
  { id: "google",   label: "Google",   icon: <FcGoogle size={20} /> },
  { id: "github",   label: "GitHub",   icon: <FaGithub size={20} className="text-gray-800" /> },
  { id: "facebook", label: "Facebook", icon: <FaFacebook size={20} className="text-[#1877F2]" /> },
];

export default function SocialProviders() {
  return (
    <div className="flex flex-col gap-2.5">
      {providers.map(({ id, label, icon }) => (
        <SocialButton key={id} icon={icon} label={label} />
      ))}
    </div>
  );
}
