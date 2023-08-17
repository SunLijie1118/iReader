// indexPack/pages/search.ts
import { HOT_TAGS, SEARCH_BOOKS } from '../../../utils/config';
import { isEmpty } from '../../../utils/util';

interface searchPageData {
    value: string;
    historyTags: string[];
    hotTags: { id: number, value: string }[];
    books: any[];
    booksDivider: boolean;
    documents: any[],
    documentsDivider: boolean;
    tabs: Array<{ title: string; value: string }>,
    type: '' | 'doc' | 'book'
}

interface searchPageOptions {
    onLoad: () => void;
    onReachBottom: () => void;
    search: (value: string) => Promise<{ text: string, value: number }[]>;
    bindselectresult: (event: any) => void;
    bindclear: (event: any) => void;
    hanleHistory: (value: string) => void;
    tapHotTags: (event: WechatMiniprogram.BaseEvent<{ tag: string }>) => void;
    tabClick: (event: any) => void;
}

Page<searchPageData, searchPageOptions>({

    /**
     * 页面的初始数据
     */
    data: {
        value: '',
        historyTags: [],
        hotTags: [],
        books: [],
        booksDivider: false,
        documents: [],
        documentsDivider: false,
        tabs: [{
            title: "书籍",
            value: "book"
        },
        {
            title: "文档",
            value: "doc"
        }],
        type: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        this.setData({
            search: this.search.bind(this)
        });
        this.setData({
            hotTags: HOT_TAGS
        });
    },
    onReachBottom() {
        if (this.data.type === 'book') {
            if (this.data.booksDivider) {
                return;
            }
            wx.showLoading({
                title: '正在加载...',
            });
            setTimeout(() => {
                // 数据刷新完成后，隐藏加载提示
                wx.hideLoading();
                if (this.data.books.length < 20) {
                    this.setData({
                        books: this.data.books.concat([...SEARCH_BOOKS]),
                        booksDivider: false
                    });
                } else {
                    this.setData({
                        booksDivider: true
                    });
                }
            }, 500);
        } else if (this.data.type === 'doc') {

        }
    },

    search(value: string) {
        return new Promise((resolve, _reject) => {
            let result = [];
            this.setData({
                value: value
            });
            if (!isEmpty(value)) {
                result.push({ text: value, value: 1 });
            }
            resolve(result);
        })
    },

    bindselectresult(event: any) {
        this.hanleHistory(event.detail.item.text);
    },

    bindclear() {
        this.setData({
            value: ''
        });
    },

    hanleHistory(value: string) {
        if (this.data.historyTags.length > 9) {
            this.data.historyTags.shift();
        }
        if (this.data.historyTags.includes(value)) {
            this.data.historyTags.splice(this.data.historyTags.indexOf(value), 1);
        }
        this.data.historyTags.push(value);
        this.setData({
            historyTags: this.data.historyTags.reverse()
        });
    },

    // 点击了热门标签
    tapHotTags(event: WechatMiniprogram.BaseEvent<{ tag: string }>) {
        const tag = event.currentTarget.dataset.tag;
        this.search(tag);
        this.hanleHistory(tag);
    },

    // tab点击
    tabClick(event: any) {
        const type: 'book' | 'doc' = event.detail.value;
        this.setData({
            booksDivider: false,
            documentsDivider: false
        });
        this.setData({
            type: type
        });
        if (type === 'book') {
            this.setData({
                books: [...SEARCH_BOOKS]
            });
        } else if (type === 'doc') {

        }
    }

})