
import type { Config } from 'tailwindcss'
import { keepTheme } from "keep-react/keepTheme";

const config : Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'radial-gradient(at 22% 15%, hsla(177,84%,72%,1) 0px, transparent 50%), radial-gradient(at 75% 5%, hsla(165,66%,65%,1) 0px, transparent 50%), radial-gradient(at 71% 5%, hsla(274,69%,62%,1) 0px, transparent 50%), radial-gradient(at 23% 81%, hsla(217,90%,73%,1) 0px, transparent 50%), radial-gradient(at 38% 14%, hsla(337,62%,72%,1) 0px, transparent 50%), radial-gradient(at 40% 33%, hsla(167,68%,74%,1) 0px, transparent 50%)',
      },
    },
  },
}

export default keepTheme(config);
  