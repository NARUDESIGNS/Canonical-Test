/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("// Get elements\nconst container = document.getElementById('container');\nconst loading = document.getElementById('loading');\n\n// Fetch API data;\nasync function getData(){\n    let postsData = [];\n    try {\n        const res = await fetch('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json');\n        const data = await res.json();\n        loading.classList.add('hide');\n        data.forEach(element => {\n            postsData.push({          \n                src:  element['featured_media'],\n                title:  element.title.rendered,\n                article: element.link,\n                author:  element['_embedded']['author'][0],\n                date:  new Date(element.date),\n                type:  element.type\n            })\n        });\n        console.log(postsData);\n        renderUI(postsData);\n    } catch(err) {\n        throw new Error(err);\n    }\n}\n\n// Render UI\nfunction renderUI(details){\n    details.forEach(data => {\n        const year = data.date.toLocaleDateString().split('/')[2];\n        const fullDate = data.date.toDateString();\n        container.innerHTML += `\n            <div class=\"col-4\">\n                <div class=\"p-card u-no-padding\">\n                    <div class=\"p-card__inner\"> CLOUD AND SERVER </div>\n                        <img class=\"p-card__image\" src=${data.src}>\n                        <div class=\"p-card__inner\">\n                            <a href=\"${data.article}\"><h3>${data.title}</h3></a>\n                        </div>\n                        <div class=\"p-card__inner\">\n                            By <a href=\"${data.author.link}\">${data.author.name}</a> on ${fullDate}\n                        </div>\n                        <hr class=\"u-no-margin--bottom\">\n                        <div class=\"p-card__inner\">Article</div>\n                    </div>\n                </div>\n            </div>\n        `;\n    })\n}\n\n// Load DOM\ngetData();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;