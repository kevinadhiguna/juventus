import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // color : Daybreak blue
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Juventus Players Dashboard',
  pwa: true,
  logo: 'https://s9.gifyu.com/images/another-juve.png',
  iconfontUrl: '',
};

export default Settings;
