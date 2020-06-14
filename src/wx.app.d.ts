import { HexColor, Wx } from './common'

export type IOption = IApp

export interface IApp {
  /**
   * 页面路径列表
   */
  pages: string[]
  /**
   * 全局的默认窗口表现
   */
  window: Wx.App.IWindow
  /**
   * 底部 tab 栏的表现
   */
  tabBar: ITabBar
  /**
   * 网络超时时间
   */
  networkTimeout: INetworkTimeout
  /**
   * 是否开启 debug 模式，默认关闭
   */
  debug: boolean
  /**
   * 是否启用插件功能页，默认关闭
   */
  functionalPage: boolean
  /**
   * 分包结构配置
   */
  subpackages: ISubPackage[]
  /**
   * Worker 代码放置的目录
   */
  workers: string
  /**
   * 需要在后台使用的能力，如「音乐播放」
   */
  requiredBackgroundModes: IRequiredBackgroundModes[]
  /**
   * 使用到的插件
   */
  plugins: IPlugin
  /**
   * 分包预下载规则
   */
  preloadRule: IPreloadRule
  /**
   * PC 小程序是否支持用户任意改变窗口大小（包括最大化窗口）；iPad 小程序是否支持屏幕旋转。默认关闭
   */
  resizable: boolean
  /**
   * 全局自定义组件配置
   */
  usingComponents: Wx.Component.IUsingComponent
  /**
   * 小程序接口权限相关设置
   */
  permission: IPermission
  /**
   * 	指明 sitemap.json 的位置
   */
  sitemapLocation: string
  /**
   * 指定使用升级后的weui样式
   */
  style: string
  /**
   * 指定需要引用的扩展库
   */
  useExtendedLib: IUseExtendedLib
  /**
   * 微信消息用小程序打开
   */
  entranceDeclare: IEntranceDeclare
  /**
   * 	小程序支持 DarkMode
   */
  darkmode: boolean
  /**
   * 指明 theme.json 的位置，darkmode为true为必填
   */
  themeLocation: string
  /**
   * 配置自定义组件代码按需注入
   */
  lazyCodeLoading: string
}

type IRequiredBackgroundModes = 'audio' | 'location'

interface ITabBar {
  /**
   * tab 上的文字默认颜色，仅支持十六进制颜色
   */
  color: HexColor
  /**
   * tab 上的文字选中时的颜色，仅支持十六进制颜色
   */
  selectedColor: HexColor
  /**
   * tab 的背景色，仅支持十六进制颜色
   */
  backgroundColor: HexColor
  /**
   * tabbar 上边框的颜色， 仅支持 black / white
   */
  borderStyle: 'black' | 'white'
  /**
   * tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab
   */
  list: ITabBarListItem[]
  /**
   * tabBar 的位置，仅支持 bottom / top
   */
  position: 'bottom' | 'top'
  /**
   * 自定义 tabBar，见[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)
   */
  custom: boolean
}

interface ITabBarListItem {
  /**
   * 页面路径，必须在 pages 中先定义
   */
  pagePath: string
  /**
   * 	tab 上按钮文字
   */
  text: string
  /**
   * 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。当 position 为 top 时，不显示 icon。
   */
  iconPath: string
  /**
   * 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。当 position 为 top 时，不显示 icon。
   */
  selectedIconPath: string
}

interface INetworkTimeout {
  /**
   * [wx.request](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html) 的超时时间，单位：毫秒。
   */
  request: number
  /**
   * [wx.connectSocket](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.connectSocket.html) 的超时时间，单位：毫秒。
   */
  connectSocket: number
  /**
   * [wx.uploadFile](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html) 的超时时间，单位：毫秒。
   */
  uploadFile: number
  /**
   * [wx.downloadFile](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html) 的超时时间，单位：毫秒。
   */
  downloadFile: number
}

interface ISubPackage {
  /**
   * 	分包根目录
   */
  root: string
  /**
   * 	分包别名，分包预下载时可以使用
   */
  name: string
  /**
   * 分包页面路径，相对与分包根目录
   */
  pages: string[]
  /**
   * 分包是否是独立分包
   */
  independent: boolean
}

interface IPlugin {
  [key: string]: {
    version: string
    provider: string
    export: string
  }
}

/**
 * preloadRule 中，key 是页面路径，value 是进入此页面的预下载配置
 */
interface IPreloadRule {
  [key: string]: {
    /**
     * 进入页面后预下载分包的 root 或 name。__APP__ 表示主包。
     */
    packages: string[]
    /**
     * 在指定网络下预下载，可选值为：
     * - all: 不限网络
     * - wifi: 仅wifi下预下载
     */
    network: 'wifi' | 'all'
  }
}

type IPermissionScopes =
  | 'scope.userInfo'
  | 'scope.userLocation'
  | 'scope.userLocationBackground'
  | 'scope.address'
  | 'scope.invoiceTitle'
  | 'scope.invoice'
  | 'scope.werun'
  | 'scope.record'
  | 'scope.writePhotosAlbum'
  | 'scope.camera'

type IPermission = Record<IPermissionScopes, IPermissionObject>

interface IPermissionObject {
  /**
   * 小程序获取权限时展示的接口用途说明。最长 30 个字符
   */
  desc: string
}

/**
 * 指定需要引用的扩展库。目前支持以下项目：
 *
 * - kbone: 多端开发框架
 * - weui: WeUI 组件库
 *
 * 指定后，相当于引入了对应扩展库相关的最新版本的 npm 包，同时也不占用小程序的包体积。目前暂不支持在分包中引用。
 */
interface IUseExtendedLib {
  kbone: boolean
  weui: boolean
}

interface IEntranceDeclare {
  /**
   * 声明“位置消息”场景进入小程序的启动页面
   */
  locationMessage: {
    /**
     * 启动页路径，必须是在pages中已经定义
     */
    path: string
    /**
     * 启动页参数
     */
    query: string
  }
}
