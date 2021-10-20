import LaunchIcon from "../../../assets/svg/influencer/Rocket.svg";
import CheckSquareOffset from "../../../assets/svg/influencer/CheckSquareOffset.svg";
import CurrencyDollar from "../../../assets/svg/influencer/CurrencyDollar.svg";
import FileText from "../../../assets/svg/influencer/FileText.svg";
import Sticker from "../../../assets/svg/influencer/Sticker.svg";
import Note from "../../../assets/svg/influencer/notesActive.png";

// Active
import LaunchIconActive from "../../../assets/svg/influencer/RocketActive.svg";
import CheckSquareOffsetActive from "../../../assets/svg/influencer/CheckSquareOffsetActive.svg";
import CurrencyDollarActive from "../../../assets/svg/influencer/CurrencyDollarActive.svg";
import FileTextActive from "../../../assets/svg/influencer/FileTextActive.svg";
import StickerActive from "../../../assets/svg/influencer/StickerActive.svg";
import NoteActive from "../../../assets/svg/influencer/note.png";

export const SIDEBAR_OPTION = [
  {
    name: "Launch",
    icon: LaunchIcon,
    iconActive: LaunchIconActive,
    id: 1,
  },
  {
    name: "Details",
    icon: Sticker,
    iconActive: StickerActive,
    id: 2,
  },
  {
    name: "Completed",
    icon: CheckSquareOffset,
    iconActive: CheckSquareOffsetActive,
    id: 3,
  },
  {
    name: "Earning",
    icon: CurrencyDollar,
    iconActive: CurrencyDollarActive,
    id: 4,
  },
  {
    name: "Statements",
    icon: FileText,
    iconActive: FileTextActive,
    id: 5,
  },
  {
    name: "Notes",
    icon: Note,
    iconActive: NoteActive,
    id: 6,
  },
];
