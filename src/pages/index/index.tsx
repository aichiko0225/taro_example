import { Component, PropsWithChildren } from 'react'
import { View, Text, Slot } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import {
  Button,
  MiniLoginButton
} from '@antmjs/vantui'

interface IndexState {
  show: boolean
  date?: string
}

export default class Index extends Component<PropsWithChildren, IndexState> {

  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <van-button type='primary' onClick={this.showCalendar}>显示日历</van-button>
        <van-calendar
          show={this.state.show}
          showConfirm
          type='range'
          onClose={this.closeCalendar}
          onConfirm={this.onConfirm}
        >
          <Slot name='title'>
            <View>日期选择---自定义Slot</View>
          </Slot>
        </van-calendar>
        <View>
          {this.state.date}
        </View>
        <View>
          <Text onClick={() => { Taro.navigateTo({ url: '/pages/about/index' }) }}>goto about</Text>
        </View>

        <View>
          <Button type="default">默认按钮</Button>
          <Button type="primary">主要按钮</Button>
          <Button type="info">信息按钮</Button>
          <Button type="warning">警告按钮</Button>
          <Button type="danger">危险按钮</Button>
        </View>
        <View>
          <MiniLoginButton onFail={function (error: TaroGeneral.CallbackResult): void {
            // throw new Error('Function not implemented.')
          } } onGetLoginCode={function (loginInfo: Taro.login.SuccessCallbackResult): void {
            // throw new Error('Function not implemented.')
          } } >登录按钮</MiniLoginButton>
        </View>
      </View>
    )
  }

  showCalendar = () => {
    this.setState({
      show: true
    })
  }

  closeCalendar = () => {
    this.setState({
      show: false
    })
  }

  formatDate(date: Date) {
    const t_date = new Date(date)
    return `${t_date.getFullYear()}/${t_date.getMonth() + 1}/${t_date.getDate()}`
  }

  onConfirm = (event) => {
    console.log(event)
    const dateArr: Date[] = event.detail
    this.setState({
      show: false,
      date: `${this.formatDate(dateArr[0])}-${this.formatDate(dateArr[1])}`
    })
  }
}
