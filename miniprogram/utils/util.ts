export const formatTime = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return (
        [year, month, day].map(formatNumber).join('/') +
        ' ' +
        [hour, minute, second].map(formatNumber).join(':')
    )
}

const formatNumber = (n: number) => {
    const s = n.toString()
    return s[1] ? s : '0' + s
}


export const formatHourAndMinute = (time: number) => {
    return time > 9 ? time : '0' + time;
}

export const formatYMD = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return [year, month, day].map(formatNumber).join('/');
}

export const isEmpty = (value: any): boolean => {
    const type = Object.prototype.toString.call(value);
    switch (type) {
        case '[object Null]':
            return true;
        case '[object Undefined]':
            return true;
        case '[object String]':
            return value.trim().length === 0;
        case '[object Array]':
            return value.length === 0;
        case '[object Object]':
            return Object.keys(value).length === 0;
        default:
            return false;
    }
}