enum Type {
    in = 'in',
    out = 'out',
    width = 'width',
    height = 'height'
}
/**
 * 自适应容器大小
 * 按照不同的类型， 计算出 原始大小自适应之后， 得到的新的大小，距容器上、左侧的距离，以及缩放的比例
 * @typedef {{width:number,height:number}} Size
 * @param {Size} size 内容大小
 * @param {Size} containerSize 容器大小
 * @param {'in'|'out'|'width'|'height'} type 自适应类型， default is 'in'
 * @returns {{width:number,height:number,left:number,top:number,scale:number}} 返回值， 适应后的size和比例
 */
export default function fitContainer(size: Size, containerSize: Size, type: Type = Type.in) {
    const { width, height } = size
    const { width: cWidth, height: cHeight } = containerSize
    const scale = width / height
    const cscale = cWidth / cHeight
    if (type === Type.in) {
        // 默认值放前面 -- 一般都这么算
        if (cscale > scale) {
            // 容器宽高比大于内容宽高比
            return fitContentHeight(size, containerSize)
        } else {
            return fitContentWidth(size, containerSize)
        }
    } else if (type === Type.out) {
        if (cscale > scale) {
            // 容器宽高比大于内容宽高比
            return fitContentWidth(size, containerSize)
        } else {
            return fitContentHeight(size, containerSize)
        }
    } else if (type === Type.width) {
        return fitContainerWidth(size, containerSize)
    } else if (type === Type.height) {
        return fitContainerHeight(size, containerSize)
    } else {
        throw new Error(`type is not supported [${type}]`)
    }
}

/**
 * 自适应容器大小 按内容高度
 * 按照不同的类型， 计算出 原始大小自适应之后， 得到的新的大小，距容器上、左侧的距离，以及缩放的比例
 * @typedef {{width:number,height:number}} Size
 * @param {Size} size 内容大小
 * @param {Size} containerSize 容器大小
 * @returns {{width:number,height:number,left:number,top:number,scale:number}} 返回值， 适应后的size和比例
 */
function fitContentHeight(size: Size, containerSize: Size) {
    const { width, height } = size
    const { width: cWidth, height: cHeight } = containerSize
    let w = (width / height) * cHeight
    let h = cHeight
    let left = (cWidth - w) / 2
    let top = 0
    let s = w / width
    return { width: w, height: h, left, top, scale: s }
}

/**
 * 自适应容器大小 按内容宽度
 * 按照不同的类型， 计算出 原始大小自适应之后， 得到的新的大小，距容器上、左侧的距离，以及缩放的比例
 * @typedef {{width:number,height:number}} Size
 * @param {Size} size 内容大小
 * @param {Size} containerSize 容器大小
 * @returns {{width:number,height:number,left:number,top:number,scale:number}} 返回值， 适应后的size和比例
 */
function fitContentWidth(size: Size, containerSize: Size) {
    const { width, height } = size
    const { width: cWidth, height: cHeight } = containerSize
    let w = cWidth
    let h = (height / width) * cWidth
    let left = 0
    let top = (cHeight - h) / 2
    let s = w / width
    return { width: w, height: h, left, top, scale: s }
}

/**
 * 自适应容器大小  按容器宽度处理
 * 按照不同的类型， 计算出 原始大小自适应之后， 得到的新的大小，距容器上、左侧的距离，以及缩放的比例
 * @typedef {{width:number,height:number}} Size
 * @param {Size} size 内容大小
 * @param {Size} containerSize 容器大小
 * @returns {{width:number,height:number,left:number,top:number,scale:number}} 返回值， 适应后的size和比例
 */
function fitContainerWidth(size: Size, containerSize: Size) {
    const { width, height } = size
    const { width: cWidth, height: cHeight } = containerSize
    let w = cWidth
    let h = (height / width) * cWidth
    let left = 0
    let top = (cHeight - h) / 2
    let s = w / width
    return { width: w, height: h, left, top, scale: s }
}

/**
 * 自适应容器大小  按容器高度处理
 * 按照不同的类型， 计算出 原始大小自适应之后， 得到的新的大小，距容器上、左侧的距离，以及缩放的比例
 * @typedef {{width:number,height:number}} Size
 * @param {Size} size 内容大小
 * @param {Size} containerSize 容器大小
 * @returns {{width:number,height:number,left:number,top:number,scale:number}} 返回值， 适应后的size和比例
 */
function fitContainerHeight(size: Size, containerSize: Size) {
    const { width, height } = size
    const { width: cWidth, height: cHeight } = containerSize
    let h = cHeight
    let w = (width / height) * cHeight // 向外扩展
    let left = (cWidth - w) / 2
    let top = 0
    let s = w / width
    return { width: w, height: h, left, top, scale: s }
}

export { fitContainerHeight, fitContainerWidth, fitContentWidth, fitContentHeight }
