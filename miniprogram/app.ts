// app.ts
import { formatYMD } from './utils/util';

App<IAppOption>({
    globalData: {
        hasRead: 0,
        startTime: 0,
    },
    // 小程序启动之后触发
    onLaunch() {
        // 展示本地存储能力
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                console.log(res.code)
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            },
        })

        // 关于今日已读时间
        const time = wx.getStorageSync('hasRead');
        this.globalData.startTime = new Date();
        const today = formatYMD(new Date());
        const obj: any = {};
        obj[today] = 0;
        if (time) {
            const key = Object.keys(time)[0];
            const value = time[key];
            if (today !== key) {
                wx.setStorageSync('hasRead', obj);
            } else {
                this.globalData.hasRead = value;
            }
        } else {
            wx.setStorageSync('hasRead', obj);
        }
    },

    onHide() {
        // 停止计时
        const endTime = new Date();
        const today = formatYMD(endTime);
        const obj: any = {};
        this.globalData.hasRead += Math.floor((endTime.getTime() - this.globalData.startTime.getTime()) / 1000 / 60);
        obj[today] = this.globalData.hasRead;
        wx.setStorageSync('hasRead', obj);
    },
})