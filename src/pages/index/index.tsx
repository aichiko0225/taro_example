import { Component, PropsWithChildren } from 'react'
import { View, Text, Slot } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'

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
            <View>Hello world</View>
          </Slot>
        </van-calendar>
        <View>
          {this.state.date}
        </View>
        <View>
          <Text onClick={() => { Taro.navigateTo({ url: '/pages/about/index' }) }}>Hello world!</Text>
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
