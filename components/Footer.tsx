import Link from "next/link";
import { footerData } from "@/constants/data";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
    <path d="M18.24 2.5h3.3l-7.2 8.23L23 21.5h-6.62l-5.19-6.79-5.94 6.79H1.94l7.7-8.8L1.5 2.5h6.79l4.69 6.2L18.24 2.5zm-1.16 17h1.83L7 4.42H5.03L17.08 19.5z" />
  </svg>
);

const socialIcons: Record<string, React.ReactNode> = {
  Linkedin: <LinkedInIcon />,
  Facebook: <FacebookIcon />,
  Instagram: <InstagramIcon />,
  X: <XIcon />,
};

const Footer = () => {
  const year = new Date().getFullYear();
  const socialSection = footerData.find(
    (section) => section.title === "Follow us on Social Media"
  );
  const linkSections = footerData.filter(
    (section) => section.title !== "Follow us on Social Media"
  );

  return (
    <div
      className="relative h-160"
      style={{ clipPath: "polygon(0% 0, 100% 0%,100% 100%,0 100%)" }}
    >
      <div className="relative h-[calc(100vh+640px)] top-[-100vh] bg-black">
        <div className="sticky top-[calc(100vh-640px)] h-160 flex flex-col">
          <div
            className="h-px w-full shrink-0"
            style={{
              background: "linear-gradient(90deg,#F37036,#007DC5,#8B5CF6)",
            }}
          />

          <div className="flex-1 flex flex-col justify-center gap-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
              <div className="flex animate-in fade-in slide-in-from-bottom-4 fill-mode-both flex-col gap-4 max-w-xs">
                <Link href="/" className="w-fit text-lg font-bold text-white md:text-2xl">
                  Induke
                </Link>
                <p className="text-sm leading-relaxed text-gray-400">
                  We design and build software products for teams who need to
                  move fast without breaking things.
                </p>
                {/* {socialSection && (
                  <div className="flex items-center gap-3 pt-2">
                    {socialSection.links.map((link) => (
                      <Link
                        key={link.title}
                        href={"src" in link && link.src ? (link.src as string) : "#"}
                        target={"target" in link ? (link.target as string) : undefined}
                        rel="noopener noreferrer"
                        aria-label={link.title}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-[#F37036] hover:text-white"
                      >
                        {socialIcons[link.title]}
                      </Link>
                    ))}
                  </div>
                )} */}
              </div>

              <div className="grid w-full max-w-2xl grid-cols-2 gap-8 sm:grid-cols-3 md:w-auto">
                {linkSections.map((section, index) => (
                  <div
                    key={section.title}
                    className="flex animate-in fade-in slide-in-from-bottom-4 fill-mode-both flex-col gap-3"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                      {section.title}
                    </h3>
                    <div className="flex flex-col gap-2.5">
                      {section.links.map((link, linkIndex) => (
                        <div key={linkIndex} className="flex flex-col gap-1">
                          {link?.heading && (
                            <span className="text-xs font-medium text-gray-500">
                              {link.heading}
                            </span>
                          )}
                          {"src" in link && (link.src as string) ? (
                            <Link
                              href={link.src as string}
                              target={link?.target}
                              className="w-fit text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                            >
                              {link.title}
                            </Link>
                          ) : (
                            <a
                              href={`mailto:${link.title}`}
                              className="w-fit text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                            >
                              {link.title}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
              <p className="text-xs text-gray-500">
                &copy; {year} Induke. All rights reserved.
              </p>
              <div className="flex gap-6 text-xs text-gray-500">
                <Link href="#" className="transition-colors duration-300 hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="#" className="transition-colors duration-300 hover:text-white">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
