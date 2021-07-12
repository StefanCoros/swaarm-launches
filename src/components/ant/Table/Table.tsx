import React from 'react';
import { Table as AntTable } from 'antd';
import './Table.scss';

export const Table = (props: any) => {
  return <AntTable {...props} />;
};