import React, { useState,useEffect } from 'react';
import styles from './index.css';
/*
https://mobile.ant.design/components/tabs-cn/#components-tabs-demo-sticky
https://github.com/ant-design/pro-table
*/
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Tabs, WhiteSpace,Input } from 'antd-mobile';
const tabs = [
  { title: 'First Tab', key: 't1' },
  { title: 'Second Tab', key: 't2' },
  { title: 'Third Tab', key: 't3' },
  { title: 'Third Tab', key: 't4' },
];
const style = { display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }
const columns = [
  { title: 'Name', dataIndex: 'name', copyable: true, },
  { title: 'Age', dataIndex: 'age', },
  { title: 'date', dataIndex: 'date', valueType: 'date', },
  { title: 'option', valueType: 'option', dataIndex: 'id',
    render: (text, row, index, action) => [
      <a onClick={() => {  action.reload(); }} > delete </a>,
      <a onClick={() => {   action.reload();  }} > reload </a>,
    ],
  },
];
useEffect(() => {
   
});
export default () => {
  return (
    <div>
       <Tabs tabs={tabs} swipeable={false} initialPage={'t1'} >
        <div style={style }>
           
        </div>
        <div style={style }>
           
        </div>
        <div style={style }>
           
        </div>
        <div style={style }>
           
        </div>
      </Tabs>
      <ProTable
      size="small" columns={columns}
      request={() => ({ data: [ { name: 'Jack', age: 12, date: '2020-01-02', }, ], })}
      rowKey="name"
      params={{ keywords }}
      toolBarRender={(action) => [ <Input.Search style={{ width: 200,}} onSearch={(value) => setKeywords(value)} />, ]}
      pagination={{ defaultCurrent: 10, }}
    />
  );
};
    </div>
  );
}
