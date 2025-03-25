/*************  ✨ Codeium Command 🌟  *************/
import { LucideIcon, Home, Settings, User, Inbox, Bell, Search, Calendar, Table, Currency, DollarSign, Indent, LayoutDashboard } from "lucide-react";

// Define a mapping of icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  home: Home,
  settings: Settings,
  user: User,
  inbox: Inbox,
  bell: Bell,
  search: Search,
  calendar: Calendar,
  table: Table,
  currency: Currency,
  dollar: DollarSign,
  order: Indent,
  dashboard: LayoutDashboard,
};

type IconProps = {
  name: string;
  size?: number;
  className?: string;
};

export default function Icon({ name, size = 24, className }: IconProps) {
  const LucideComponent = iconMap[name]; // Get the icon component dynamically
  if (!LucideComponent) return null; // If the icon name is not found, return nothing

  return <LucideComponent size={size} className={className} />;
}
