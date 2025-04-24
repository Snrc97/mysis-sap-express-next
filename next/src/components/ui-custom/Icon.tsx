'use client'
/*************  ✨ Codeium Command 🌟  *************/
import * as LucideIcons from "lucide-react";
import { LucideIcon, } from 'lucide-react';

import "@/helpers/extensions/all.ts";
import React from 'react';

interface IconProps extends React.ComponentProps<LucideIcon>
{
 onOver?: (props?: any) => void;
 onLeave?: (props?: any) => void;
 overColor?: string;
}






export default function Icon(props: IconProps) {


  let defProps = {...props}
  const [propsState, setPropsState] = React.useState<IconProps>(defProps);

  const handlePointerOver = () => {
    defProps.fill = props.overColor || "transparent";
    setPropsState(defProps);
    if(props.onOver) props.onOver(defProps);
  };

  const handlePointerLeave = () => {
    defProps.fill = "transparent";
    setPropsState(defProps);
    if (props.onLeave) props.onLeave(defProps);

  };

  const name = propsState.name?.toUpperCaseFirst() ?? "";
  const LucideComponent = (LucideIcons as any)[name] as LucideIcon; // Cast to LucideIcon type
  if (!LucideComponent) return null; // If the icon name is not found, return nothing
  
  return <LucideComponent {...propsState} onPointerOver={handlePointerOver} onPointerLeave={handlePointerLeave} />;
}

