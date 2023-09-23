const { validRoutes } = require("./routes");

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export const navLinks = [
  ...validRoutes.map((item) => ({
    label: capitalizeFirstLetter(item.route),
    route: `/pages/${item.route}`,
  })),
];

export const footerItems = {
  pages: [
    {
      link: "/pages/home",
      label: "Home",
      logo: {
        src: "../../assets/images/home.svg",
        alt: "home",
        size: "20",
      },
    },
    {
      link: "/pages/about",
      label: "About me",
      logo: {
        src: "../../assets/images/user.svg",
        alt: "about",
        size: "20",
      },
    },
    {
      link: "/pages/contact",
      label: "Contact",
      logo: {
        src: "../../assets/images/phone.svg",
        alt: "contact",
        size: "20",
      },
    },
  ],
  links: [
    {
      link: "https://www.linkedin.com/in/amir-hossein-karimi-664a89237",
      logo: {
        src: "../../assets/images/inLogo.png",
        alt: "in",
        size: "16",
      },
    },
    {
      link: "https://github.com/amir-hossein-karimi",
      logo: {
        src: "../../assets/images/githubLogo.jpg",
        alt: "git",
        size: "22",
      },
    },
    {
      link: "mailto:a.hosseinkarimi82@gmail.com",
      logo: {
        src: "../../assets/images/mailLogo.png",
        alt: "mail",
        size: "16",
      },
    },
    {
      link: "https://www.npmjs.com/~amir-hossein-karimi",
      logo: {
        src: "../../assets/images/npmLogo.png",
        alt: "npm",
        size: "24",
      },
    },
  ],
};
