import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { WorkItem } from "@/data/works";

interface MasonryGridProps {
  items: WorkItem[];
}

const MasonryGrid = ({ items }: MasonryGridProps) => {
  const [columns, setColumns] = useState(4);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 768) setColumns(2);
      else if (window.innerWidth < 1024) setColumns(3);
      else setColumns(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const selected = selectedIndex !== null ? items[selectedIndex] : null;

  const goNext = () => {
    if (selectedIndex !== null && selectedIndex < items.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedIndex, items.length]);

  // Distribute items across columns
  const cols: WorkItem[][] = Array.from({ length: columns }, () => []);
  const colIndices: number[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => {
    cols[i % columns].push(item);
    colIndices[i % columns].push(i);
  });

  return (
    <>
      <div className="flex gap-3 px-4 sm:px-8 lg:px-12">
        {cols.map((col, ci) => (
          <div key={ci} className="flex-1 flex flex-col gap-3">
            {col.map((item, idx) => (
              <MasonryCard
                key={item.id}
                item={item}
                onClick={() => setSelectedIndex(colIndices[ci][idx])}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {selected && selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >

            <motion.div
              key={selected.id}
              className="relative w-[92vw] max-w-5xl h-[85vh] rounded-2xl border border-border bg-card overflow-hidden flex flex-col lg:flex-row"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button - floating top right */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-20 rounded-full p-2.5 bg-background/60 backdrop-blur-md text-foreground hover:bg-background/80 transition-colors"
              >
                <X size={18} />
              </button>

              {/* Image section - scrollable */}
              <div className="flex-1 lg:flex-[2] overflow-y-auto bg-secondary/30 scrollbar-thin">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Info panel - always visible, no scroll needed */}
              <div className="lg:w-[320px] shrink-0 border-t lg:border-t-0 lg:border-l border-border p-6 flex flex-col justify-between bg-card">
                <div>
                  <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[11px] font-medium tracking-widest uppercase text-primary">
                    {selected.category}
                  </span>
                  <h3 className="mt-4 text-2xl font-display font-bold text-foreground leading-tight">
                    {selected.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {selected.description}
                  </p>
                </div>

                <div className="mt-6">
                  {/* Navigation arrows */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={(e) => { e.stopPropagation(); goPrev(); }}
                      disabled={selectedIndex === 0}
                      className="rounded-full p-2.5 border border-border text-foreground hover:border-primary hover:text-primary disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <span className="text-xs text-muted-foreground font-medium tracking-wider">
                      {selectedIndex + 1} / {items.length}
                    </span>
                    <button
                      onClick={(e) => { e.stopPropagation(); goNext(); }}
                      disabled={selectedIndex === items.length - 1}
                      className="rounded-full p-2.5 border border-border text-foreground hover:border-primary hover:text-primary disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                  {/* Dot indicators */}
                  <div className="flex items-center justify-center gap-1.5">
                    {items.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === selectedIndex
                            ? "w-6 bg-primary"
                            : "w-1.5 bg-muted-foreground/25 hover:bg-muted-foreground/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const MasonryCard = ({
  item,
  onClick,
}: {
  item: WorkItem;
  onClick: () => void;
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className="group relative cursor-pointer overflow-hidden rounded-lg"
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 z-10 rounded-lg border-2 border-transparent transition-colors duration-300 group-hover:border-stroke-hover pointer-events-none" />

      <div className="absolute top-3 left-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          {item.category}
        </span>
      </div>

      <img
        src={item.image}
        alt={item.title}
        className={`w-full h-auto block transition-all duration-500 ${loaded ? "opacity-100" : "opacity-0"} group-hover:brightness-75`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />

      {!loaded && (
        <div className="aspect-[3/4] w-full bg-secondary animate-pulse rounded-lg" />
      )}
    </motion.div>
  );
};

export default MasonryGrid;
