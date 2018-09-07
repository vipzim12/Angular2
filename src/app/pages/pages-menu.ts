import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'nb-e-commerce',
    link: '/admin/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'nb-home',
    link: '/admin/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/admin/ui-features',
    children: [
      {
        title: 'Buttons',
        link: '/admin/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/admin/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/admin/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/admin/ui-features/modals',
      },
      {
        title: 'Popovers',
        link: '/admin/ui-features/popovers',
      },
      {
        title: 'Typography',
        link: '/admin/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/admin/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/admin/ui-features/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/admin/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/admin/forms/layouts',
      },
    ],
  },
  // {
  //   title: 'Components',
  //   icon: 'nb-gear',
  //   children: [
  //     {
  //       title: 'Tree',
  //       link: '/login/components/tree',
  //     }, {
  //       title: 'Notifications',
  //       link: '/login/components/notifications',
  //     },
  //   ],
  // },
  {
    title: 'Users',
    icon: 'nb-person',
    children: [
      {
        title: 'List',
        link: '/admin/user/select',
        icon: 'nb-list',
      },
      {
        title: 'Add New',
        link: '/admin/user/add-new',
        icon: 'nb-plus'
      }
    ]
  },
  {
    title: 'Group Categories',
    icon: 'nb-grid-b-outline',
    children: [
      {
        title: 'List',
        link: '/admin/group-category/all',
        icon: 'nb-list',
      },
      {
        title: 'Add New',
        link: '/admin/group-category/add-new',
        icon: 'nb-plus'
      }
    ]
  },
  {
    title: 'Category',
    icon: 'nb-keypad',
    children: [
      {
        title: 'List',
        link: '/admin/category/all',
        icon: 'nb-list',
      },
      {
        title: 'Add New',
        link: '/admin/category/add-new',
        icon: 'nb-plus'
      }
    ]
  },
  {
    title: 'Products',
    icon: 'nb-coffee-maker',
    children: [
      {
        title: 'List',
        link: '/admin/product/all',
        icon: 'nb-list',
      },
      {
        title: 'Add New',
        link: '/admin/product/add-new',
        icon: 'nb-plus'
      }
    ]
  },
  {
    title: 'Orders',
    icon: 'nb-edit',
    children: [
      {
        title: 'List',
        link: '/admin/orders/all',
        icon: 'nb-list',
      },
      {
        title: 'Add New',
        link: '/admin/order/add-new',
        icon: 'nb-plus'
      }
    ]
  },
  {
    title: 'Order Detail',
    icon: 'nb-compose',
    children: [
      {
        title: 'List',
        link: '/admin/order-detail',
        icon: 'nb-list',
      },
      {
        title: 'Add New',
        link: '/admin/order-detail/add-new',
        icon: 'nb-plus'
      }
    ]
  },
  {
    title: 'Roles',
    icon: 'nb-list',
    children: [
      {
        title: 'List',
        link: '/admin/roles',
        icon: 'nb-list'
      },
      {
        title: 'Add New',
        link: '/admin/roles/add-new',
        icon: 'nb-plus'
      }
    ]
  },
  // {
  //   title: 'Maps',
  //   icon: 'nb-location',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/admin/maps/gmaps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/admin/maps/leaflet',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/admin/maps/bubble',
  //     },
  //     {
  //       title: 'Search Maps',
  //       link: '/admin/maps/searchmap',
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   icon: 'nb-bar-chart',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/admin/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/admin/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/admin/charts/d3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: 'nb-title',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/admin/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/admin/editors/ckeditor',
  //     },
  //   ],
  // },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/admin/tables/smart-table',
      },
    ],
  },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'nb-shuffle',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
