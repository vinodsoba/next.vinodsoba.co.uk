"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton(){

    const router = useRouter();


    async function handleLogout(){

        const response = await fetch('/api/auth/logout',
            {
                method: "POST"
            }
            
        );

         if(response.ok){
            router.push('/login');
        }

       
    }

    return (
        <button
        className="text-white cursor-pointer border border-white py-2"
        onClick={handleLogout}
        >
            Logout
        </button>
    )
}