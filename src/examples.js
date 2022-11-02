import Counter from './ex-1025-2/Counter';
import JsxValue from './ex-1026-1/JsxValue';
import StudentList from './ex-1026-2/StudentList';
import Menu from './ex-1026-p/Menu';
import Demo from './ex-1026-3/Demo';
import Parent from './ex-1027-1/Parent';

//export defualt的話可以在導入(import)時直接改名
import ParentPropTypes from './ex-1027-2/Parent';
import ParentDataFlow from './ex-1027-3/Parent';

import InputDemo from './ex-1028-1/InputDemo';
import HTML5Form from './ex-1028-2/HTML5Form';
import BMI from './ex-1028-p1/BMI';
import Age from './ex-1028-p2/age';
import TodoApp from './ex-1031-3/TodoApp';
import MultipleInput from './ex-1101-1/MultipleInput';

export const examples = [
  {
    name: '1101-1 多個表單元素共用單一state',
    path: '/ex-1101-1/MultipleInput.js',
    component: MultipleInput,
  },
  {
    name: '1031-3 Todo待辦事項',
    path: '/ex-1031-3/TodoApp',
    component: TodoApp,
  },
  {
    name: '1028-p2 是否18歲',
    path: '/ex-1028-p2/age',
    component: Age,
  },
  {
    name: '1028-p1 BMI計算',
    path: '/ex-1028-p1/BMI',
    component: BMI,
  },
  {
    name: '1028-2 各種可控的表單元件',
    path: '/ex-1028-2/HTML5Form.js',
    component: HTML5Form,
  },
  { name: '1025-1 計數器', path: './ex-1025-2/Counter', component: Counter },
  {
    name: '1026-1 JSX中的值與表達式',
    path: './ex-1026-1/JsxValue',
    component: JsxValue,
  },
  {
    name: '1026-2 學生列表清單',
    path: './ex-1026-2/StudentList',
    component: StudentList,
  },
  {
    name: '1026-p Menu練習',
    path: './ex-1026-p/Menu',
    component: Menu,
  },
  {
    name: '1026-3 物件陣列狀態處理',
    path: './ex-1026-3/Demo',
    component: Demo,
  },
  {
    name: '1027-1 props屬性',
    path: '/ex-1027-1/Parent.js',
    component: Parent,
  },
  {
    name: '1027-2 proptypes',
    path: '/ex-1027-2/Parent.js',
    component: ParentPropTypes,
  },
  {
    name: '1027-3 三種資料流',
    path: '/ex-1027-3/Parent.js',
    component: ParentDataFlow,
  },
  {
    name: '1028-1 可控不可控表單元件',
    path: '/ex-1028-1/InputDemo.js',
    component: InputDemo,
  },
];
