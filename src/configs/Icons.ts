import {
    FiEye, FiEyeOff, FiUser, FiLock, FiX, FiMail, FiInfo, FiArrowLeft, FiArrowRight,
    FiChevronDown, FiChevronUp, FiCheckCircle, FiFile, FiUsers, FiTool, FiBell, FiSettings,
    FiMenu, FiChevronLeft, FiChevronRight, FiSearch, FiPlus, FiDownload, FiEdit, FiTrash2,
    FiCalendar, FiEdit3, FiCodesandbox, FiFileText, FiLoader, FiRefreshCw
} from 'react-icons/fi';
import { RiWhatsappFill, RiUserFollowLine, RiRefreshFill, RiBox3Fill } from 'react-icons/ri';
import { GrLanguage, GrClose } from 'react-icons/gr';
import { SlOptionsVertical } from 'react-icons/sl';
import { TbUsersGroup, TbUserCancel, TbFileUpload, TbProgressCheck, TbClockCheck, TbClockX, TbClockHour4 } from 'react-icons/tb';
import { LuUserX, LuUpload } from 'react-icons/lu';
import { MdOutlineBackup } from 'react-icons/md';
import { BsCircleFill, BsFillCheckCircleFill, BsFillMoonFill, BsTruck, BsClipboardData, BsCalendar4 } from 'react-icons/bs';
import { AiFillCloseCircle, AiOutlineCheck, AiOutlineExclamation, AiOutlineCamera, AiOutlineWarning } from 'react-icons/ai';
import { BiCheck, BiRadioCircle, BiSolidNotepad, BiSun, BiWallet } from 'react-icons/bi';
import { IoMdTime, IoMdInformationCircle } from 'react-icons/io';
import { GoChecklist } from 'react-icons/go';
import { PiChartLineUpBold, PiMapPinFill, PiReceiptBold } from 'react-icons/pi';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { CiMoneyBill } from 'react-icons/ci';
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia';
import { ArchiveBook, Bill, Box1, ClipboardText, DocumentText, Home, I3DCubeScan, Money, Setting2, Ticket, TruckFast, Wallet, Bank } from 'iconsax-react';
import { IoPaperPlaneOutline } from 'react-icons/io5';

const Icons = {
    'truck': BsTruck,
    'box-2': RiBox3Fill,
    'note': BiSolidNotepad,
    'wallet-2': BiWallet,
    'receipt': PiReceiptBold,
    'status-up': PiChartLineUpBold,
    'eye': FiEye,
    'eye-off': FiEyeOff,
    'user': FiUser,
    'user-x': LuUserX,
    'user-cancel': TbUserCancel,
    'user-group': TbUsersGroup,
    'user-check': RiUserFollowLine,
    'users': FiUsers,
    'lock': FiLock,
    'x': FiX,
    'codesandbox': FiCodesandbox,
    '3d-cubescan': I3DCubeScan,
    'document-text': DocumentText,
    'clipboard-text': ClipboardText,
    'truck-fast': TruckFast,
    'wallet': Wallet,
    'setting-2': Setting2,
    'box': Box1,
    'mail': FiMail,
    'whatsapp': RiWhatsappFill,
    'info': FiInfo,
    'checked': BiCheck,
    'arrow-left': FiArrowLeft,
    'arrow-right': FiArrowRight,
    'chevron-down': FiChevronDown,
    'chevron-up': FiChevronUp,
    'language': GrLanguage,
    'close': GrClose,
    'circle': BiRadioCircle,
    'circle-fill': BsCircleFill,
    'check-circle': FiCheckCircle,
    'file': FiFile,
    'file-text': FiFileText,
    'tool': FiTool,
    'bell': FiBell,
    'settings': FiSettings,
    'menu': FiMenu,
    'menu-2': HiOutlineMenuAlt2,
    'home': Home,
    'bill': Bill,
    'chevron-left': FiChevronLeft,
    'chevron-right': FiChevronRight,
    'options-vertical': SlOptionsVertical,
    'search': FiSearch,
    'plus': FiPlus,
    'spinner': FiLoader,
    'download': FiDownload,
    'edit': FiEdit,
    'edit3': FiEdit3,
    'delete': FiTrash2,
    'calendar': FiCalendar,
    'calendar-bs': BsCalendar4,
    'uploadFile': TbFileUpload,
    'upload': LuUpload,
    'CloudBackUpIcon': MdOutlineBackup,
    'fill-check': BsFillCheckCircleFill,
    'fill-refresh': RiRefreshFill,
    'fill-close': AiFillCloseCircle,
    'check': AiOutlineCheck,
    'exclamation': AiOutlineExclamation,
    'time': IoMdTime,
    'moon': BsFillMoonFill,
    'sun': BiSun,
    'checklist': GoChecklist,
    'progress-check': TbProgressCheck,
    'clock-check': TbClockCheck,
    'clock-x': TbClockX,
    'clock': TbClockHour4,
    'camera': AiOutlineCamera,
    'location': PiMapPinFill,
    'money-bill': CiMoneyBill,
    'ticket': Ticket,
    'invoice': LiaFileInvoiceDollarSolid,
    'clipboard': BsClipboardData,
    'archive-book': ArchiveBook,
    'warning': AiOutlineWarning,
    'money': Money,
    'refresh': FiRefreshCw,
    'information': IoMdInformationCircle,
    'plane': IoPaperPlaneOutline,
    bank: Bank
};

export type IconType = keyof typeof Icons;
export default Icons;
