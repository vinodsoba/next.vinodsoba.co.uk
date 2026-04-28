import type React from "react";

type SectionProps = {
  step?: string;
  title?: string;
  description?: string;
  gradient?: string;
  children?: React.ReactNode;
};

declare const Section: React.FC<SectionProps>;

export default Section;