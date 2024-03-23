import { STATUS_MESSAGE } from '@/constants';
type TitleKeys = keyof typeof STATUS_MESSAGE;
type SubtitleKeys = keyof (typeof STATUS_MESSAGE)[keyof typeof STATUS_MESSAGE];
type TTitle = string & { a?: any };

export type TGetStatusMsg = TTitle | `${TitleKeys}/${SubtitleKeys}`;

export const getStatusMsg = (title: TGetStatusMsg) => {
    const resTitle = title.split('/');
    if (resTitle?.length === 2) {
        const statusTitle = resTitle[0] as TitleKeys;
        const descTitle = resTitle[1] as SubtitleKeys;
        return STATUS_MESSAGE[statusTitle][descTitle];
    }
    return title;
};
