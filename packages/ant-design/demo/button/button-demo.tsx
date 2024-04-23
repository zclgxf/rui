import React from 'react'
import { RuiButton, RuiDelete } from '@much-more/vc-ant-design';

const ButtonDemo = () => {
  return <>
      <RuiButton  text="测试按钮" />
      <RuiDelete text="删除按钮" id="1" tips="删除tips" />
    </>
}

export default ButtonDemo
