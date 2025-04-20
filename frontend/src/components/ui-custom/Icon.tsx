/*************  ✨ Codeium Command 🌟  *************/
import * as LucideIcons from "lucide-react";
import { LucideIcon } from 'lucide-react';

type IconProps = {
  name: string;
  size?: number;
  className?: string;
};

export default function Icon({ name, size = 24, className = "" }: IconProps) {
  name = name.toUpperCaseFirst();
  const LucideComponent = (LucideIcons as any)[name] as LucideIcon; // Cast to LucideIcon type
  if (!LucideComponent) return null; // If the icon name is not found, return nothing

  return <LucideComponent size={size} className={className} />;
}

