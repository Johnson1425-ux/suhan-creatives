/**
 * Decorative backdrop for the rounded content card.
 *
 * These layers are `absolute` and sit at z-0 inside the card, which is why the
 * card itself must NOT paint an opaque background over them — App.jsx leaves the
 * base colour to this component. (They used to be `fixed` at -z-10, which parked
 * them behind the card's own background and made the whole thing invisible.)
 */
const GridBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base surface */}
      <div className="absolute inset-0 bg-[#0d0d0f]" />

      {/* Blue grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(91, 163, 224, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(91, 163, 224, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Orange grid, offset half a cell for a woven effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(245, 166, 35, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(245, 166, 35, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '40px 40px',
        }}
      />

      {/* Glow orbs, spread down the page */}
      <div className="absolute top-[4%] -left-40 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-3xl" />
      <div className="absolute top-[38%] -right-40 w-[600px] h-[600px] bg-accent-orange/[0.07] rounded-full blur-3xl" />
      <div className="absolute top-[72%] -left-32 w-[520px] h-[520px] bg-accent-blue/[0.07] rounded-full blur-3xl" />

      {/* Fade toward the bottom so the grid doesn't fight the footer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
    </div>
  );
};

export default GridBackground;
