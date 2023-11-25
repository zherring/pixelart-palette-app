"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/colormind";
exports.ids = ["pages/api/colormind"];
exports.modules = {

/***/ "(api)/./pages/api/colormind.js":
/*!********************************!*\
  !*** ./pages/api/colormind.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// pages/api/colormind.js\nasync function handler(req, res) {\n    const url = \"http://colormind.io/api/\";\n    // Make sure you're only accepting POST requests\n    if (req.method === \"POST\") {\n        try {\n            // Forward the request to the Colormind API\n            const colormindResponse = await fetch(url, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(req.body)\n            });\n            // If the request was successful, send back the Colormind response\n            if (colormindResponse.ok) {\n                const data = await colormindResponse.json();\n                res.status(200).json(data);\n            } else {\n                // Handle any errors from Colormind\n                res.status(colormindResponse.status).json({\n                    message: \"Error fetching palette from Colormind\"\n                });\n            }\n        } catch (error) {\n            // Handle any other errors\n            res.status(500).json({\n                message: \"Internal Server Error\"\n            });\n        }\n    } else {\n        // If it's not a POST request, return a 405 Method Not Allowed\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method Not Allowed\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29sb3JtaW5kLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSx5QkFBeUI7QUFDVixlQUFlQSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLEdBQUcsR0FBRywwQkFBMEI7SUFFdEMsZ0RBQWdEO0lBQ2hELElBQUlGLEdBQUcsQ0FBQ0csTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixJQUFJO1lBQ0YsMkNBQTJDO1lBQzNDLE1BQU1DLGlCQUFpQixHQUFHLE1BQU1DLEtBQUssQ0FBQ0gsR0FBRyxFQUFFO2dCQUN6Q0MsTUFBTSxFQUFFLE1BQU07Z0JBQ2RHLE9BQU8sRUFBRTtvQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2lCQUNuQztnQkFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1QsR0FBRyxDQUFDTyxJQUFJLENBQUM7YUFDL0IsQ0FBQztZQUVGLGtFQUFrRTtZQUNsRSxJQUFJSCxpQkFBaUIsQ0FBQ00sRUFBRSxFQUFFO2dCQUN4QixNQUFNQyxJQUFJLEdBQUcsTUFBTVAsaUJBQWlCLENBQUNRLElBQUksRUFBRTtnQkFDM0NYLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRCxJQUFJLENBQUNELElBQUksQ0FBQyxDQUFDO2FBQzVCLE1BQU07Z0JBQ0wsbUNBQW1DO2dCQUNuQ1YsR0FBRyxDQUFDWSxNQUFNLENBQUNULGlCQUFpQixDQUFDUyxNQUFNLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO29CQUFFRSxPQUFPLEVBQUUsdUNBQXVDO2lCQUFFLENBQUMsQ0FBQzthQUNqRztTQUNGLENBQUMsT0FBT0MsS0FBSyxFQUFFO1lBQ2QsMEJBQTBCO1lBQzFCZCxHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO2dCQUFFRSxPQUFPLEVBQUUsdUJBQXVCO2FBQUUsQ0FBQyxDQUFDO1NBQzVEO0tBQ0YsTUFBTTtRQUNMLDhEQUE4RDtRQUM5RGIsR0FBRyxDQUFDZSxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9CZixHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ksR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7S0FDM0M7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbG9yLXBhbGV0dGUtYXBwLy4vcGFnZXMvYXBpL2NvbG9ybWluZC5qcz82NmYyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9jb2xvcm1pbmQuanNcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgdXJsID0gJ2h0dHA6Ly9jb2xvcm1pbmQuaW8vYXBpLyc7XG4gIFxuICAvLyBNYWtlIHN1cmUgeW91J3JlIG9ubHkgYWNjZXB0aW5nIFBPU1QgcmVxdWVzdHNcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIHRyeSB7XG4gICAgICAvLyBGb3J3YXJkIHRoZSByZXF1ZXN0IHRvIHRoZSBDb2xvcm1pbmQgQVBJXG4gICAgICBjb25zdCBjb2xvcm1pbmRSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcS5ib2R5KSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBJZiB0aGUgcmVxdWVzdCB3YXMgc3VjY2Vzc2Z1bCwgc2VuZCBiYWNrIHRoZSBDb2xvcm1pbmQgcmVzcG9uc2VcbiAgICAgIGlmIChjb2xvcm1pbmRSZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgY29sb3JtaW5kUmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSBhbnkgZXJyb3JzIGZyb20gQ29sb3JtaW5kXG4gICAgICAgIHJlcy5zdGF0dXMoY29sb3JtaW5kUmVzcG9uc2Uuc3RhdHVzKS5qc29uKHsgbWVzc2FnZTogJ0Vycm9yIGZldGNoaW5nIHBhbGV0dGUgZnJvbSBDb2xvcm1pbmQnIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBIYW5kbGUgYW55IG90aGVyIGVycm9yc1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgaXQncyBub3QgYSBQT1NUIHJlcXVlc3QsIHJldHVybiBhIDQwNSBNZXRob2QgTm90IEFsbG93ZWRcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsICdQT1NUJyk7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgnTWV0aG9kIE5vdCBBbGxvd2VkJyk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwidXJsIiwibWV0aG9kIiwiY29sb3JtaW5kUmVzcG9uc2UiLCJmZXRjaCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiLCJtZXNzYWdlIiwiZXJyb3IiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/colormind.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/colormind.js"));
module.exports = __webpack_exports__;

})();