(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{484:function(t,s,n){"use strict";n.r(s);var a=n(44),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_538-把二叉搜索树转换为累加树"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_538-把二叉搜索树转换为累加树"}},[t._v("#")]),t._v(" [538] 把二叉搜索树转换为累加树")]),t._v(" "),n("blockquote",[n("p",[t._v("给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。")]),t._v(" "),n("p",[t._v("提醒一下，二叉搜索树满足下列约束条件：")]),t._v(" "),n("p",[t._v("节点的左子树仅包含键 小于 节点键的节点。")]),t._v(" "),n("p",[t._v("节点的右子树仅包含键 大于 节点键的节点。")]),t._v(" "),n("p",[t._v("左右子树也必须是二叉搜索树。")]),t._v(" "),n("p",[t._v("示例 1：")]),t._v(" "),n("p",[t._v("输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]")]),t._v(" "),n("p",[t._v("输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]")]),t._v(" "),n("p",[t._v("示例 2：")]),t._v(" "),n("p",[t._v("输入：root = [0,null,1]")]),t._v(" "),n("p",[t._v("输出：[1,null,1]")]),t._v(" "),n("p",[t._v("示例 3：")]),t._v(" "),n("p",[t._v("输入：root = [1,0,2]")]),t._v(" "),n("p",[t._v("输出：[3,3,2]")]),t._v(" "),n("p",[t._v("示例 4：")]),t._v(" "),n("p",[t._v("输入：root = [3,2,4,1]")]),t._v(" "),n("p",[t._v("输出：[7,9,4,10]")]),t._v(" "),n("p",[t._v("提示：")]),t._v(" "),n("p",[t._v("树中的节点数介于 0 和 10^4^ 之间。")]),t._v(" "),n("p",[t._v("每个节点的值介于 -10^4 和 10^4 之间。")]),t._v(" "),n("p",[t._v("树中的所有值 互不相同 。")]),t._v(" "),n("p",[t._v("给定的树为二叉搜索树。")])]),t._v(" "),n("p",[t._v("这道题提出了一个叫做累加树的概念。")]),t._v(" "),n("p",[t._v("我们可以发现，累加树的形成实际上就是将 BST 经过中序遍历后得到的从小到大排列的数据，从后向前开始累加，并在每个节点保留当前累加的值。")]),t._v(" "),n("p",[t._v("这就要求我们反向遍历树节点，并利用变量存储当前累加的值。")]),t._v(" "),n("p",[t._v("那么反向遍历树该怎么做呢？其实很简单，仍然属于中序遍历的一种，只需要将中序遍历先左后右的规矩改变成先右后左即可。接下来问题便迎刃而解了。")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("convertBST")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);