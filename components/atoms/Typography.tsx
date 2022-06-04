import React from "react";
import cn from "classnames";

type TypographyAlignType = "center" | "justify" | "left" | "right";
export type TypographyVariantType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle"
  | "p"
  | "base"
  | "sm"
  | "xs";
type TypographyAsVariantType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "div";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  variant: TypographyVariantType;
  onAllViewPorts?: boolean;
  as?: TypographyAsVariantType;
  align?: TypographyAlignType;
  noMargin?: boolean;
  noLeading?: boolean;
}

/**
 * A component for displaying text
 *
 * @param children       contents of the component
 * @param className      extra classes applied to the component
 * @param variant        typography variant to be used e.g. 'h1'
 * @param onAllViewPorts if true, desktop size will be used on all viewports
 * @param as             actual HTML element to represent the component
 * @param noMargin      if true, default margins will not be applied
 * @param noLeading      if true, default leading will not be applied
 */
export default function Typography({
  children,
  className: classNameProp,
  variant,
  onAllViewPorts = false,
  as,
  align,
  noMargin,
  noLeading,
}: TypographyProps) {
  const className = cn(
    componentClassNameForVariant(variant, onAllViewPorts),
    !noMargin && marginClassNameForVariant(variant),
    !noLeading && leadingClassNameForVariant(variant),
    align && `text-${align}`,
    classNameProp
  );

  const elementType = elementTypeForVariant(variant);

  return React.createElement(
    as || elementType,
    {
      className,
    },
    children
  );
}

const elementTypeForVariant = (variant: TypographyVariantType) => {
  switch (variant) {
    case "subtitle":
    case "base":
    case "sm":
    case "xs":
      return "p";
    default:
      return variant;
  }
};

const componentClassNameForVariant = (
  variant: TypographyVariantType,
  onAllViewPorts: boolean
) => {
  switch (variant) {
    case "h1":
      return onAllViewPorts ? "text-6xl" : "text-5xl md:text-6xl";
    case "h2":
      return onAllViewPorts ? "text-5xl" : "text-4xl md:text-5xl";
    case "h3":
      return onAllViewPorts ? "text-4xl" : "text-3xl md:text-4xl";
    case "h4":
      return onAllViewPorts ? "text-3xl" : "text-2xl md:text-3xl";
    case "h5":
      return onAllViewPorts ? "text-2xl" : "text-xl md:text-2xl";
    case "h6":
      return onAllViewPorts ? "text-xl" : "text-lg md:text-xl";
    case "subtitle":
      return cn(
        "text-gray-400 dark:text-gray-400",
        onAllViewPorts ? "text-sm" : "md:text-sm"
      );
    case "base":
      return onAllViewPorts ? `text-base` : `text-sm md:text-base`;
    case "sm":
      return onAllViewPorts ? `text-sm` : `text-xs md:text-sm`;
    case "xs":
      return `text-${variant}`;

    default:
      return undefined;
  }
};

const marginClassNameForVariant = (variant: TypographyVariantType) => {
  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return "my-4";
    case "p":
      return "mb-10";
    default:
      return undefined;
  }
};

const leadingClassNameForVariant = (variant: TypographyVariantType) => {
  switch (variant) {
    default:
      return undefined;
  }
};
