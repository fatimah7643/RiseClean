"use client";

import { useState, useEffect } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  Home,
  Target,
  TrendingUp,
  User,
  Coins,
  BadgeCheck,
  Shield,
  Settings,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Role = "user" | "verifikator" | "admin";

export default function MainLayout({
  children,
  role = "user",
}: {
  children: React.ReactNode;
  role?: Role;
}) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true); 
  const { user } = useUser();

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/" || path.includes("/dashboard")) {
      setActiveTab("dashboard");
    } else if (path.includes("/challenges")) {
      setActiveTab("challenges");
    } else if (path.includes("/rewards")) {
      setActiveTab("rewards");
    } else if (path.includes("/profile")) {
      setActiveTab("profile");
    } else if (path.includes("/education")) {
      setActiveTab("education");
    } else if (path.includes("/points")) {
      setActiveTab("points");
    } else if (path.includes("/redemption") || path.includes("/voucher")) {
      setActiveTab("redemption");
    } else if (path.includes("/admin")) {
      setActiveTab("admin");
    } else if (path.includes("/verifikator")) {
      setActiveTab("verifikator");
    }
  }, []);

  const navItems = getNavItems(role);

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2 ">
            <div className="bg-green-500 w-8 h-8 rounded-lg space-x-10 pl-6 md:pl-10 "></div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
              RiseClean
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-sm bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
              <Coins className="w-4 h-4" />
              <span>{user?.publicMetadata.points || 0}</span>
            </div>
            <UserButton />

            {/* Mobile Menu Button - toggles sidebar on mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </header>

      <main
        className={cn(
          "transition-all duration-300 ease-in-out px-4 pt-6",
          "min-h-[calc(100vh-4rem)] pb-16 md:pb-6", 
          sidebarOpen ? "md:ml-64" : "md:ml-16",
          "ml-0"
        )}
      >
        {children}
      </main>

      {/* MOBILE NAV */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 dark:border-gray-800 z-40 md:hidden">
        <div className="flex justify-around py-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={cn(
                "flex flex-col items-center justify-center w-full py-2",
                activeTab === item.id
                  ? "text-green-600 dark:text-green-400"
                  : "text-gray-500 dark:text-gray-400"
              )}
              onClick={() => {
                window.location.href = item.href;
                // Close sidebar on mobile after navigation
                if (window.innerWidth < 768) {
                  setSidebarOpen(false);
                }
              }}
            >
              <item.icon
                className={cn(
                  "w-5 h-5 mb-1",
                  activeTab === item.id
                    ? "text-green-600 dark:text-green-400"
                    : "text-gray-500 dark:text-gray-400"
                )}
              />
              <span className="text-xs">{item.label}</span>
            </Button>
          ))}
        </div>
      </nav>

      {/* SIDEBAR */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 bg-gray-900 border-r z-50 transition-all duration-300 ease-in-out",
          sidebarOpen ? "w-64" : "w-16",
          "md:translate-x-0", // desktop: selalu visible
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0" // mobile: slide
        )}
      >
        <div className="h-full overflow-y-auto flex flex-col">

          {/* LOGO + TOGGLER */}
          <div className="p-4 border-b border-white/20">
            <div className={cn("flex items-center", sidebarOpen ? "justify-between" : "justify-center")}>
              {sidebarOpen && (
                <div className="flex items-center space-x-2">
                  <div className="bg-white w-8 h-8 rounded-lg opacity-90"></div>
                  <h2 className="text-lg font-bold text-white">RiceClean</h2>
                </div>
              )}
              {/* TOGGLE BUTTON — Hamburger / X */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/90 hover:text-white transition"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  {sidebarOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <div className="space-y-1.5">
                      <span className="block w-6 h-0.5 bg-white rounded"></span>
                      <span className="block w-6 h-0.5 bg-white rounded"></span>
                      <span className="block w-6 h-0.5 bg-white rounded"></span>
                    </div>
                  )}
                </Button>

            </div>
          </div>

          {/* USER BOX */}
          {sidebarOpen && (
            <div className="p-4">
              <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <div className="bg-white/70 w-8 h-8 rounded-full"></div>
                  <div>
                    <p className="font-medium text-sm text-white truncate">
                      {user?.fullName || "Pengguna"}
                    </p>
                    <p className="text-xs text-white/70 capitalize">{role}</p>
                  </div>
                </div>

                <div className="mt-2 flex items-center space-x-2 bg-white/20 text-white px-2 py-1 rounded-full text-sm">
                  <Coins className="w-4 h-4" />
                  <span>{user?.publicMetadata.points || 0} Poin</span>
                </div>
              </div>
            </div>
          )}

          {/* NAVIGATION */}
          <div className="p-2 flex-1 space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "w-full text-white/80 hover:bg-white/10 hover:text-white",
                  "justify-start transition-all",
                  !sidebarOpen && "justify-center",
                  activeTab === item.id &&
                    "bg-white/20 text-white border-l-4 border-white"
                )}
                onClick={() => {
                  window.location.href = item.href;
                  // Close sidebar on mobile after navigation
                  if (window.innerWidth < 768) {
                    setSidebarOpen(false);
                  }
                }}
              >
                <item.icon
                  className={cn("w-5 h-5", sidebarOpen ? "mr-3" : "mx-auto")}
                />
                {sidebarOpen && <span>{item.label}</span>}
              </Button>
            ))}
          </div>
        </div>
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
          />
        )}
      </aside>

      {/* DESKTOP OFFSET - Hidden on mobile since mobile nav is at bottom */}
      <div
        className={cn(
          "hidden md:block", // Only show on medium screens and up
          "lg:ml-64 md:ml-20" // Apply appropriate margin based on sidebar width
        )}
      ></div>
    </div>
  );
}

function getNavItems(role: Role) {
  switch (role) {
    case "admin":
      return [
        { id: "dashboard", label: "Dasbor", icon: Home, href: "/admin" },
        { id: "challenges", label: "Tantangan", icon: Target, href: "/admin/challenges" },
        { id: "materials", label: "Materi", icon: BadgeCheck, href: "/admin/materials" },
        { id: "rewards", label: "Hadiah", icon: TrendingUp, href: "/admin/rewards" },
        { id: "verifications", label: "Verifikasi", icon: Shield, href: "/admin/verifications" },
        { id: "settings", label: "Pengaturan", icon: Settings, href: "/admin/settings" },
      ];
    case "verifikator":
      return [
        { id: "dashboard", label: "Dasbor", icon: Home, href: "/verifikator" },
        { id: "submissions", label: "Verifikasi", icon: Shield, href: "/verifikator/submissions" },
        { id: "reports", label: "Laporan", icon: BadgeCheck, href: "/verifikator/reports" },
        { id: "profile", label: "Profil", icon: User, href: "/verifikator/profile" },
      ];
    default:
      return [
        { id: "dashboard", label: "Beranda", icon: Home, href: "/" },
        { id: "challenges", label: "Tantangan", icon: Target, href: "/challenges" },
        { id: "education", label: "Edukasi", icon: BadgeCheck, href: "/education" },
        { id: "points", label: "Poin", icon: Coins, href: "/points" },
        { id: "redemption", label: "Penukaran", icon: TrendingUp, href: "/redemption" },
        { id: "rewards", label: "Voucher", icon: TrendingUp, href: "/rewards" },
        { id: "profile", label: "Profil", icon: User, href: "/profile" },
      ];
  }
}
