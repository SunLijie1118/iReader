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


// mock的假数据
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

export const SEARCH_BOOKS = [
    {
        'book_id': 1,
        'cover': '../../image/book/angular/1.png',
        'book_name': 'Angular JS实战',
        'description': '《Angular JS实战》是一本实战性的AngularJS入门教程，系统讲解了AngularIS的各项功能特点和基本使用，配有大量小案例和2个大案例。全书一共11章：第1章对AngularJS做了简要介绍，第2～9章详细讲解了AngularJS的表达式与模板、数据绑定与作用域、依赖注入、MVC模式、服务、与服务端交互、指令、$location等主要内容；第10章讲解了开发中的注意事项和很佳实践；第11章是两个综合性的案例。'
    },
    {
        'book_id': 2,
        'cover': '../../image/book/angular/2.png',
        'book_name': 'Angular权威教程',
        'description': '本书堪称Angular领域的里程碑式著作，涵盖了关于Angular的几乎所有内容。对于没有经验的人，本书平实、通俗的讲解，递进、严密的组织，可以让人毫无压力地登堂入室，迅速领悟新一代Web应用开发的精髓。如果你有相关经验，那本书对Angular概念和技术细节的全面剖析，以及引人入胜、切中肯綮的讲解，将帮助你彻底掌握这个框架，在自己职业技术修炼之路上更进一步。'
    },
    {
        'book_id': 3,
        'cover': '../../image/book/angular/3.png',
        'book_name': 'Angular从零到一',
        'description': '本书分为9章，第1～7章中我们从无到有地搭建了一个待办事项应用，但是我们增加了一些需求：多用户和HTTP后台。这样待办事项这个应用就变得麻雀虽小五脏俱全。通过这样一个应用的开发，我们熟悉了大部分重要的Angular 2概念和实践操作。建议读者按顺序阅读和实践。阅读完第7章，基本可以在正式的开发工作中上手了。第8章介绍了响应式编程的概念和Rx在Angular中的应用，可以说，如果不使用Rx，Angular 2的威力就折半了，很多原来需要复杂逻辑处理的地方用Rx解决起来非常方便。由于Rx本身的学习曲线较陡，我们花了很大篇幅做细致的讲解。第9章是在第8章基础之上，引入了在React中非常流行的Redux状态管理机制，这种机制的引入可以让代码和逻辑隔离得更好，在团队工作中强烈建议采用这种方案。第8章和第9章由于学习门槛较高，有的读者可能暂时接受起来有困难，遇到这种情况可以先放下，等到使用Angular一段时间后再回头来看。'
    },
    {
        'book_id': 4,
        'cover': '../../image/book/angular/4.png',
        'book_name': 'Angular开发入门与实战',
        'description': '1.读者无需有前端开发基础 本书假设用户之前不了解Angular框架，或者假设用户一直是从事Java开发的，从来没有接触过前端框架。本书就是专门为这样的读者准备的，它从一开始外围知识着手，每一章节，每一个案例以及每一段代码都经过精心的设计和挑选，方便用户能快速的掌握 Angular 的实践技能。 2.知识点全面 本书所有的案例基于Angular开发，也是目前Angular的最新版本。无论书中的讲解和示例代码的安排，都是基于依赖服务的最高版本进行，大量的应用案例甚至填补了官方文档的空白。 3.章节安排合理 本书一开始是基于培训 Reskill 的人士设计，结合笔者多年的学习新技术的经验，采用由浅入深、层层递进的结构，同时，本书的原稿经过身边同事的多次迭代反馈，里面的讲解及示例始终站在初学者的立场阐述，读者在学完本书后，可以直接进入Angular项目组担任开发角色。 4.示例设计专注解惑 本书主要是围绕实践展开，每个示例都是经过身边一线同事反馈迭代形成的，为了减少读者的学习时间，书中的每个示例都是独立的，读者可以专注某一个示例来学习。当读者在工作或学习中遇到了问题，可以直接到书中找到对应的解决方案。  ·内容全面：覆盖基础、架构、模块以及实战示例。 ·循序渐进：由点及面、由浅入深，逐步击破技术难点。 ·注重实操：通过丰富的实例，深刻理解每个知识点。'
    },
    {
        'book_id': 5,
        'cover': '../../image/book/angular/5.png',
        'book_name': 'Angular应用程序开发指南',
        'description': '《Angular应用程序开发指南》主要介绍如何用Web前端框架Angular开发应用程序。书中先介绍Angular的发展历程和基础概念，帮助读者了解Angular框架并打好坚实的基础；然后以“天天菜园”蔬菜订购应用程序为例，将理论讲解落实到代码实现上，带领读者真正体验用Angular开发应用程序的全过程；最后介绍用于实现自动化开发工作流程的命令行接口Angular CLI，帮助读者用所学知识构建新的应用程序。本书既涵盖Angular的基础内容，又通过真实的项目实例展现了应用程序的开发过程，非常适合对Angular框架感兴趣的前端开发人员作为自学教程。'
    }
];