import React from "react";
import { LockKeyholeIcon } from "lucide-react";


const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span><div className="flex items-center gap-2 group cursor-pointer">
  <div className="w-8 h-8 bg-cyan-500/10 border border-cyan-500/50 rounded flex items-center justify-center
   group-hover:bg-cyan-500/20 transition-all">
    <LockKeyholeIcon className="w-4 h-4 text-cyan-400" /> 
  </div>
  
  <span className="font-semibold text-lg tracking-tight">
    darkaoui<span className="text-gray-500 font-light">.org</span>
  </span>
</div>
</span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;