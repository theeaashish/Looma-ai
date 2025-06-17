import AutomationIcon from "@/icons/AutomationIcon";
import ContactIcon from "@/icons/ContactIcon";
import HomeIcon from "@/icons/HomeIcon";
import IntegrationIcon from "@/icons/IntegrationIcon";
import SettingsIcon from "@/icons/SettingsIcon";

export const PAGE_BREAD_CRUMBS: string[] = [
  "contacts",
  "automations",
  "integrations",
  "settings",
];

type Props = {
  [page in string]: React.ReactNode;
};

export const PAGE_ICONS: Props = {
  AUTOMATIONS: <AutomationIcon />,
  CONTACTS: <ContactIcon />,
  INTEGRATIONS: <IntegrationIcon />,
  SETTINGS: <SettingsIcon />,
  HOME: <HomeIcon />,
};

export const PLANS = [
  {
    name: "Free Plan",
    description: "Perfect for getting started",
    price: "$0",
    features: [
      "Boost engagement with target responses",
      "Automate comment replies to enhance audience interaction",
      "Turn followers into customers with targeted messaging",
    ],
    cta: "Get Started",
  },
  {
    name: "Smart AI Plan",
    description: "Advanced features for power users",
    price: "$99",
    features: [
      "All features from Free Plan",
      "AI-powered response generation",
      "Advanced analytics and insights",
      "Priority customer support",
      "Custom branding options",
    ],
    cta: "Upgrade Now",
  },
];
