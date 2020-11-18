/*
https://mobile.ant.design/docs/react/introduce-cn
https://docs.qq.com/doc/DT0VtRGpmV2tEZVpy
*/
import React, { useState, useEffect } from 'react';
import { Slider, WingBlank,WhiteSpace,Tabs,Modal} from 'antd-mobile';
import {  Input,Affix } from 'antd';

import ProTable, { ProColumns } from '@ant-design/pro-table';
 
import { getExcelJosn,deleteExcel } from './utils';
import '../node_modules/antd-mobile/dist/antd-mobile.css'; 
import './index.css'; 

const tabs = [ { title: '库存管理', key: 't1' }, { title: '进度管理', key: 't2' }, { title: '工作日报', key: 't3' }, { title: '报表查询', key: 't4' }, ];
const style = { display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }


export default () => {
  const [keywords, setKeywords] = useState('');
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
   useEffect(() => { 
    getData({ search:'',page:1,pageSize:10 })
  },[]);
  const getData = (arg)=>{
    getExcelJosn(arg).then(res=>{
      setList(res.data)
      setPage(res.page)
      setCount(res.count)
    })
  }
  const deleteOne = (id)=>{
    deleteExcel(id).then(res=>{
       
    })
  }
  const showAlert = (row) => { 
    Modal.alert('删除', '是否准备删除词元素?', [
      { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
      { text: '确定', onPress: () => deleteOne(row.id) },
    ]); 
  };
  
  const columns = [   //商品编号	商品名称	型号	库存单位	仓位	存放位置	类别	备注 
    { title: '操作', valueType: 'option', dataIndex: 'id',
      render: (text, row, index, action) => [
        <a key='delete' onClick={() => {   showAlert(row);action.reload(); }} > 删除 </a>, ,
      ],
    },
    { title: '商品编号', dataIndex: 'number', copyable: true, },
    { title: '商品名称', dataIndex: 'name', },
    { title: '型号', dataIndex: 'mark',  hideInSearch:false },
    { title: '库存单位', dataIndex: 'unit',   hideInSearch:false},
    { title: '仓位', dataIndex: 'store',   hideInSearch:false},
    { title: '存放位置', dataIndex: 'position',  hideInSearch:false },
    { title: '类别', dataIndex: 'type',  hideInSearch:false },
    { title: '备注', dataIndex: 'desc',  hideInSearch:false },
    
  ];
  return (
    <div> 
      <Tabs className="top" tabs={tabs} swipeable={false} initialPage={'t1'} />
      <ProTable
      size="small" columns={columns}
      request={ () => { return { data: list }; }}
      rowKey="id" params={{ keywords }}
      toolBarRender={(action) => [  
      <Input.Search key="search" style={{ width: 200,}} 
      placeholder={'可用编号或名称查询'}
      onSearch={(value) => {
        setKeywords(value)
        getData({search:value,page:1,pageSize:10})
      }} /> ]}
      pagination={{ 
        simple: true,
        defaultCurrent: page,
        pageSize: 10,
        total: count,
        showTotal: (count) => {
          let pageNum = Math.ceil(count / 10);
          return '共' + pageNum + '页' + '/' + count + ' 条';
        },
        onChange: (index)=>{ 
          getData({search:keywords,page:index,pageSize:10})
        }
      }}
    />
    </div>
  );
}
