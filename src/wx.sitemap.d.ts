export type IOption = ISiteMap

interface ISiteMap {
  /**
   * 索引规则列表
   */
  rules: IRule[]
}

interface IRule {
  /**
   * 命中该规则的页面是否能被索引
   */
  action: 'allow' | 'disallow'
  /**
   * `*` 表示所有页面，不能作为通配符使用
   */
  page: string
  /**
   * 当 page 字段指定的页面在被本规则匹配时可能使用的页面参数名称的列表（不含参数值）
   */
  params: string[]
  /**
   * 当 page 字段指定的页面在被本规则匹配时，此参数说明 params 匹配方式
   */
  matching: 'inclusive' | 'exact' | 'exclusive' | 'partial'
  /**
   * 优先级，值越大则规则越早被匹配，否则默认从上到下匹配
   */
  priority: number
}
