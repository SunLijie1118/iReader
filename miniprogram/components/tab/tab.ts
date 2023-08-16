// components/tab/tab.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabs: {
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        value: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        tabClick(event: WechatMiniprogram.BaseEvent<{ tab: { value: string, title: string } }>) {
            const tab = event.currentTarget.dataset.tab;
            this.setData({
                value: tab.value
            });
            this.triggerEvent('tabClick', tab);
        }
    },
    attached() {
        if (this.data.tabs.length > 0 && this.data.value === '') {
            this.setData({
                value: this.data.tabs[0].value
            });
            this.triggerEvent('tabClick', this.data.tabs[0]);
        }
    }
})
