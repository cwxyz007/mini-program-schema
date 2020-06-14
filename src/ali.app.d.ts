import { YNBoolean } from './common'

export type IOption = IApp

export interface IApp {
  /**
   * 设置页面路径
   */
  pages: string[]
  /**
   * 设置默认页面的窗口表现
   */
  window: IWindow
  /**
   * 设置底部 tabbar 的表现
   */
  tabBar: ITabBar
}

export interface IWindow {
  /**
   * 页面默认标题。
   */
  defaultTitle: string
  /**
   * 	是否允许下拉刷新，默认 true。
   *
   * 备注：
   *
   * 下拉刷新生效的前提是 allowsBounceVertical 值为 YES。
   *
   * window 全局配置后全局生效，但是如果单个页面配置了该参数，以页面的配置为准。
   */
  pullRefresh: boolean
  /**
   * 是否允许向下拉拽。默认 YES, 支持 YES / NO
   */
  allowsBounceVertical: YNBoolean
  /**
   * 导航栏透明设置。默认 none，支持 always 一直透明 / auto 滑动自适应 / none 不透明
   */
  transparentTitle: 'none' | 'always' | 'auto'
  /**
   * 是否允许导航栏点击穿透。默认 NO，支持 YES / NO
   */
  titlePenetrate: YNBoolean
  /**
   * 是否进入时显示导航栏的 loading。默认 NO，支持 YES / NO
   */
  showTitleLoading: YNBoolean
  /**
   * 导航栏图片地址。
   */
  titleImage: string
  /**
   * 	导航栏背景色。例：白色 "#FFFFFF"。
   */
  titleBarColor: string
  /**
   * 页面的背景色。例：白色 "#FFFFFF"。
   */
  backgroundColor: string
  /**
   * 下拉露出显示背景图的底色。例：白色 "#FFFFFF"。
   */
  backgroundImageColor: string
  /**
   * 下拉露出显示背景图的链接。
   */
  backgroundImageUrl: string
  /**
   * 仅支持 iOS，是否支持手势返回。默认 YES，支持 YES / NO。
   */
  gestureBack: YNBoolean
  /**
   * 仅支持 Android，是否显示 WebView 滚动条。默认 YES，支持 YES / NO。
   */
  enableScrollBar: YNBoolean
  /**
   * 页面上拉触底时触发时距离页面底部的距离，单位为px。相关文档页面事件处理函数。
   */
  onReachBottomDistance: number
  /**
   * rpx 单位是否宽度自适应 ，默认true，当设置为 false 时，2rpx 将恒等于 1px，不再根据屏幕宽度进行自适应，注意，此时 750rpx 将不再等于100% 宽度。
   */
  responsive: boolean
}

interface ITabBar {
  /**
   * 文字颜色
   */
  textColor: string
  /**
   * 选中文字颜色
   */
  selectedColor: string
  /**
   * 背景色
   */
  backgroundColor: string
  /**
   * 每个 tab 配置
   */
  items: ITabBarItem[]
}

interface ITabBarItem {
  /**
   * 设置路径配置
   */
  pagePath: string
  /**
   * 名称
   */
  name: string
  /**
   * 平常图标路径（非选中状态）
   */
  icon: string
  /**
   * 高亮图标路径（选中状态）
   */
  activeIcon: string
}
