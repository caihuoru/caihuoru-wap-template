import Vue from 'vue'

import {
  // 1.Tabbar
  Tabbar,
  TabbarItem,
  // 2.loading组件
  Loading,
  // 3.栅栏格子
  Grid,
  GridItem,
  // 4.倒计时
  CountDown,
  // 5.图片懒加载
  Lazyload,
  // 6.Tabbar 标签栏
  Tab,
  Tabs,
  // 7.分割线
  Divider,
  // 8.轻弹窗
  Toast,
  // 9.导航栏
  NavBar,
  // 10.提交订单
  SubmitBar,
  // 11.复选框
  Checkbox,
  CheckboxGroup,
  // 12.提示框
  Dialog,
  // 13.单元格
  Cell,
  CellGroup,
  // 14.tag标记
  Tag,
  // 15.填写订单
  ContactCard,
  ContactList,
  ContactEdit,
  // 16.icon图标
  Icon,
  // 17.单选框及单选框组
  RadioGroup,
  Radio,
  // 18.switch 开关
  Switch,
  // 19.field输入框
  Field,
  // 20.联系地址
  AddressList,
  // 21.地址编辑
  AddressEdit,
  // 22.省市区选择器
  Area,
  // 23.弹出层
  Popup,
  // 24.滑动单元格
  SwipeCell,
  // 25.van Button
  Button,
  // 26.时间选择
  DatetimePicker,
  // 27.优惠券
  CouponCell,
  CouponList,
  // 28.粘性布局
  Sticky,
  // 29.侧边导航
  Sidebar,
  SidebarItem,
  // 30.商品导航
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  // 遮罩
  Overlay,
  // 布局
  Row,
  Col,
  // 輪播
  Swipe,
  SwipeItem,
  Card,
  // 折疊面板
  Collapse,
  CollapseItem,
  // 圖片
  Image,
  // 列表
  List,
  // 步進器
  Stepper,
  // 下拉刷新
  PullRefresh,
  // 數字鍵盤
  NumberKeyboard,
  // 表單
  Form,
  // sleect
  Picker,
  // 下拉菜單
  DropdownMenu,
  DropdownItem,
  Progress,
  Notify,
  NoticeBar,
  Skeleton,
  ShareSheet,
  Pagination,
  Circle,
  Uploader,
  ActionSheet,
  Popover,
  Rate
} from 'vant'

Vue.use(Tabbar).use(TabbarItem)
Vue.use(Loading)
Vue.use(Grid).use(GridItem)
Vue.use(CountDown)
// options 为可选参数，无则不传
Vue.use(Lazyload)
Vue.use(Tab).use(Tabs)
Vue.use(Divider)
Vue.use(Toast)
Vue.use(NavBar)
Vue.use(SubmitBar)
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(Dialog)
Vue.use(Cell).use(CellGroup)
Vue.use(Tag)
Vue.use(ContactCard)
  .use(ContactList)
  .use(ContactEdit)
Vue.use(Icon)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Switch)
Vue.use(Field)
Vue.use(AddressList)
Vue.use(AddressEdit)
Vue.use(Area)
Vue.use(Popup)
Vue.use(SwipeCell)
Vue.use(Button)
Vue.use(DatetimePicker)
Vue.use(CouponCell).use(CouponList)
Vue.use(Sticky)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
Vue.use(Overlay)
Vue.use(Row).use(Col)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Card)
Vue.use(Collapse).use(CollapseItem)
Vue.use(Image)
Vue.use(List)
Vue.use(Stepper)
Vue.use(PullRefresh)
Vue.use(NumberKeyboard)

Vue.use(Form)
Vue.use(Picker)

Vue.use(DropdownMenu).use(DropdownItem)
Vue.use(Progress)
Vue.use(Notify)
Vue.use(NoticeBar)
Vue.use(Skeleton)
Vue.use(ShareSheet)
Vue.use(Pagination)
Vue.use(Circle)
Vue.use(Uploader)
Vue.use(ActionSheet)
Vue.use(Popover)
Vue.use(Rate)
