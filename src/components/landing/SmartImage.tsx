import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SmartImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
}

/**
 * Imagem com skeleton + blur-up via framer-motion.
 * Define width/height para evitar CLS.
 */
export const SmartImage = ({
  src,
  alt,
  width,
  height,
  className,
  wrapperClassName,
  priority = false,
}: SmartImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn("relative overflow-hidden", wrapperClassName)}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {!loaded && (
        <div className="absolute inset-0 img-skeleton" aria-hidden="true" />
      )}
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        // @ts-expect-error fetchpriority é válido no HTML mas ainda não tipado
        fetchpriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0, filter: "blur(12px)", scale: 1.03 }}
        animate={
          loaded
            ? { opacity: 1, filter: "blur(0px)", scale: 1 }
            : { opacity: 0, filter: "blur(12px)", scale: 1.03 }
        }
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className={cn("h-full w-full object-cover", className)}
      />
    </div>
  );
};