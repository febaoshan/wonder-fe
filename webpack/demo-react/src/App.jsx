import React from 'react'
import ReactDom from 'react-dom'

// 问题一：ES6 代码的转换
const App = () => {
    return (
        <div>
            <h1>React 大法好!!!</h1>
            <div>我勒个去，终于成功了！webpack的配置确实有点老火</div>
        </div>
    )
}

export default App

// 问题二：html 代码的处理
ReactDom.render(<App />, document.getElementById('app'))
