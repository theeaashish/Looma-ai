import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const HomeBackground = ({ src, alt, className }: Props) => {
  return (
    <Image fill src={src} className="object-cover overflow-hidden" alt={alt} />
  );
};

export default HomeBackground;
