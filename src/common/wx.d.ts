import { YNBoolean, HexColor } from './utils'

export namespace Wx {
  export namespace App {
    interface IWindow {
      /**
       * 导航栏背景颜色，如 #000000
       */
      navigationBarBackgroundColor: HexColor
      /**
       * 导航栏标题颜色，仅支持 black / white
       */
      navigationBarTextStyle: 'black' | 'white'
      /**
       * 导航栏标题文字内容
       */
      navigationBarTitleText: string
      /**
       * 导航栏样式，仅支持以下值：
       * - default 默认样式
       * - custom 自定义导航栏，只保留右上角胶囊按钮。参见注 2。
       */
      navigationStyle: 'default' | 'custom'
      /**
       * 窗口的背景色
       */
      backgroundColor: HexColor
      /**
       * 下拉 loading 的样式，仅支持 dark / light
       */
      backgroundTextStyle: 'dark' | 'light'
      /**
       * 顶部窗口的背景色，仅 iOS 支持
       */
      backgroundColorTop: HexColor
      /**
       * 底部窗口的背景色，仅 iOS 支持
       */
      backgroundColorBottom: HexColor
      /**
       * 是否开启全局的下拉刷新。详见 [Page.onPullDownRefresh](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onpulldownrefresh)
       */
      enablePullDownRefresh: boolean
      /**
       * 页面上拉触底事件触发时距页面底部距离，单位为 px。详见 [Page.onReachBottom](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onreachbottom)
       */
      onReachBottomDistance
      /**
       * 屏幕旋转设置，支持 auto / portrait / landscape详见 [响应显示区域变化](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html)
       */
      pageOrientation: 'auto' | 'portrait' | 'landscape'
    }
  }

  export namespace Page {}

  export namespace Component {
    /**
     * 声明依赖的自定义组件所在路径： 项目绝对路径以 “/” 开头，相对路径以 “./” 或者 “../” 开头
     */
    interface IUsingComponent {
      [key: string]: string
    }
  }
}
