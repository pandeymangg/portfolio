import { LinkedinIcon } from "lucide-react";
import { GithubIcon } from "../icons/GithubIcon";
import { XIcon } from "../icons/XIcon";
import { ReactElement } from "react";

type TLink = { name: string; url: string; icon?: ReactElement };

const myLinks: Array<TLink> = [
  {
    name: "Github",
    url: "https://github.com/pandeymangg",
    icon: GithubIcon as unknown as ReactElement,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pandeyman",
    icon: LinkedinIcon as unknown as ReactElement,
  },
  {
    name: "X",
    url: "https://x.com/pandeymangg",
    icon: XIcon as unknown as ReactElement,
  },
];

export const Links = () => {
  return (
    <div className="md:px-4 md:pt-4 h-full max-h-full overflow-auto">
      <div className="flex items-center">
        <h2 className="text-textPrimary text-2xl font-bold">Links 🔗</h2>
      </div>

      <div className="mt-4 text-textPrimary">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-textPrimary text-xl font-bold">My Links</h3>

            <div className="flex flex-col">
              {myLinks.map((link) => {
                return (
                  <a
                    key={link.name}
                    className="flex items-center gap-2"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon && (
                      // @ts-expect-error -- icon is valid
                      <link.icon className="w-4 h-4 text-textPrimary" />
                    )}
                    <span className="hover:text-iris transition-colors duration-300">
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
