export const APP_NAME = 'iReader 爱读书';

export const SETTINGS = [
    {
        'id': 1,
        'type': 'search',
        'title': '搜索',
    },
    {
        'id': 2,
        'type': 'history',
        'title': '阅读历史',
    },
    {
        'id': 3,
        'type': 'more',
        'title': '更多',
    }
];

export const RECOMMEND_BOOKS = [
    {
        'book_id': 9,
        'cover': '../../image/book/vue3/cover.png',
        'book_name': 'vue.js 3.0教程'
    },
    {
        'book_id': 5,
        'cover': '../../image/book/es6/cover.png',
        'book_name': '阮一峰 ECMAScript 6 (ES6) 标准入门教程 第三版'
    },
    {
        'book_id': 14,
        'cover': '../../image/book/wx/cover.png',
        'book_name': '微信小程序入门教程'
    },
    {
        'book_id': 1,
        'cover': '../../image/book/html/cover.png',
        'book_name': '阮一峰 HTML 语言教程'
    },
    {
        'book_id': 6,
        'cover': '../../image/book/js/cover.png',
        'book_name': '阮一峰 JavaScript 教程'
    }
];

export const CATEGORY_BOOKS = [
    {
        id: 1,
        title: 'HTML',
        books: [
            {
                'book_id': 1,
                'cover': '../../image/book/html/cover.png',
                'book_name': '阮一峰 HTML 语言教程',
                'description': '《阮一峰 HTML 语言教程》是由知名技术博主阮一峰编写的一本关于HTML（超文本标记语言）的教程。该教程旨在向读者介绍HTML的基础知识、语法规则以及实际应用技巧。适合初学者快速入门HTML，并掌握HTML在网页开发中的应用。'
            }
        ]
    },
    {
        id: 2,
        title: 'CSS3',
        books: [
            {
                'book_id': 2,
                'cover': '../../image/book/css/cover.png',
                'book_name': 'CSS权威指南',
                'description': '《CSS权威指南》是由Eric A. Meyer和Estelle Weyl合著的一本关于CSS（层叠样式表）的权威参考书籍。该书旨在向读者提供全面而深入的CSS知识，包括语法、选择器、布局、样式化文本和表格、动画、响应式设计等方面的内容。它被广泛认可为CSS领域的权威指南，适合所有水平的开发者。'
            },
            {
                'book_id': 3,
                'cover': '../../image/book/css/cover.png',
                'book_name': 'CSS创作指南',
                'description': 'CSS创作指南是一种用于指导和规范CSS代码编写的风格指南和最佳实践集合。它旨在帮助开发者团队更好地组织和管理CSS代码，提高代码的可读性、维护性和可扩展性。CSS创作指南通常是根据具体项目或团队的需求和技术偏好来制定的。'
            },
            {
                'book_id': 4,
                'cover': '../../image/book/css/tailwindcss.png',
                'book_name': 'Tailwind CSS 官方文档',
                'description': 'Tailwind CSS官方文档是Tailwind CSS团队提供的权威文档，旨在帮助开发人员全面了解和有效使用Tailwind CSS框架。它提供了详细的说明、示例代码和指南，旨在帮助开发人员使用Tailwind CSS快速构建现代化的、响应式的Web界面。'
            },
        ]
    },
    {
        id: 3,
        title: 'JS',
        books: [
            {
                'book_id': 5,
                'cover': '../../image/book/es6/cover.png',
                'book_name': '阮一峰 ECMAScript 6 (ES6) 标准入门教程 第三版',
                'description': '《阮一峰 ECMAScript 6 (ES6) 标准入门教程 第三版》是一本由知名技术博主阮一峰编写的关于 ECMAScript 6（ES6）标准的入门教程。该教程详细介绍了ES6标准的新特性、语法和用法，为开发者提供了全面而易懂的学习资料。'
            },
            {
                'book_id': 6,
                'cover': '../../image/book/js/cover.png',
                'book_name': '阮一峰 JavaScript 教程',
                'description': '《阮一峰 JavaScript 教程》是一本由知名技术博主阮一峰编写的关于JavaScript编程语言的入门教程。该教程提供了全面而易懂的学习资料，帮助读者从基础到进阶，掌握JavaScript的各种概念、语法和实践技巧。'
            },
        ]
    },
    {
        id: 4,
        title: 'Angular',
        books: [
            {
                'book_id': 7,
                'cover': '../../image/book/angular/cover.png',
                'book_name': 'Angular官方文档',
                'description': 'Angular官方文档是Angular框架的官方指南和参考手册，它提供了全面而详细的文档和示例，旨在帮助开发者了解和使用Angular框架进行Web应用程序的开发。'
            },
            {
                'book_id': 8,
                'cover': '../../image/book/angular/antd.png',
                'book_name': 'NG-ZORRO-ANTD组件库',
                'description': 'NG-ZORRO-ANTD 是一个基于 Angular 框架的企业级 UI 组件库，它提供了丰富、美观、易用的组件和样式库，可帮助开发者快速构建出专业水平的前端界面。'
            },
        ]
    },
    {
        id: 5,
        title: 'Vue.js',
        books: [
            {
                'book_id': 9,
                'cover': '../../image/book/vue3/cover.png',
                'book_name': 'vue.js 3.0教程',
                'description': '《Vue.js 3.0 教程》是一本由知名技术博主阮一峰编写的教程，旨在向开发者介绍Vue.js 3.0的核心概念、语法和实践技巧。该教程通过简明扼要的方式，帮助读者快速掌握Vue.js的最新版本，了解Vue.js在现代Web开发中的应用。'
            },
            {
                'book_id': 10,
                'cover': '../../image/book/vue3/cover.png',
                'book_name': 'vue.js设计与实现',
                'description': '这本书是一本关于Vue.js框架设计和实现的深入研究，旨在向读者介绍Vue.js内部的工作原理和设计哲学。通过详细的解释和示例代码，帮助读者理解Vue.js是如何构建出一套高效、灵活且易于使用的前端框架的。'
            },
            {
                'book_id': 11,
                'cover': '../../image/book/vue3/cover.png',
                'book_name': 'vue.js官方文档',
                'description': 'Vue.js官方文档是学习和使用Vue.js框架的首要参考资料。官方文档提供了关于Vue.js的详尽而准确的信息，包括框架的核心功能、API参考、开发指南、实例和示例代码等。它是Vue.js的官方来源，由Vue.js核心团队维护和更新，确保最新的信息和最佳实践。'
            },
        ]
    },
    {
        id: 6,
        title: 'Echarts',
        books: [
            {
                'book_id': 12,
                'cover': '../../image/book/echarts/cover.png',
                'book_name': 'Echarts官方文档',
                'description': 'Echarts官方文档是Echarts图表库的官方指南和参考手册，它提供了全面而详细的文档、示例和API参考，旨在帮助开发者了解和使用Echarts来创建各种类型的可视化图表。'
            },
        ]
    },
    {
        id: 7,
        title: '小程序',
        books: [
            {
                'book_id': 13,
                'cover': '../../image/book/wx/cover.png',
                'book_name': '微信小程序官方开发文档',
                'description': '微信小程序官方开发文档是开发者在使用微信小程序进行开发时的主要参考资源。它提供了详细的文档和指南，以帮助开发者理解和学习各种小程序开发相关的知识和技能。'
            },
            {
                'book_id': 14,
                'cover': '../../image/book/wx/cover.png',
                'book_name': '微信小程序入门教程',
                'description': '微信小程序入门教程是专为初学者设计的教程，旨在帮助开发者快速入门微信小程序的开发并掌握基本的开发知识和技能。'
            },
            {
                'book_id': 15,
                'cover': '../../image/book/wx/cover.png',
                'book_name': 'Vant Weapp小程序 UI组件库',
                'description': 'Vant Weapp 是一款基于微信小程序的 UI 组件库，它提供了丰富而强大的组件和样式库，能够帮助开发者快速搭建美观、交互丰富的小程序界面。'
            },
        ]
    },
];

export const HOT_TAGS = [{
    id: 1,
    value: 'vue'
}, {
    id: 2,
    value: 'react'
}, {
    id: 3,
    value: 'angular'
}, {
    id: 4,
    value: 'webpack'
}, {
    id: 5,
    value: 'vite'
}];