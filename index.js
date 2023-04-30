const arr = [
    ['红豆奶茶', './image/红豆奶茶.png'],
    ['红糖奶茶', './image/红糖奶茶.png'],
    ['蜜桃朵朵', './image/蜜桃朵朵.png'],
    ['抹茶奶茶', './image/抹茶奶茶.jpg'],
    ['奶盖奶茶', './image/奶盖奶茶.png'],
    ['鲜榨果汁', './image/鲜榨果汁.png'],
    ['香芒奶茶', './image/香芒奶茶.jpg'],
    ['樱子奶茶', './image/樱子奶茶.jpg'],
    ['脏脏奶茶', './image/脏脏奶茶.jpg']
]
const btn = document.getElementById('btn')
const img = document.getElementById('img')
const text = document.getElementById('text')

let current = 0
let autoChange = (function () {
    let timer = null
    // 开启定时器，切换图片
    return () => {
        if (timer === null) {
            timer = setTimeout(function auto() {
                // 修改索引
                current++
                // 检查current值是否合法
                if (current > arr.length - 1) {
                    current = 0
                }
                text.innerText = arr[current][0]
                img.src = arr[current][1]
                timer = setTimeout(auto, 100)
            }, 100)
        } else {
            // 关闭定时器
            clearTimeout(timer)
            timer = null
        }
    }
})()
btn.onclick = function () {
    autoChange()
}


