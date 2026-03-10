// ─── Navigation Config ──────────────────────────────────────────────────────
//
// Each item can have:
//   key     – i18n translation key used for the label
//   label   – optional literal text (overrides key/translation)
//   link    – route path or external URL (omit for pure group/dropdown)
//   header  – show in header navigation
//   footer  – show in footer navigation
//   external – opens in new tab, renders external-link icon
//   children – dropdown entries (supports one level of nested sub-children)
//
// ────────────────────────────────────────────────────────────────────────────

export interface NavSubItem {
  key: string;
  label?: string;
  link: string;
  external?: boolean;
}

export interface NavChildItem {
  key: string;
  label?: string;
  link?: string;
  external?: boolean;
  children?: NavSubItem[];
}

export interface NavItem {
  key: string;
  label?: string;
  link?: string;
  header: boolean;
  footer: boolean;
  external?: boolean;
  children?: NavChildItem[];
}

export const navConfig: NavItem[] = [
  {
    key: "navigation.home",
    link: "/",
    header: true,
    footer: true,
  },
  {
    key: "navigation.headers",
    link: "/template/headers",
    header: true,
    footer: true,
  },
  {
    key: "navigation.elements",
    header: true,
    footer: false,
    children: [
      {
        key: "navigation.buttons",
        link: "/template/buttons",
      },
      {
        key: "navigation.cardCollections",
        link: "/template/card-collections",
      },
      {
        key: "navigation.cards",
        link: "/template/cards",
      },
    ],
  },
];
