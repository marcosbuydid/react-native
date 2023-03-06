import { MenuItem } from "../interfaces/AppInterface";

export const menuItems: MenuItem[] = [
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'AlertScreen'
    },

    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen'
    },

    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen'
    },

    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'SwitchesScreen'
    },

    {
        name: 'Text Inputs',
        icon: 'document-text-outline',
        component: 'TextInputScreen'
    },
]