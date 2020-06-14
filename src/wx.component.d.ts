import { Wx } from './common'

export type IOption = IComponent

export interface IComponent {
  /**
   *
   */
  component: true
  /**
   *
   */
  usingComponents: Wx.Component.IUsingComponent
}
