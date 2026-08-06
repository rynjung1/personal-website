"use client";

import { useState } from "react";
import { MapPin, Mail } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/data/site";

export default function Contact() {
  const [revealed, setRevealed] = useState(false);
  const email = `${site.contact.emailUser}@${site.contact.emailDomain}`;

  return (
    <footer id="contact" className="mx-auto max-w-3xl px-6 py-20">
      <FadeIn>
        <h2 className="font-serif text-2xl italic tracking-tight sm:text-3xl">
          Wanna get in touch?
        </h2>
        <p className="mt-3 whitespace-nowrap text-foreground/70">
          {/* FILL IN: short tagline */}
          {site.contact.tagline}
        </p>

        <dl className="mt-8 space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <dt className="flex w-24 shrink-0 items-center gap-1.5 text-foreground/50">
              <Mail className="h-3.5 w-3.5" />
              Email
            </dt>
            <dd>
              {/* FILL IN: email — split into emailUser/emailDomain in src/data/site.ts, assembled client-side to deter scraping */}
              {revealed ? (
                <a href={`mailto:${email}`} className="text-accent hover:underline">
                  {email}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setRevealed(true)}
                  className="text-accent hover:underline"
                >
                  Click to reveal
                </button>
              )}
            </dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="flex w-24 shrink-0 items-center gap-1.5 text-foreground/50">
              <MapPin className="h-3.5 w-3.5" />
              Location
            </dt>
            {/* FILL IN: location */}
            <dd>{site.contact.location}</dd>
          </div>
        </dl>

        <div className="mt-6">
          <SocialLinks />
        </div>

        <p className="mt-16 text-xs text-foreground/40">
          {/* FILL IN: your name */}© {new Date().getFullYear()} {site.name}
        </p>
      </FadeIn>
    </footer>
  );
}
