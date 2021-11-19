import edit from "../../../assets/svg/edit_icon.svg";
import setting from "../../../assets/svg/settings.svg";
import lock from "../../../assets/svg/lock_open.svg";

// active
import editActive from "../../../assets/svg/edit_icon_active.svg";
import settingActive from "../../../assets/svg/settings_active.svg";
import lockActive from "../../../assets/svg/lock_open_active.svg";

export const EDIT_PROFILE_OPTION = [
  {
    name: "Edit My Account",
    icon: edit,
    iconActive: editActive,
    id: 1,
  },
  {
    name: "Profile Settings",
    icon: setting,
    iconActive: settingActive,
    id: 2,
  },
  {
    name: "Update Password",
    icon: lock,
    iconActive: lockActive,
    id: 3,
  },
  {
    name: "Documents",
    icon: setting,
    iconActive: settingActive,
    id: 4,
  },
];
