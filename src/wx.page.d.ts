import { Wx } from './common'

export type IOption = IPage

export interface IPage extends Wx.App.IWindow {
  /**
   * 设置为 true 则页面整体不能上下滚动。只在页面配置中有效，无法在 app.json 中设置
   */
  disableScroll: boolean
  /**
   * 页面自定义组件配置
   */
  usingComponents: Wx.Component.IUsingComponent
  /**
   * 启用新版的组件样式
   */
  style: string
}
