import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { House, ChartNoAxesCombined, StickyNote} from "lucide-react";
import LogoutButton from "./components/LogoutButton";

export default async function DashboardLayout( 
    { children }  : 
    { children: React.ReactNode } )
{
    const cookiesStore = await cookies();

    const auth_token = cookiesStore.get('auth_token');

    if(!auth_token){
        redirect('/login');
    }

    return(
        <main className="bg-[#0B131A] min-h-screen flex">
            <aside className="w-64 p-6 flex flex-col flex-justify gap-6 h-[100vh]">
                <div className="flex gap-3">
                    <Image
                    src="/images/dashboard/dashboard_logo.png"
                    alt="Vinod Soba Developer Lab"
                    width={60}
                    height={60}
                    />
                        <div>
                            <p className="text-white font-semibold">Vinod Soba</p>
                            <p className="text-slate-400 text-sm">Developer Lab</p>
                        </div>
                </div>

                <Link 
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg px-4 py-3 bg-[#153178] border border-[#5293DD] hover:text-white"
                >
                    <House 
                    size={20}
                    className="text-white"
                    />
                    <span className="text-white">Dashboard</span>
                </Link>
                

                <Link
                href="/dashboard/analytics/beautybop"
                className="flex items-center gap-3"
                >
                <ChartNoAxesCombined 
                size={20}
                className="text-white"
                />
                <span className="text-white">Beauty Bop Analytics</span>
                </Link>

                <Link
                href="/dashboard/analytics/quoteflow"
                className="flex items-center gap-3"
                >
                    <StickyNote
                    size={20}
                    className="text-white" 
                    />
                    <span className="text-white">QuoteFlow</span>
                
                </Link>

                
               

                <LogoutButton />
            </aside>

            <section className="flex-1">
                {children}
            </section>
            
        </main>
    )
}