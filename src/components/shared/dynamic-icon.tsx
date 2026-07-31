import {
  Award,
  Brain,
  Building2,
  Cloud,
  Code2,
  Cpu,
  Globe,
  Headphones,
  Layers,
  Lightbulb,
  Map,
  Megaphone,
  Palette,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  brain: Brain,
  "building-2": Building2,
  users: Users,
  megaphone: Megaphone,
  search: Search,
  palette: Palette,
  cloud: Cloud,
  workflow: Workflow,
  lightbulb: Lightbulb,
  map: Map,
  "pen-tool": PenTool,
  "code-2": Code2,
  "shield-check": ShieldCheck,
  rocket: Rocket,
  "trending-up": TrendingUp,
  award: Award,
  zap: Zap,
  cpu: Cpu,
  headphones: Headphones,
  layers: Layers,
  sparkles: Sparkles,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon className={className} aria-hidden />;
}

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
