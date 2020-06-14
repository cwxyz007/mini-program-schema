import { YNBoolean, HexColor, Ali } from './common'

export type IOption = IApp

export interface IApp {
  /**
   * 设置页面路径
   */
  pages: string[]
  /**
   * 设置默认页面的窗口表现
   */
  window: Ali.App.IWindow
  /**
   * 设置底部 tabbar 的表现
   */
  tabBar: ITabBar
}
interface ITabBar {
  /**
   * 文字颜色
   */
  textColor: HexColor
  /**
   * 选中文字颜色
   */
  selectedColor: HexColor
  /**
   * 背景色
   */
  backgroundColor: HexColor
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
