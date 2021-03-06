const sortFn = (a, b) => {
  // ex: 'blog/array/169.majorityElement'
  const numberA = Number(a.split('/')[2].split('-')[0]);
  const numberB = Number(b.split('/')[2].split('-')[0]);
  return numberA - numberB;
};

const getConfig = require('vuepress-bar');
const barConfig = getConfig(`${__dirname}/..`);

function changeTitleInBar(sidebar, titleMap) {
  if (!Array.isArray(sidebar)) return sidebar;
  return sidebar.map(bar => {
    if (bar.title && titleMap[bar.title]) {
      bar.title = titleMap[bar.title];
    }
    if (Array.isArray(bar.children)) {
      if (bar.children[0] && typeof bar.children[0] === 'string') {
        bar.children.sort(sortFn);
      } else {
        changeTitleInBar(bar.children, titleMap);
      }
    }
    return bar;
  });
}

const titleMap = {
  List: '📖 题库列表',
  leetcode: '力扣',
  '0introduce': '介绍',
  Home: '首页',
  Array: '数组',
  Backtracking: '回溯法',
  'Binary Search': '二分查找',
  'Bit Manipulation': '位运算',
  'Breadth First-Search': '广度优先搜索',
  'Depth First-Search': '深度优先搜索',
  'Divide and-Conquer': '分治法',
  'Dynamic Programming': '动态规划',
  Greedy: '贪心法',
  'Hash Table': '哈希表',
  Heap: '堆',
  'Linked List': '链表',
  Math: '数学',
  'Sliding Window': '滑动窗口',
  Sort: '排序',
  Stack: '栈',
  String: '字符串',
  Tree: '树',
  'Two Pointers': '双指针',
  Unknown: '未分类'
};

let customSidebar = {};
if (Array.isArray(barConfig.sidebar)) {
  customSidebar = changeTitleInBar(barConfig.sidebar, titleMap);
} else {
  // 若存在nav，sidebar返回Object
  Object.entries(barConfig.sidebar).forEach(([key, value]) => {
    customSidebar[key] = changeTitleInBar(value, titleMap);
  });
}

module.exports = {
  title: "Runope Record",
  description: "Record some of my study documents",
  markdown: {
    lineNumbers: true,
  },
  base: '/algorithm/',
  themeConfig: {
    sidebarDepth: 3,
    lastUpdated: "Last Upadted",
  },
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: "Algorithm", link: "/leetcode/"}, // 内部链接 以docs为根目录
      { text: "Blog", link: "https://blog.runope.top/" }, // 外部链接
      // 下拉列表
      {
        text: "Github",
        items: [
          { text: "GitHub Home", link: "https://github.com/runope/" },
          { text: "Algorithm Repository", link: "https://github.com/runope/algorithm/"},
        ],
      },
    ],
    sidebar: customSidebar,
  },
};
