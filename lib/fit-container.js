"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Type;
(function (Type) {
    Type["in"] = "in";
    Type["out"] = "out";
    Type["width"] = "width";
    Type["height"] = "height";
})(Type || (Type = {}));
function fitContainer(size, containerSize, type) {
    if (type === void 0) { type = Type.in; }
    var width = size.width, height = size.height;
    var cWidth = containerSize.width, cHeight = containerSize.height;
    var scale = width / height;
    var cscale = cWidth / cHeight;
    if (type === Type.in) {
        if (cscale > scale) {
            return fitContentHeight(size, containerSize);
        }
        else {
            return fitContentWidth(size, containerSize);
        }
    }
    else if (type === Type.out) {
        if (cscale > scale) {
            return fitContentWidth(size, containerSize);
        }
        else {
            return fitContentHeight(size, containerSize);
        }
    }
    else if (type === Type.width) {
        return fitContainerWidth(size, containerSize);
    }
    else if (type === Type.height) {
        return fitContainerHeight(size, containerSize);
    }
    else {
        throw new Error("type is not supported [" + type + "]");
    }
}
exports.default = fitContainer;
function fitContentHeight(size, containerSize) {
    var width = size.width, height = size.height;
    var cWidth = containerSize.width, cHeight = containerSize.height;
    var w = (width / height) * cHeight;
    var h = cHeight;
    var left = (cWidth - w) / 2;
    var top = 0;
    var s = w / width;
    return { width: w, height: h, left: left, top: top, scale: s };
}
exports.fitContentHeight = fitContentHeight;
function fitContentWidth(size, containerSize) {
    var width = size.width, height = size.height;
    var cWidth = containerSize.width, cHeight = containerSize.height;
    var w = cWidth;
    var h = (height / width) * cWidth;
    var left = 0;
    var top = (cHeight - h) / 2;
    var s = w / width;
    return { width: w, height: h, left: left, top: top, scale: s };
}
exports.fitContentWidth = fitContentWidth;
function fitContainerWidth(size, containerSize) {
    var width = size.width, height = size.height;
    var cWidth = containerSize.width, cHeight = containerSize.height;
    var w = cWidth;
    var h = (height / width) * cWidth;
    var left = 0;
    var top = (cHeight - h) / 2;
    var s = w / width;
    return { width: w, height: h, left: left, top: top, scale: s };
}
exports.fitContainerWidth = fitContainerWidth;
function fitContainerHeight(size, containerSize) {
    var width = size.width, height = size.height;
    var cWidth = containerSize.width, cHeight = containerSize.height;
    var h = cHeight;
    var w = (width / height) * cHeight;
    var left = (cWidth - w) / 2;
    var top = 0;
    var s = w / width;
    return { width: w, height: h, left: left, top: top, scale: s };
}
exports.fitContainerHeight = fitContainerHeight;
//# sourceMappingURL=fit-container.js.map