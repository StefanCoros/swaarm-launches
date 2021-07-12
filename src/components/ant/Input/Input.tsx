import React from 'react';
import { Input as AntInput } from 'antd';

import styles from './Input.module.scss';

export const Input = ({ autoComplete = 'chrome-off', ...props }) => {
  return <AntInput className={styles.input} autoComplete={autoComplete} {...props} />
};

Input.TextArea = AntInput.TextArea;
Input.Search = AntInput.Search;