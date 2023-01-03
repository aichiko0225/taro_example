import { Component, PropsWithChildren } from 'react'
import './app.scss'
// 不需要更改主题，引用它
// eslint-disable-next-line import/first
import '@antmjs/vantui/lib/index.css'
// 需要通过less变量/var()更改主题，引用它
// eslint-disable-next-line import/first
import "@antmjs/vantui/lib/index.less";

class App extends Component<PropsWithChildren> {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
