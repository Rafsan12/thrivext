import "@pagefind/default-ui/style.css";
import Link from "next/link";
import { useEffect } from "react";

const PagefindSearch = () => {
  useEffect(() => {
    import("@pagefind/default-ui").then(({ PagefindUI }) => {
      PagefindUI({
        element: "#search",
        showImages: false,
        translations: {
          placeholder: "সার্চ করুন...",
          zeroResults: "কোনো কিছু পাওয়া যায়নি",
        },
      });
      
    });
  }, []);

  return <div id="search" className="my-4" />;
};

export default {
  logo: (
    <Link href="/">
      <span className="font-bold text-xl">Thrivext</span>
    </Link>
  ),
   navbar: [
    {
      title: "Home",
      href: "/", // homepage route
    },
    {
      title: "Docs",
      menu: [
        {
          title: "Next Level Web Development",
          href: "/docs/0_gettingstarted", // ডকুমেন্টেশন পাথ
        },
      ],
    },
  ],
  project: {
    link: "https://github.com/Takib-Ahmed/thrivext",
  },
  docsRepositoryBase: "https://github.com/Takib-Ahmed/thrivext/blob/main",
  footer: {
    text: "MIT 2025 © Thrivext",
  },
  search: {
    component: PagefindSearch,
  },
};
