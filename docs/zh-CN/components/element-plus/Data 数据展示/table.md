<!--
 * @Descripttion:
 * @version:
 * @Author: Gou xuefei
 * @Email:
 * @Date: 2024-04-18 15:57:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2024-04-23 13:31:34
-->

# Table 表格

## 自定义列表格

自定义列表格用法展示。可通过 `default-columns` 控制默认显示列，如果不传，或者传空数组，则首次加载默认加载全部列。

<vp-demo
    demo-height="270px"
    source-code="element-plus:::table/table-custom-columns"
/>

## Table 属性

如需查看 element-plus 的 Table 属性，请参考：[element-plus](https://element-plus.org/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7)

| 属性            | 说明                                                      | 类型  | 可选值 | 默认值 |
| --------------- | --------------------------------------------------------- | ----- | ------ | ------ |
| default-columns | 自定义列模式中，默认选中的列。注意需要传入 `label` 的值。 | array | -      | []     |
