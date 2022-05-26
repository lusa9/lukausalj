import React, { useMemo } from "react";
import cn from "classnames";

type TypographyAlignType = "center" | "justify" | "left" | "right";
type TypographyVariantType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
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
  as?: TypographyAsVariantType;
  align?: TypographyAlignType;
  pure?: boolean;
}

/**
 * A component for displaying text
 *
 * @param children   contents of the component
 * @param className  extra classes applied to the component
 * @param variant    typography variant to be used e.g. 'h1'
 * @param as         actual HTML element to represent the component
 * @param pure       if true, default margins and paddings will not be applied
 */
export default function Typography({
  children,
  className: classNameProp,
  variant,
  as,
  align,
  pure,
}: TypographyProps) {
  const className = useMemo(
    () =>
      cn(
        componentClassNameForVariant(variant),
        !pure && styledClassNameForVariant(variant),
        align && `text-${align}`,
        classNameProp
      ),
    [variant, pure, align, classNameProp]
  );
  const elementType = useMemo(() => elementTypeForVariant(variant), [variant]);

  return React.createElement(as || elementType, {
    children,
    className,
  });
}

const elementTypeForVariant = (variant: TypographyVariantType) => {
  switch (variant) {
    case "base":
    case "sm":
    case "xs":
      return "p";
    default:
      return variant;
  }
};

const componentClassNameForVariant = (variant: TypographyVariantType) => {
  switch (variant) {
    case "h1":
      return "text-4xl md:text-5xl";
    case "h2":
      return "text-3xl md:text-4xl";
    case "h3":
      return "text-2xl md:text-3xl";
    case "h4":
      return "text-xl md:text-2xl";
    case "h5":
      return "text-lg md:text-xl";
    case "h6":
      return "md:text-lg";
    case "base":
    case "sm":
    case "xs":
      return `text-${variant}`;

    default:
      return undefined;
  }
};

const styledClassNameForVariant = (variant: TypographyVariantType) => {
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
