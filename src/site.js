export const site = {
  title: "Folly",
  description: "An Oxford student publication",
  author: "Folly Magazine", // Used for SEO and RSS
  address: "localhost:4321", // change this to be smth like "yourdomain.com"

  // Navigation — contains titles and links for the menu bar on the top:
  navigation: [
    { title: "home", url: "/" },
    { title: "works", url: "/works" },
    { title: "about", url: "/about" },
  ],

  // Pages titles and desripriptions — used for SEO (ONLY!)
  // That is, if you want to change the title displayed on the website for the "support" page, change it in the `support.md` file
  pages: {
    index: {
      title: "Home",
      description: "Home page for Folly Magazine",
    },
    works: {
      title: "Works",
      description: "Everything we've ever written",
    },
    about: {
      title: "About",
      description: "About Folly Magazine",
    },
  },
};
