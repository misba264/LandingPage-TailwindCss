import React from "react";
import manonphone from "../assets/man-on-phone.png"

export const HomePage=()=>{
    return(
<>
<nav className="bg-purple-800 text-white py-3 px-3 flex justify-between">
    <img className="h-7 rounded" src="https://randomuser.me/api/portraits/men/75.jpg" alt="logo-here"></img>
<ul className="flex space-x-3">
<li className="cursor-pointer">Home</li>
<li className="cursor-pointer">About</li>
<li className="cursor-pointer">Catalogue</li>
<li className="cursor-pointer">Contact Us</li>
</ul>
</nav>
<main className="flex justify-between bg-fuchsia-100 h-screen">
    <div className="  py-40">
        <div className="text-3xl px-5">Best MarketPlace To Buy New Phones</div>
        <p className="px-5 w-[50vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi omnis, enim inventore exercitationem hic, alias illo officiis nesciunt corrupti perspiciatis, iusto similique. Laboriosam ut accusantium possimus, repellat provident eum.
        Sequi, vitae! Ducimus esse dolorem velit itaque eum non praesentium, laboriosam earum tempora optio sint ex laborum possimus dolorum maxime ipsa. Eaque quod libero itaque fugit? Ex nostrum odio ut?</p>

    </div>
    <div className="flex w-96 pt-28 justify-center mr-10">
        <img src={manonphone} alt="logo" className="h-96 "></img>
    </div>
</main>

</>  )
};