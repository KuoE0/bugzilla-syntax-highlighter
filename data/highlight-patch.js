/*
 * highlight-patch.js
 * Copyright (C) 2015 KuoE0 <kuoe0.tw@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

'use strict';

var pre_elem = document.getElementsByTagName('pre');
for (var i = 0; i < pre_elem.length; ++i) {
	hljs.highlightBlock(pre_elem[i]);
}

