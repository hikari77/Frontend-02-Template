学习笔记

### week10 编程算法训练
+ 讲了LL parser 以及如何构建AST，对语言的编译过程有了一个认识的启蒙，以前完全没想过 静态编译阶段如何解析代码的。通过LL 算法有了初步的认识。
+ 然后就是字符串分析的几个重要算法分类，从简单到难依次是 字典树，KMP， wildcard， 正则， 状态机， LL和LR
+ 字典树 适用于不是很长的海量字符串，比如英文单词，经典场景是搜索栏里的关键字匹配和推荐。
+ KMP 是把局部字符串匹配做到了时间复杂度On的级别，比如字符串分别长度是m和n，kmp的复杂度是O(m + n)，但是暴力解法是通常是双重循环每个位置都检查一下是O(m * n) 级别。但是比起KMP算法 rabin-karp的解法更贴切更倾向于普通人能理解能想出来的办法。而且哈希的思想应用的地方更广，kmp只能解决这一个具体问题，但是哈希思想不是。
+ wildcard 比较难已经超过我目前的极限，听一听大概知道在说什么就好，此题leetcode 难度也是hard级别。
+ 本周学到了新的字符串分析的知识以及深入到分析语法词法领域。