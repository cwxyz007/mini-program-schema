import { IWindow } from './ali.app'

export type IOption = IPage

export interface IPage extends IWindow {
  /**
   * 设置导航栏点击穿透，取值（"YES"，"NO"）
   */
  titlePenetrate: 'YES' | 'NO'
  /**
   * 设置导航栏图标主题，仅支持真机预览。“default”为蓝色图标，“light”为白色图标，
   */
  barButtonTheme: 'default' | 'light'
}
