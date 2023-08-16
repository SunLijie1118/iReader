import { APP_NAME, SETTINGS, RECOMMEND_BOOKS, CATEGORY_BOOKS } from '../../utils/config';
import { formatHourAndMinute, formatYMD } from '../../utils/util';

// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
    data: {
        appName: APP_NAME,
        settings: SETTINGS,
        // 更多的配置项
        // 是否显示背景蒙层，默认为true
        mask: true,
        // 是否显示取消按钮，默认为true
        showCancel: false,
        // 是否显示ActionSheet
        show: false,
        groups: [
            { text: '管理书架', value: 1 },
            { text: '下载管理', value: 2 },
            { text: 'WiFi传书', value: 3 }
        ],
        hours: 0,
        minutes: 0,
        recommendBooks: RECOMMEND_BOOKS,
        categoryBooks: CATEGORY_BOOKS,
        timer: null
    },
    // 渲染完界面之后的回调
    onLoad() {
        this.handleReadTimeShow();
    },
    onShow() {
        // 处理显示时间
        this.handleReadTimeShow();
    },
    onHide() {
        if (this.data.timer) {
            clearInterval(this.data.timer);
        }
    },
    onUnload() {
        if (this.data.timer) {
            clearInterval(this.data.timer);
        }
    },

    handleSetting(event: WechatMiniprogram.BaseEvent<{ type: string }>) {
        const type = event.currentTarget.dataset.type;
        switch (type) {
            case 'search': {
                wx.navigateTo({
                    url: '/indexPack/pages/search/search'
                });
                break;
            }
            case 'history': {
                wx.navigateTo({
                    url: '/indexPack/pages/history/history'
                });
                break;
            }
            case 'more': {
                this.setData({
                    show: true
                })
            }
        }
    },

    handleReadTimeShow() {
        let hasRead: number = app.globalData?.hasRead || 0;
        let hours = Math.floor(hasRead / 60);
        let minutes = hasRead - hours * 60;
        this.setData({
            hours: formatHourAndMinute(hours),
            minutes: formatHourAndMinute(minutes),
        });
        if (!this.data.timer) {
            this.setData({
                timer: setInterval(() => {
                    hasRead += 1;
                    hours = Math.floor(hasRead / 60);
                    minutes = hasRead - hours * 60;
                    this.setData({
                        hours: formatHourAndMinute(hours),
                        minutes: formatHourAndMinute(minutes),
                    });
                    app.globalData!.hasRead = hasRead;
                    const endTime = new Date();
                    const today = formatYMD(endTime);
                    const obj: any = {};
                    obj[today] = hasRead;
                    wx.setStorageSync('hasRead', obj);
                }, 1000 * 60)
            })
        }
    }
})
