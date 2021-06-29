(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{454:function(s,t,n){"use strict";n.r(t);var a=n(44),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_172-阶乘后的零"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_172-阶乘后的零"}},[s._v("#")]),s._v(" [172] 阶乘后的零")]),s._v(" "),n("blockquote",[n("p",[s._v("给定一个整数 n，返回 n! 结果尾数中零的数量。")]),s._v(" "),n("p",[s._v("示例 1:")]),s._v(" "),n("p",[s._v("输入: 3")]),s._v(" "),n("p",[s._v("输出: 0")]),s._v(" "),n("p",[s._v("解释: 3! = 6, 尾数中没有零。")]),s._v(" "),n("p",[s._v("示例 2:")]),s._v(" "),n("p",[s._v("输入: 5")]),s._v(" "),n("p",[s._v("输出: 1")]),s._v(" "),n("p",[s._v("解释: 5! = 120, 尾数中有 1 个零.")]),s._v(" "),n("p",[s._v("说明: 你算法的时间复杂度应为 O(log n) 。")])]),s._v(" "),n("p",[s._v("由于题目要求在O(lgn)的时间下解决，因此无法用O(n)的暴力求解完成。")]),s._v(" "),n("p",[s._v("分析后得出，个位数只有2*5能够得出末尾0，有多少对2和5就有多少个0，而任何数因数分解5的个数永远小于2的个数，")]),s._v(" "),n("p",[s._v("因此题目转化为：求解目标数字因数分解后共含有多少个5。")]),s._v(" "),n("p",[s._v("f(n) = n/5 + n/5^2 + n/5^3 + n/5^4 + n/5^5 + ... + 余数")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("trailingZeroes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("n")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("floor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);