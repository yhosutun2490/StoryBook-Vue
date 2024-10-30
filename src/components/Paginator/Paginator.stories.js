import { fn } from '@storybook/test';

import Paginator from './Paginator.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
/** 
 * - totalRecords 資料總數
 * - rows 每個分頁要顯示的資料筆數 
 * - pageLinkSize 分頁器顯示數量  
 * - 文件 [PrimeVue Paginator](https://primevue.org/paginator/#currentpagereport)
 ***
 ### data (emit)
 * - 目前頁數 currentPage
 * */

export default {
  title: 'Paginator',
  component: Paginator,
  tags: ['autodocs'],
  argTypes: {

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary = {
  args: {
    totalRecords: 50,
    rows: 10,
    pageLinkSize: 3
  },
};


