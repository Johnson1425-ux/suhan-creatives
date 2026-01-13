const GridBackground = () => {
  return (
    <>
      {/* Black Background Base */}
      <div className="fixed inset-0 -z-10 bg-black" />
      
      {/* Blue Grid Lines (Vertical and Horizontal) */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Orange Grid Lines (Offset for variety) */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(251, 146, 60, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(251, 146, 60, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '40px 40px' // Offset to create checkerboard effect
        }}
      />
      
      {/* Subtle Glow Effects */}
      <div className="fixed top-20 left-1/4 w-[600px] h-[600px] -z-10 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="fixed bottom-20 right-1/4 w-[600px] h-[600px] -z-10 bg-orange-500/5 rounded-full blur-3xl" />
      
      {/* Optional: Gradient fade at edges */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
    </>
  );
};

export default GridBackground;
