/*
 * @Descripttion: 
 * @version: 
 * @Author: Gou xuefei
 * @Email: 
 * @Date: 2024-04-18 15:57:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2024-04-23 10:24:15
 */
import React from 'react';
import { Button } from "antd";

const RuiButton = (props: any) => {
  // 保留其原始属性
  return <Button {...props}>{props?.text || 'button'}</Button>;
}

export default RuiButton;