export interface IOption {
    /**
     * 声明是自定义组件
     */
    component: true;
    /**
     * 声明依赖的自定义组件所在路径： 项目绝对路径以 “/” 开头，相对路径以 “./” 或者 “../” 开头
     */
    usingComponents: {
        /**
         * 声明依赖的自定义组件所在路径： 项目绝对路径以 “/” 开头，相对路径以 “./” 或者 “../” 开头
         */
        [key: string]: string;
    };
}
