// Faint background photo of the Gwanghwamun gate eave, fixed to the viewport
// so it stays put behind everything as the page scrolls. Grayscale + low
// opacity (+ invert in dark mode) keep it as background texture rather than
// a graphic competing with the content.
//
// The mask is several irregularly sized/placed soft blobs scattered along
// the diagonal of the roofline, rather than one uniform fade applied evenly
// to all four sides of the box. A single symmetric fade still reads as "a
// rectangle with blurred edges" — real edges, just softened. Overlapping
// blobs of different sizes produce an organic, cloud-like silhouette with no
// consistent envelope shape to read as a border.
//
// Each blob's radius is sized so radius * transparentStop stays under its
// distance to the nearest box edge in both axes — otherwise that edge is
// still partially opaque when it hits the box boundary and shows as a seam.
// With transparentStop = 0.65, a blob centered at (cx%, cy%) needs
// radius_x <= min(cx, 100-cx)/0.65 and radius_y <= min(cy, 100-cy)/0.65;
// every blob below is well under that.
//
// Grounding it at the bottom (so it doesn't look like it's floating
// centered above the screen edge) does NOT mean the bottom needs to be a
// uniform opaque strip — that reads as a flat "shelf" with sharp corners
// where it meets the box's left/right edges, i.e. exactly the rectangle
// look this is trying to avoid. Instead, three blobs are centered ON the
// bottom edge itself (cy = 100%, so distance-to-edge = 0 there, meaning
// each is fully opaque at its own point of contact) with different
// horizontal positions/sizes, so contact with the bottom is itself
// irregular — opaque in a few places, faded to nothing between and beyond
// them — rather than one clean, even strip.
//
// Photo: "Gwanghwamun Gate (광화문), Seoul, South Korea" — CC0 1.0 Universal
// (public domain), via Wikimedia Commons / Unsplash.
// https://commons.wikimedia.org/wiki/File:Gwanghwamun_Gate_(%EA%B4%91%ED%99%94%EB%AC%B8),_Seoul,_South_Korea_(Unsplash).jpg
const irregularFade = [
  "radial-gradient(ellipse 35% 30% at 60% 28%, black 0%, transparent 65%)",
  "radial-gradient(ellipse 42% 38% at 45% 50%, black 0%, transparent 65%)",
  "radial-gradient(ellipse 26% 28% at 25% 68%, black 0%, transparent 65%)",
  "radial-gradient(ellipse 22% 26% at 78% 60%, black 0%, transparent 65%)",
  "radial-gradient(ellipse 18% 20% at 38% 78%, black 0%, transparent 60%)",
  "radial-gradient(ellipse 30% 22% at 32% 100%, black 0%, transparent 70%)",
  "radial-gradient(ellipse 28% 24% at 68% 100%, black 0%, transparent 70%)",
  "radial-gradient(ellipse 18% 16% at 50% 100%, black 0%, transparent 65%)",
].join(", ");

export default function PalaceGateWallpaper() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 bottom-0 -z-10 flex justify-center"
    >
      <div
        className="isolate h-[65vh] w-2/3 max-w-[1400px] overflow-hidden"
        style={{ maskImage: irregularFade, WebkitMaskImage: irregularFade }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/gate-eave.webp"
          alt=""
          className="h-full w-full object-cover object-top grayscale opacity-[0.22] dark:opacity-[0.3] dark:invert"
        />
      </div>
    </div>
  );
}
