import Flags from "country-flag-icons/react/3x2";

interface AuthorType {
  site: string;
  role: string;
  name: string;
  avatar: string;
  country: string;
  city: string;
  description: string;
  countryCode: keyof typeof Flags;
}

const Author: AuthorType = {
  site: "<Muhammad.dev />",
  name: "Muhammad",
  role: "JavaScript Engineer",
  avatar: "https://avatars.githubusercontent.com/u/75540900?v=4",
  city: "Tashkent",
  country: "Uzbekistan",
  countryCode: "UZ", // https://www.npmjs.com/package/country-flag-icons
  description: "JavaScript Engineer, dreamer, traveler",
};

export default Author;
