import { LeftSidebar } from "@/components/ui/LeftSidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcastr",
  description: "Generate your podcasts using AI",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative">
        <LeftSidebar />
        {children}
        <p className="text-white-1">RIGHT</p>
      </main>
    </div>
  );
}
