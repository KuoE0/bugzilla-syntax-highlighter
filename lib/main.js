/*
 * main.js
 * Copyright (C) 2015 KuoE0 <kuoe0.tw@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */


var pageMod = require("sdk/page-mod");

pageMod.PageMod({
	include: /.+\.bugzilla\.mozilla\.org\/attachment\.cgi\?id=\d+/,
	contentScriptWhen: 'ready',
	contentScriptFile: ["./highlight/highlight.js", "./highlight-patch.js"],
	contentStyleFile: "./highlight/styles/github-gist.css"
});


