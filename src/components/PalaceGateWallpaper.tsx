// Faint background photo of the Gwanghwamun gate eave, fixed to the viewport
// so it stays put behind everything as the page scrolls. Grayscale + low
// opacity + a theme-appropriate blend mode keep it as background texture
// rather than a graphic competing with the content.
//
// Photo: "Gwanghwamun Gate (광화문), Seoul, South Korea" — CC0 1.0 Universal
// (public domain), via Wikimedia Commons / Unsplash.
// https://commons.wikimedia.org/wiki/File:Gwanghwamun_Gate_(%EA%B4%91%ED%99%94%EB%AC%B8),_Seoul,_South_Korea_(Unsplash).jpg
export default function PalaceGateWallpaper() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 bottom-0 -z-10 flex justify-center"
    >
      <div
        className="h-[62vh] w-2/3 max-w-4xl"
        style={{
          maskImage:
            "radial-gradient(ellipse 55% 55% at 50% 42%, black 0%, transparent 88%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 55% 55% at 50% 42%, black 0%, transparent 88%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/gate-eave.webp"
          alt=""
          className="h-full w-full object-cover object-top grayscale opacity-[0.2] mix-blend-multiply dark:opacity-[0.28] dark:mix-blend-screen dark:invert"
        />
      </div>
    </div>
  );
}
