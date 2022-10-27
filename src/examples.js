import Counter from './ex-1025-2/Counter';
import JsxValue from './ex-1026-1/JsxValue';
import StudentList from './ex-1026-2/StudentList';
import Menu from './ex-1026-p/Menu';
import Demo from './ex-1026-3/Demo';

export const examples = [
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
];
