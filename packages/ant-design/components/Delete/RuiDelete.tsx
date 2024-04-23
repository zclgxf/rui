/*
 * @Descripttion: 
 * @version: 
 * @Author: Gou xuefei
 * @Email: 
 * @Date: 2024-04-18 15:57:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2024-04-23 11:07:27
 */
import React,{useState } from 'react';
import { Button, Modal } from "antd";


const RuiDelete = (props: any) => {
	const [state, setState] = useState({
		visible: false,
	  });
	  	// 取消
	const cancel = () => {
		setState({ ...state,visible: false })
	};
	// 确定 异步删除
	const ok = async (id: number | string) => {try {
		return await new Promise((resolve, reject) => {
			setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
		});
	} catch {
		return console.log('Oops errors!');
	}};
	// 删除弹框
	const openModel = () => {
		setState({
			visible: true,
		
		})
	  };
// 保留其原始属性
  return (
	<>
		<Button {...props} onClick={openModel} danger type="link">{props.text || '删除'}</Button>
		<Modal
			title={props?.title || 'title'}
			open={state.visible}
			onOk={() => ok(props?.id)}
			onCancel={() => cancel()}
			footer={[
				<Button
				key="cancel"
				onClick={() => cancel()}>
					{ props?.cancelText || '取消'}
				</Button>,
				<Button 
					key="submit" 
					type={props?.okType ||'primary'} 
					size={props?.okSize ||'middle'}	
				 	onClick={() => ok(props?.id)} 
				 	danger>
						{ props?.okText || '确定'}
					</Button>
			]}
		>
			{props.tips || `确认删除当前？`}
		</Modal>
	</>
)
}

export default RuiDelete