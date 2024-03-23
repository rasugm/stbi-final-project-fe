import { QueryObserverResult, UseMutationResult } from '@tanstack/react-query';
import dayjs from 'dayjs';
export const modalInitial = {
    isOpen: true,
    setIsOpen: jest.fn(),
};

export const mockedListBank = [
    {
        label: 'Bank BRI',
        value: '002',
        optional: {
            name: 'Bank BRI',
            value: '002',
            id: '1',
        },
    },
    {
        label: 'Bank MANDIRI',
        value: '008',
        optional: {
            nama: 'Bank MANDIRI',
            kode: '008',
            id: '3',
        },
    },
    {
        optional: {
            nama: 'Bank BNI',
            kode: '009',
            id: '4',
        },
        label: 'Bank BNI',
        value: '009',
    },
];

export const MockLoginBody = {
    deviceId: '',
    grant_type: '',
    location: '',
    otp: '',
    otpType: undefined,
    password: '',
    username: '',
};
export const MockOtpResponse = {
    backToLogin: '',
    error: '',
    error_description: '',
    otpDestination: '082121894856',
    otpExp: dayjs().add(2, 'year').format('YYYY-MM-DD HH:mm:ss'),
    otpInvalid: '',
    otpSent: '',
    otpType: 'PHONE',
    userId: '',
};
// @ts-ignore
export const mutationProps: UseMutationResult<any, any, any> = {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    isError: false,
    isIdle: true,
    isLoading: false,
    isPaused: false,
    isSuccess: false,
    mutate: jest.fn(),
    mutateAsync: jest.fn(() => Promise.resolve()),
    reset: jest.fn(),
    status: 'idle',
    variables: undefined,
};

export const queryProps: QueryObserverResult<any, any> = {
    data: undefined,
    dataUpdatedAt: 0,
    error: null,
    errorUpdatedAt: 0,
    failureCount: 0,
    isError: false,
    isFetched: false,
    isFetchedAfterMount: false,
    isFetching: false,
    isIdle: true,
    isLoading: false,
    isLoadingError: false,
    isPlaceholderData: false,
    isPreviousData: false,
    isRefetchError: false,
    isStale: false,
    isSuccess: false,
    refetch: jest.fn(),
    remove: jest.fn(),
    // @ts-ignore
    status: 'idle',
};
