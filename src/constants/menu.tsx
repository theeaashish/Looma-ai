import AutomationIcon from "@/icons/AutomationIcon";
import HomeIcon from "@/icons/HomeIcon";
import IntegrationIcon from "@/icons/IntegrationIcon";
import SettingsIcon from "@/icons/SettingsIcon";
import { v4 as uuid } from "uuid";

type FieldProps = {
    label: string;
    id: string;
}

type SideBarProps = {
    icon: React.ReactNode;
} & FieldProps

export const SIDEBAR_MENU: SideBarProps[] = [
    {
        id: uuid(),
        label: 'home',
        icon: <HomeIcon />
    },
    {
        id: uuid(),
        label: 'automations',
        icon: <AutomationIcon />
    },
    {
        id: uuid(),
        label: 'integrations',
        icon: <IntegrationIcon />
    },
    {
        id: uuid(),
        label: 'settings',
        icon: <SettingsIcon />
    },
]