import { 
  DashboardOutlined,
  FileTextOutlined,
  GiftOutlined,
  MailOutlined,
  MobileOutlined,
  PictureOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const mainNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'sidenav.main',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'main-dashboard',
      path: `${APP_PREFIX_PATH}/main/dashboard`,
      title: 'sidenav.main.dashboard',
      icon: DashboardOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'main-catalog',
      path: `${APP_PREFIX_PATH}/main/catalog`,
      title: 'sidenav.main.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-catalog-goods',
          path: `${APP_PREFIX_PATH}/main/catalog/goods`,
          title: 'sidenav.main.catalog.goods',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'main-catalog-categories',
          path: `${APP_PREFIX_PATH}/main/catalog/categories`,
          title: 'sidenav.main.catalog.categories',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'main-catalog-collections',
          path: `${APP_PREFIX_PATH}/main/catalog/collections`,
          title: 'sidenav.main.catalog.collections',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'main-catalog-combo',
          path: `${APP_PREFIX_PATH}/main/catalog/combo`,
          title: 'sidenav.main.catalog.combo',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
      ]
    },
    {
      key: 'main-orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'sidenav.main.orders',
      icon: ShoppingOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'main-clients',
      path: `${APP_PREFIX_PATH}/main/clients`,
      title: 'sidenav.main.clients',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-clients-clientsList',
          path: `${APP_PREFIX_PATH}/main/clients/clients-list`,
          title: 'sidenav.main.clients.clientsList',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'main-clients-clientsGroups',
          path: `${APP_PREFIX_PATH}/main/clients/clients-groups`,
          title: 'sidenav.main.clients.clientsGroups',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
      ]
    },
    {
      key: 'main-banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'sidenav.main.banners',
      icon: PictureOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'main-coupons',
      path: `${APP_PREFIX_PATH}/main/coupons`,
      title: 'sidenav.main.coupons',
      icon: GiftOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'main-offlineShops',
      path: `${APP_PREFIX_PATH}/main/offline-shops`,
      title: 'sidenav.main.offlineShops',
      icon: ShopOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-offlineShops-addresses',
          path: `${APP_PREFIX_PATH}/main/offline-shops/addresses`,
          title: 'sidenav.main.offlineShops.addresses',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'main-offlineShops-geozones',
          path: `${APP_PREFIX_PATH}/main/offline-shops/geozones`,
          title: 'sidenav.main.offlineShops.geozones',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
      ]
    },
    {
      key: 'main-employees',
      path: `${APP_PREFIX_PATH}/main/employees`,
      title: 'sidenav.main.employees',
      icon: TeamOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'main-mailings',
      path: `${APP_PREFIX_PATH}/main/mailings`,
      title: 'sidenav.main.mailings',
      icon: MailOutlined,
      breadcrumb: true,
      submenu: []
    },
  ]
},];

const systemNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'sidenav.system',
  icon: SettingOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'system-settings',
      path: `${APP_PREFIX_PATH}/system/settings`,
      title: 'sidenav.system.settings',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-mobileApps',
      path: `${APP_PREFIX_PATH}/system/settings/mobile-apps`,
      title: 'sidenav.system.mobileApps',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-logs',
      path: `${APP_PREFIX_PATH}/system/settings/logs`,
      title: 'sidenav.system.logs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const navigationConfig = [
  ...mainNavTree,
  ...systemNavTree
]

export default navigationConfig;
