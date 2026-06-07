"use client";

import Link from "next/link";
import React from "react";
import { LenguageSwitch } from "../lenguage/LenguageSwitch";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../providers/AuthProvider";
import { signOut } from "@/services/auth/auth.client";
const Navbar = () => {
  const { t } = useTranslation();

  const { user, loading } = useAuth();
  const handleLogout = () => {
    signOut();
  };
  return (
    <nav className="fixed top-0 w-full z-50  text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              MONZA MOTORS
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/collection">{t("nav.link_1")}</Link>
            <Link href="#">{t("nav.link_2")}</Link>
            <Link href="#">{t("nav.link_3")}</Link>
          </div>
        </div>
        {loading ? (
          <div className="animate-pulse bg-gray-200 border border-gray-300 rounded-lg py-2 px-4">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
        ) : user ? (
          <>
            {" "}
            <LenguageSwitch />
            <div className="flex items-center gap-6 relative group">
              <button className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-all hover:bg-white/10">
                <Image
                  src="/icons/person.svg"
                  alt="Profile"
                  width={16}
                  height={16}
                  className="invert"
                />
                {t("profile_dropdown.title")}
              </button>

              <div className="size-10 rounded-full border border-primary/30 overflow-hidden cursor-pointer">
                <Image
                  alt="Profile"
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6khf7yjo0KsUxSTZP4NXFYdnDRUyn8VAIR5B9BSW3SMzBCIiNMRpmGeDRvRt9TeQjSWqER4nNBiGQNCikJRVRxsjdjZWuNC1swcjUZ2lzohJBtLoBLV67xAL5FKk3_LvP_pWb0by2MY8LsdKNobKderjRU1Wev52qNTMcrozYzKh_1tT9mYJ9MywiDG17gX5h1Bs38_ibY5_SAPIvz6E4XBF4-QXPHo8VrCkhlMKuibka7v9xroPd7tYcy4DS0-RiXEOn4iqUBzk"
                />
              </div>

              <div className="absolute right-0 top-full mt-2 w-72 bg-[#16181D] rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top-right scale-95 group-hover:scale-100">
                <div className="px-4 py-4 border-b border-white/5 mb-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-base font-bold tracking-tight text-white">
                      <h1>{user.email}</h1>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-primary font-bold">
                      {t("profile_dropdown.member_type")}
                    </span>
                    <div className="size-2 rounded-full bg-primary animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-1 mb-2 flex flex-col gap-2">
                  <Link href="/dashboard" className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">
                      directions_car
                    </span>
                    <span className="font-medium">
                      {t("profile_dropdown.my_garage")}
                    </span>
                  </Link>
                  <a className="flex items-center gap-2" href="#">
                    <span className="material-symbols-outlined text-lg">
                      calendar_today
                    </span>
                    <span className="font-medium">
                      {t("profile_dropdown.service_appointments")}
                    </span>
                  </a>
                  <a className="flex items-center gap-2" href="#">
                    <span className="material-symbols-outlined text-lg">
                      military_tech
                    </span>
                    <span className="font-medium">
                      {t("profile_dropdown.membership_rewards")}
                    </span>
                  </a>
                </div>
                <div className="pt-2 border-t border-white/5 space-y-1 mb-2">
                  <a className="flex items-center gap-2" href="#">
                    <span className="material-symbols-outlined text-lg">
                      settings
                    </span>
                    <span className="font-medium">
                      {" "}
                      {t("profile_dropdown.account_settings")}
                    </span>
                  </a>
                  <a className="flex items-center gap-2" href="#">
                    <span className="material-symbols-outlined text-lg">
                      shield
                    </span>
                    <span className="font-medium">
                      {t("profile_dropdown.security")}
                    </span>
                  </a>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <a
                    className="flex items-center gap-3 px-4 py-3 text-sm text-red-400/80 transition-all duration-200 hover:bg-red-500/10 hover:text-red-400 rounded-lg"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-lg">
                      logout
                    </span>
                    <button
                      onClick={handleLogout}
                      className="font-bold uppercase tracking-widest text-[11px] cursor-pointer"
                    >
                      {t("profile_dropdown.logout")}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-6">
              <Link href="/register" className="btn btn-accent">
                {t("nav.btn")}
              </Link>
              <LenguageSwitch />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
