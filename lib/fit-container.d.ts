declare enum Type {
    in = "in",
    out = "out",
    width = "width",
    height = "height"
}
export default function fitContainer(size: Size, containerSize: Size, type?: Type): {
    width: number;
    height: number;
    left: number;
    top: number;
    scale: number;
};
declare function fitContentHeight(size: Size, containerSize: Size): {
    width: number;
    height: number;
    left: number;
    top: number;
    scale: number;
};
declare function fitContentWidth(size: Size, containerSize: Size): {
    width: number;
    height: number;
    left: number;
    top: number;
    scale: number;
};
declare function fitContainerWidth(size: Size, containerSize: Size): {
    width: number;
    height: number;
    left: number;
    top: number;
    scale: number;
};
declare function fitContainerHeight(size: Size, containerSize: Size): {
    width: number;
    height: number;
    left: number;
    top: number;
    scale: number;
};
export { fitContainerHeight, fitContainerWidth, fitContentWidth, fitContentHeight };
