import React from "react";
import Button from "../components/core-components/Button";
import Image from "next/image";
import Link from "next/link";


const Team = () => {
  return (
    <div className="justify-center items-center">
      <div className="banner my-[40px]">
        <span className="font-ephesis text-6xl ml-[715px] opacity-effect">We are</span>
        <span className="font-ephesis text-6xl ml-[195px] opacity-effect">,</span>
      </div>

      <div className="team-member-card grid grid-cols-2 gap-4 px-[80px] opacity-effect">
        <div className="member-info">
          <span className="block text-3xl mb-4">Arda Tor</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam impedit tempore aliquam possimus a nisi fugiat vitae unde ipsam necessitatibus suscipit, natus quod temporibus labore repellendus ab corporis reprehenderit qui iste. Minus illum harum qui sequi, quibusdam illo voluptas repellendus labore vitae error accusantium. Eaque tempore aliquid sed ab quisquam culpa illo vero rerum sint voluptatem quo rem quam similique, aliquam molestias inventore libero atque dolore numquam. Quam veritatis inventore enim quasi nihil dolores eveniet, ducimus optio nisi dolorum aperiam atque architecto quis non iste, est, in eaque odio excepturi amet obcaecati? Quae fuga quis alias eaque hic nisi magnam officia molestias tempore quas omnis reiciendis illo, veniam deleniti, beatae magni, harum perspiciatis minus. Reprehenderit aliquid earum doloremque, non aspernatur id illum voluptatem nostrum ipsa nulla sint possimus totam. Natus ipsum maxime nesciunt dolores fugiat itaque vel rerum, in distinctio tempore culpa dolor vero delectus assumenda recusandae sunt totam. Maiores reiciendis incidunt quos similique facere minus iusto cumque reprehenderit maxime cum vel aut a consequatur illum consectetur asperiores numquam modi, magni vero accusamus ea saepe aliquam voluptatibus. Architecto blanditiis minima officiis aliquid quaerat voluptates aperiam deserunt assumenda ad laudantium cumque facere aut, nostrum laborum tempora amet veritatis modi debitis ipsam.
        </div>
        <div className="member-photo bg-gray-200 h-full w-full">
          
        </div>
        <Link href="#" className="col-span-2 text-secondaryColor flex items-center font-medium">
          More Information <img src="/svg/right-arrow.svg" alt="Right Arrow" className="w-8 h-8" />
        </Link>
      </div>
    </div>
  );
};

export default Team;