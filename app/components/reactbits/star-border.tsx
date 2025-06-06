import React from 'react';
import { cn } from '~/lib/utils';

type StarBorderProps <T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties["animationDuration"];
    childrenClassName?: string;
}

const StarBorder = <T extends React.ElementType = "button">({
    as,
    className = "",
    color = "white",
    speed = "6s",
    children,
    childrenClassName = "",
    ...rest
}: StarBorderProps<T>) => {
    const Component = as || "button";

    return (
        <Component className={cn(
            "relative inline-block py-[1px] overflow-hidden rounded-[20px]",className
        )}
        {...rest}>
            <div className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
            style={{background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed}}></div>
            <div className={cn("relative z-1 bg-gradient-to-b from-[#F7F9FB] to-gray-100 border border-gray-200 text-center text-[16px] py-[16px] px-[26px] rounded-[20px]", childrenClassName)}>
                {children}
            </div>

        </Component>
    )
};

export default StarBorder;