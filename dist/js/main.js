/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ (() => {

eval("function drawSuisse() {\n  var suisse = document.getElementById('Swiss-flag');\n  var ctx = suisse.getContext('2d');\n  var rectangle = {\n    width: 100,\n    height: 300\n  };\n  ctx.fillStyle = \"red\";\n  ctx.fillRect(0, 0, suisse.width, suisse.height);\n  ctx.fillStyle = \"white\";\n  ctx.fillRect(suisse.width / 2 - rectangle.width / 2, suisse.height / 2 - rectangle.height / 2, rectangle.width, rectangle.height);\n  ctx.fillRect(suisse.width / 2 - rectangle.height / 2, suisse.height / 2 - rectangle.width / 2, rectangle.height, rectangle.width);\n}\n\ndrawSuisse();\n\nfunction drawHome() {\n  var home = document.getElementById('home');\n  var ctx = home.getContext('2d');\n  ctx.moveTo(40, 80);\n  ctx.lineTo(80, 40);\n  ctx.lineTo(120, 80);\n  ctx.moveTo(60, 80);\n  ctx.lineTo(60, 120);\n  ctx.lineTo(100, 120);\n  ctx.lineTo(100, 80);\n  ctx.stroke();\n  ctx.fillStyle = \"yellow\";\n  ctx.strokeStyle = \"orange\";\n  ctx.beginPath();\n  ctx.arc(150, 40, 30, 0, Math.PI * 2, true);\n  ctx.fill();\n  ctx.stroke();\n  ctx.beginPath();\n  ctx.strokeStyle = \"LimeGreen\";\n  ctx.moveTo(20, 120);\n  ctx.arcTo(20, 30, 160, 120, 20);\n  ctx.stroke();\n  ctx.rect(75, 100, 10, 20);\n  ctx.stroke();\n  ctx.strokeStyle = \"turquoise\";\n  ctx.beginPath();\n  ctx.moveTo(20, 150);\n  ctx.bezierCurveTo(80, 130, 80, 180, 140, 150);\n  ctx.moveTo(20, 170);\n  ctx.bezierCurveTo(80, 150, 80, 200, 140, 170);\n  ctx.stroke();\n  ctx.beginPath();\n  ctx.strokeStyle = \"orange\";\n  ctx.moveTo(130, 40);\n  ctx.quadraticCurveTo(150, 70, 170, 40);\n  ctx.stroke();\n}\n\ndrawHome();\n\nfunction drawMastercard() {\n  var rectangle = {\n    width: 600,\n    height: 360\n  };\n  var cercle = {\n    x1: 200,\n    x2: 40,\n    y1: 35,\n    y2: 0,\n    radius: Math.PI * 2\n  };\n  var mastercard = document.getElementById('master-card');\n  var ctx = mastercard.getContext('2d');\n  ctx.fillStyle = \"black\";\n  ctx.fillRect(0, 0, rectangle.width, rectangle.height);\n  ctx.fillStyle = \"red\";\n  ctx.arc(cercle.x1, cercle.x2 * 3, cercle.y1 * 3, cercle.y2, cercle.radius);\n  ctx.fill();\n  ctx.beginPath();\n  ctx.fillStyle = \"orange\";\n  ctx.arc(cercle.x1 * 2, cercle.x2 * 3, cercle.y1 * 3, cercle.y2, cercle.radius);\n  ctx.fill();\n  ctx.font = '30pt Helvetica';\n  ctx.textAlign = \"center\";\n  ctx.textBaseline = \"bottom\";\n  ctx.fillStyle = \"white\";\n  ctx.fillText(\"Mastercard\", rectangle.width / 2, rectangle.height - 30);\n}\n\ndrawMastercard();\n\nfunction drawTriangle() {\n  var triangle = document.getElementById('triangle');\n  var ctx = triangle.getContext('2d');\n  ctx.beginPath();\n  ctx.fillStyle = \"black\";\n  ctx.moveTo(150, 300);\n  ctx.lineTo(300, 100);\n  ctx.lineTo(450, 300);\n  ctx.fill();\n  ctx.beginPath();\n  ctx.fillStyle = \"white\";\n  ctx.arc(300, 230, 80, 0, Math.PI * 2, true);\n  ctx.fill();\n  ctx.beginPath();\n  ctx.fillStyle = \"black\";\n  ctx.arc(310, 230, 65, 0, Math.PI * 2, true);\n  ctx.fill();\n}\n\ndrawTriangle();\n\nfunction drawSymbols() {\n  var rectangle = {\n    width: 600,\n    height: 360\n  };\n  var shapes = document.getElementById('shapes');\n  var ctx = shapes.getContext('2d');\n  ctx.fillStyle = \"darkblue\";\n  ctx.fillRect(0, 0, rectangle.width, rectangle.height);\n  ctx.beginPath();\n  ctx.fillStyle = \"orange\";\n  ctx.moveTo(50, 300);\n  ctx.lineTo(70, 250);\n  ctx.lineTo(90, 300);\n  ctx.fill();\n  ctx.beginPath();\n  ctx.fillStyle = \"turquoise\";\n  ctx.arc(150, 280, 20, 0, Math.PI * 2, true);\n  ctx.fill();\n  ctx.beginPath();\n  ctx.strokeStyle = \"orange\";\n  ctx.strokeRect(200, 250, 50, 50);\n}\n\ndrawSymbols();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiQUFDQSxTQUFTQSxVQUFULEdBQW1CO0FBS2YsTUFBSUMsTUFBTSxHQUFzQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWhDO0FBQ0EsTUFBSUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtBQUdBLE1BQU1DLFNBQVMsR0FBa0I7QUFDN0JDLFNBQUssRUFBRSxHQURzQjtBQUU3QkMsVUFBTSxFQUFFO0FBRnFCLEdBQWpDO0FBS0FKLEtBQUcsQ0FBQ0ssU0FBSixHQUFnQixLQUFoQjtBQUNBTCxLQUFHLENBQUNNLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CVCxNQUFNLENBQUNNLEtBQTFCLEVBQWlDTixNQUFNLENBQUNPLE1BQXhDO0FBRUFKLEtBQUcsQ0FBQ0ssU0FBSixHQUFnQixPQUFoQjtBQUNBTCxLQUFHLENBQUNNLFFBQUosQ0FBYVQsTUFBTSxDQUFDTSxLQUFQLEdBQWUsQ0FBZixHQUFtQkQsU0FBUyxDQUFDQyxLQUFWLEdBQWtCLENBQWxELEVBQXFETixNQUFNLENBQUNPLE1BQVAsR0FBZ0IsQ0FBaEIsR0FBb0JGLFNBQVMsQ0FBQ0UsTUFBVixHQUFtQixDQUE1RixFQUErRkYsU0FBUyxDQUFDQyxLQUF6RyxFQUFnSEQsU0FBUyxDQUFDRSxNQUExSDtBQUVBSixLQUFHLENBQUNNLFFBQUosQ0FBYVQsTUFBTSxDQUFDTSxLQUFQLEdBQWUsQ0FBZixHQUFtQkQsU0FBUyxDQUFDRSxNQUFWLEdBQW1CLENBQW5ELEVBQXNEUCxNQUFNLENBQUNPLE1BQVAsR0FBZ0IsQ0FBaEIsR0FBb0JGLFNBQVMsQ0FBQ0MsS0FBVixHQUFrQixDQUE1RixFQUErRkQsU0FBUyxDQUFDRSxNQUF6RyxFQUFpSEYsU0FBUyxDQUFDQyxLQUEzSDtBQWlCSDs7QUFFRFAsVUFBVTs7QUFFVixTQUFTVyxRQUFULEdBQWlCO0FBRWIsTUFBSUMsSUFBSSxHQUFzQlYsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQTlCO0FBQ0EsTUFBSUMsR0FBRyxHQUFHUSxJQUFJLENBQUNQLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBVjtBQUdBRCxLQUFHLENBQUNTLE1BQUosQ0FBVyxFQUFYLEVBQWUsRUFBZjtBQUNBVCxLQUFHLENBQUNVLE1BQUosQ0FBVyxFQUFYLEVBQWUsRUFBZjtBQUNBVixLQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEVBQWhCO0FBRUFWLEtBQUcsQ0FBQ1MsTUFBSixDQUFXLEVBQVgsRUFBZSxFQUFmO0FBQ0FULEtBQUcsQ0FBQ1UsTUFBSixDQUFXLEVBQVgsRUFBZSxHQUFmO0FBQ0FWLEtBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0IsR0FBaEI7QUFDQVYsS0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQixFQUFoQjtBQUNBVixLQUFHLENBQUNXLE1BQUo7QUFHQVgsS0FBRyxDQUFDSyxTQUFKLEdBQWdCLFFBQWhCO0FBQ0FMLEtBQUcsQ0FBQ1ksV0FBSixHQUFrQixRQUFsQjtBQUNBWixLQUFHLENBQUNhLFNBQUo7QUFDQWIsS0FBRyxDQUFDYyxHQUFKLENBQVEsR0FBUixFQUFZLEVBQVosRUFBZSxFQUFmLEVBQWtCLENBQWxCLEVBQW9CQyxJQUFJLENBQUNDLEVBQUwsR0FBUSxDQUE1QixFQUE4QixJQUE5QjtBQUNBaEIsS0FBRyxDQUFDaUIsSUFBSjtBQUNBakIsS0FBRyxDQUFDVyxNQUFKO0FBR0FYLEtBQUcsQ0FBQ2EsU0FBSjtBQUNBYixLQUFHLENBQUNZLFdBQUosR0FBa0IsV0FBbEI7QUFDQVosS0FBRyxDQUFDUyxNQUFKLENBQVcsRUFBWCxFQUFjLEdBQWQ7QUFDQVQsS0FBRyxDQUFDa0IsS0FBSixDQUFVLEVBQVYsRUFBYSxFQUFiLEVBQWdCLEdBQWhCLEVBQW9CLEdBQXBCLEVBQXdCLEVBQXhCO0FBQ0FsQixLQUFHLENBQUNXLE1BQUo7QUFDQVgsS0FBRyxDQUFDbUIsSUFBSixDQUFTLEVBQVQsRUFBWSxHQUFaLEVBQWdCLEVBQWhCLEVBQW1CLEVBQW5CO0FBQ0FuQixLQUFHLENBQUNXLE1BQUo7QUFHQVgsS0FBRyxDQUFDWSxXQUFKLEdBQWtCLFdBQWxCO0FBQ0FaLEtBQUcsQ0FBQ2EsU0FBSjtBQUNBYixLQUFHLENBQUNTLE1BQUosQ0FBVyxFQUFYLEVBQWUsR0FBZjtBQUNBVCxLQUFHLENBQUNvQixhQUFKLENBQWtCLEVBQWxCLEVBQXFCLEdBQXJCLEVBQXlCLEVBQXpCLEVBQTRCLEdBQTVCLEVBQWdDLEdBQWhDLEVBQW9DLEdBQXBDO0FBQ0FwQixLQUFHLENBQUNTLE1BQUosQ0FBVyxFQUFYLEVBQWUsR0FBZjtBQUNBVCxLQUFHLENBQUNvQixhQUFKLENBQWtCLEVBQWxCLEVBQXFCLEdBQXJCLEVBQXlCLEVBQXpCLEVBQTRCLEdBQTVCLEVBQWdDLEdBQWhDLEVBQW9DLEdBQXBDO0FBQ0FwQixLQUFHLENBQUNXLE1BQUo7QUFHQVgsS0FBRyxDQUFDYSxTQUFKO0FBQ0FiLEtBQUcsQ0FBQ1ksV0FBSixHQUFrQixRQUFsQjtBQUNBWixLQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEVBQWhCO0FBQ0FULEtBQUcsQ0FBQ3FCLGdCQUFKLENBQXFCLEdBQXJCLEVBQXlCLEVBQXpCLEVBQTRCLEdBQTVCLEVBQWdDLEVBQWhDO0FBQ0FyQixLQUFHLENBQUNXLE1BQUo7QUFDSDs7QUFDREosUUFBUTs7QUFFUixTQUFTZSxjQUFULEdBQXVCO0FBYW5CLE1BQU1wQixTQUFTLEdBQWtCO0FBQzdCQyxTQUFLLEVBQUUsR0FEc0I7QUFFN0JDLFVBQU0sRUFBRTtBQUZxQixHQUFqQztBQUlBLE1BQU1tQixNQUFNLEdBQWU7QUFFdkJDLE1BQUUsRUFBRSxHQUZtQjtBQUd2QkMsTUFBRSxFQUFFLEVBSG1CO0FBSXZCQyxNQUFFLEVBQUUsRUFKbUI7QUFLdkJDLE1BQUUsRUFBRSxDQUxtQjtBQU12QkMsVUFBTSxFQUFFYixJQUFJLENBQUNDLEVBQUwsR0FBUTtBQU5PLEdBQTNCO0FBU0EsTUFBSWEsVUFBVSxHQUFzQi9CLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFwQztBQUNBLE1BQUlDLEdBQUcsR0FBRzZCLFVBQVUsQ0FBQzVCLFVBQVgsQ0FBc0IsSUFBdEIsQ0FBVjtBQUdBRCxLQUFHLENBQUNLLFNBQUosR0FBZ0IsT0FBaEI7QUFDQUwsS0FBRyxDQUFDTSxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQkosU0FBUyxDQUFDQyxLQUE3QixFQUFvQ0QsU0FBUyxDQUFDRSxNQUE5QztBQUdBSixLQUFHLENBQUNLLFNBQUosR0FBZ0IsS0FBaEI7QUFDQUwsS0FBRyxDQUFDYyxHQUFKLENBQVFTLE1BQU0sQ0FBQ0MsRUFBZixFQUFtQkQsTUFBTSxDQUFDRSxFQUFQLEdBQVUsQ0FBN0IsRUFBZ0NGLE1BQU0sQ0FBQ0csRUFBUCxHQUFVLENBQTFDLEVBQTZDSCxNQUFNLENBQUNJLEVBQXBELEVBQXdESixNQUFNLENBQUNLLE1BQS9EO0FBQ0E1QixLQUFHLENBQUNpQixJQUFKO0FBQ0FqQixLQUFHLENBQUNhLFNBQUo7QUFDQWIsS0FBRyxDQUFDSyxTQUFKLEdBQWdCLFFBQWhCO0FBQ0FMLEtBQUcsQ0FBQ2MsR0FBSixDQUFRUyxNQUFNLENBQUNDLEVBQVAsR0FBVSxDQUFsQixFQUFxQkQsTUFBTSxDQUFDRSxFQUFQLEdBQVUsQ0FBL0IsRUFBa0NGLE1BQU0sQ0FBQ0csRUFBUCxHQUFVLENBQTVDLEVBQStDSCxNQUFNLENBQUNJLEVBQXRELEVBQTBESixNQUFNLENBQUNLLE1BQWpFO0FBQ0E1QixLQUFHLENBQUNpQixJQUFKO0FBRUFqQixLQUFHLENBQUM4QixJQUFKLEdBQVcsZ0JBQVg7QUFDQTlCLEtBQUcsQ0FBQytCLFNBQUosR0FBZ0IsUUFBaEI7QUFDQS9CLEtBQUcsQ0FBQ2dDLFlBQUosR0FBbUIsUUFBbkI7QUFDQWhDLEtBQUcsQ0FBQ0ssU0FBSixHQUFlLE9BQWY7QUFDQUwsS0FBRyxDQUFDaUMsUUFBSixDQUFhLFlBQWIsRUFBMEIvQixTQUFTLENBQUNDLEtBQVYsR0FBZ0IsQ0FBMUMsRUFBNENELFNBQVMsQ0FBQ0UsTUFBVixHQUFpQixFQUE3RDtBQUNIOztBQUVEa0IsY0FBYzs7QUFHZCxTQUFTWSxZQUFULEdBQXFCO0FBQ2pCLE1BQUlDLFFBQVEsR0FBc0JyQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBbEM7QUFDQSxNQUFJQyxHQUFHLEdBQUdtQyxRQUFRLENBQUNsQyxVQUFULENBQW9CLElBQXBCLENBQVY7QUFJQUQsS0FBRyxDQUFDYSxTQUFKO0FBQ0FiLEtBQUcsQ0FBQ0ssU0FBSixHQUFnQixPQUFoQjtBQUNBTCxLQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWUsR0FBZjtBQUNBVCxLQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWUsR0FBZjtBQUNBVixLQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWUsR0FBZjtBQUNBVixLQUFHLENBQUNpQixJQUFKO0FBR0FqQixLQUFHLENBQUNhLFNBQUo7QUFDQWIsS0FBRyxDQUFDSyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FMLEtBQUcsQ0FBQ2MsR0FBSixDQUFRLEdBQVIsRUFBWSxHQUFaLEVBQWdCLEVBQWhCLEVBQW1CLENBQW5CLEVBQXFCQyxJQUFJLENBQUNDLEVBQUwsR0FBUSxDQUE3QixFQUErQixJQUEvQjtBQUNBaEIsS0FBRyxDQUFDaUIsSUFBSjtBQUVBakIsS0FBRyxDQUFDYSxTQUFKO0FBQ0FiLEtBQUcsQ0FBQ0ssU0FBSixHQUFnQixPQUFoQjtBQUNBTCxLQUFHLENBQUNjLEdBQUosQ0FBUSxHQUFSLEVBQVksR0FBWixFQUFnQixFQUFoQixFQUFtQixDQUFuQixFQUFxQkMsSUFBSSxDQUFDQyxFQUFMLEdBQVEsQ0FBN0IsRUFBK0IsSUFBL0I7QUFDQWhCLEtBQUcsQ0FBQ2lCLElBQUo7QUFFSDs7QUFDRGlCLFlBQVk7O0FBR1osU0FBU0UsV0FBVCxHQUFvQjtBQU1oQixNQUFNbEMsU0FBUyxHQUFrQjtBQUM3QkMsU0FBSyxFQUFFLEdBRHNCO0FBRTdCQyxVQUFNLEVBQUU7QUFGcUIsR0FBakM7QUFLQSxNQUFJaUMsTUFBTSxHQUFzQnZDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFoQztBQUNBLE1BQUlDLEdBQUcsR0FBR3FDLE1BQU0sQ0FBQ3BDLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtBQUdBRCxLQUFHLENBQUNLLFNBQUosR0FBZ0IsVUFBaEI7QUFDQUwsS0FBRyxDQUFDTSxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQkosU0FBUyxDQUFDQyxLQUE3QixFQUFvQ0QsU0FBUyxDQUFDRSxNQUE5QztBQUdBSixLQUFHLENBQUNhLFNBQUo7QUFDQWIsS0FBRyxDQUFDSyxTQUFKLEdBQWdCLFFBQWhCO0FBQ0FMLEtBQUcsQ0FBQ1MsTUFBSixDQUFXLEVBQVgsRUFBYyxHQUFkO0FBQ0FULEtBQUcsQ0FBQ1UsTUFBSixDQUFXLEVBQVgsRUFBYyxHQUFkO0FBQ0FWLEtBQUcsQ0FBQ1UsTUFBSixDQUFXLEVBQVgsRUFBYyxHQUFkO0FBQ0FWLEtBQUcsQ0FBQ2lCLElBQUo7QUFHQWpCLEtBQUcsQ0FBQ2EsU0FBSjtBQUNBYixLQUFHLENBQUNLLFNBQUosR0FBZ0IsV0FBaEI7QUFDQUwsS0FBRyxDQUFDYyxHQUFKLENBQVEsR0FBUixFQUFZLEdBQVosRUFBZ0IsRUFBaEIsRUFBbUIsQ0FBbkIsRUFBcUJDLElBQUksQ0FBQ0MsRUFBTCxHQUFRLENBQTdCLEVBQStCLElBQS9CO0FBQ0FoQixLQUFHLENBQUNpQixJQUFKO0FBR0FqQixLQUFHLENBQUNhLFNBQUo7QUFDQWIsS0FBRyxDQUFDWSxXQUFKLEdBQWtCLFFBQWxCO0FBQ0FaLEtBQUcsQ0FBQ3NDLFVBQUosQ0FBZSxHQUFmLEVBQW9CLEdBQXBCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCO0FBR0g7O0FBRURGLFdBQVciLCJuYW1lcyI6WyJkcmF3U3Vpc3NlIiwic3Vpc3NlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJyZWN0YW5nbGUiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd0hvbWUiLCJob21lIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwiYXJjVG8iLCJyZWN0IiwiYmV6aWVyQ3VydmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJkcmF3TWFzdGVyY2FyZCIsImNlcmNsZSIsIngxIiwieDIiLCJ5MSIsInkyIiwicmFkaXVzIiwibWFzdGVyY2FyZCIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsImRyYXdUcmlhbmdsZSIsInRyaWFuZ2xlIiwiZHJhd1N5bWJvbHMiLCJzaGFwZXMiLCJzdHJva2VSZWN0Il0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF5aW5nLXdpdGgtc2hhcGVzLy4vc3JjL2pzL21haW4udHM/NGI3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZnVuY3Rpb24gZHJhd1N1aXNzZSAoKXtcclxuICAgIHR5cGUgcmVjdGFuZ2xlVHlwZSA9IHtcclxuICAgICAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgfVxyXG4gICAgbGV0IHN1aXNzZTogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnU3dpc3MtZmxhZycpO1xyXG4gICAgbGV0IGN0eCA9IHN1aXNzZS5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuXHJcbiAgICBjb25zdCByZWN0YW5nbGU6IHJlY3RhbmdsZVR5cGUgPSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICBoZWlnaHQ6IDMwMCxcclxuICAgIH1cclxuXHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBzdWlzc2Uud2lkdGgsIHN1aXNzZS5oZWlnaHQpO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICBjdHguZmlsbFJlY3Qoc3Vpc3NlLndpZHRoIC8gMiAtIHJlY3RhbmdsZS53aWR0aCAvIDIsIHN1aXNzZS5oZWlnaHQgLyAyIC0gcmVjdGFuZ2xlLmhlaWdodCAvIDIsIHJlY3RhbmdsZS53aWR0aCwgcmVjdGFuZ2xlLmhlaWdodCk7XHJcblxyXG4gICAgY3R4LmZpbGxSZWN0KHN1aXNzZS53aWR0aCAvIDIgLSByZWN0YW5nbGUuaGVpZ2h0IC8gMiwgc3Vpc3NlLmhlaWdodCAvIDIgLSByZWN0YW5nbGUud2lkdGggLyAyLCByZWN0YW5nbGUuaGVpZ2h0LCByZWN0YW5nbGUud2lkdGgpO1xyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgLy8gVW5lIGxhcmdldXIgZGUgdHJhaXQgZGUgMiBwaXhlbHNcclxuICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgLy8gVW4gYmVhdSByb3VnZSBwb3VyIGxlIHJlbXBsaXNzYWdlXHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICAgIC8vIExhIG51aXQsIHRvdXMgbGVzIHRyYWl0cyBzb250IGdyaXNcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiI2NjY1wiO1xyXG4gICAgLy8gVW4gcmVjdGFuZ2xlIHBsZWluIChyb3VnZSlcclxuICAgIGN0eC5maWxsUmVjdCgxMCwgMTAsIDIwMCwgMTAwKTtcclxuICAgIC8vIERldXggcmVjdGFuZ2xlcyBlZmZhw6dhbnQgbGUgZGVzc2luIChibGFuY3MpXHJcbiAgICBjdHguY2xlYXJSZWN0KDEwMCwyMCwgMjAsIDgwKTtcclxuICAgIGN0eC5jbGVhclJlY3QoNzAsNTAsIDgwLCAyMCk7wrJcclxuICAgIC8vIFVuIGRlcm5pZXIgcmVjdGFuZ2xlICh0cmFpdCBncmlzKSovXHJcblxyXG59XHJcblxyXG5kcmF3U3Vpc3NlKCk7XHJcblxyXG5mdW5jdGlvbiBkcmF3SG9tZSgpIHtcclxuXHJcbiAgICBsZXQgaG9tZTogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xyXG4gICAgbGV0IGN0eCA9IGhvbWUuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAvLyBUb2l0XHJcbiAgICBjdHgubW92ZVRvKDQwLCA4MCk7XHJcbiAgICBjdHgubGluZVRvKDgwLCA0MCk7XHJcbiAgICBjdHgubGluZVRvKDEyMCwgODApO1xyXG4gICAgLy8gTXVyc1xyXG4gICAgY3R4Lm1vdmVUbyg2MCwgODApO1xyXG4gICAgY3R4LmxpbmVUbyg2MCwgMTIwKTtcclxuICAgIGN0eC5saW5lVG8oMTAwLCAxMjApO1xyXG4gICAgY3R4LmxpbmVUbygxMDAsIDgwKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAvL3NvbGVpbFxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIm9yYW5nZVwiO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYygxNTAsNDAsMzAsMCxNYXRoLlBJKjIsdHJ1ZSk7XHJcbiAgICBjdHguZmlsbCgpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgIC8vIFBhbG1pZXJcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiTGltZUdyZWVuXCI7XHJcbiAgICBjdHgubW92ZVRvKDIwLDEyMCk7XHJcbiAgICBjdHguYXJjVG8oMjAsMzAsMTYwLDEyMCwyMCk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICBjdHgucmVjdCg3NSwxMDAsMTAsMjApO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgIC8vIFZhZ3VlbGV0dGVzXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInR1cnF1b2lzZVwiO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbygyMCwgMTUwKTtcclxuICAgIGN0eC5iZXppZXJDdXJ2ZVRvKDgwLDEzMCw4MCwxODAsMTQwLDE1MCk7XHJcbiAgICBjdHgubW92ZVRvKDIwLCAxNzApO1xyXG4gICAgY3R4LmJlemllckN1cnZlVG8oODAsMTUwLDgwLDIwMCwxNDAsMTcwKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAvLyBTb3VyaXJlXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIm9yYW5nZVwiO1xyXG4gICAgY3R4Lm1vdmVUbygxMzAsIDQwKTtcclxuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKDE1MCw3MCwxNzAsNDApO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG59XHJcbmRyYXdIb21lKCk7XHJcblxyXG5mdW5jdGlvbiBkcmF3TWFzdGVyY2FyZCgpe1xyXG4gICAgdHlwZSByZWN0YW5nbGVUeXBlID0ge1xyXG4gICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICB9XHJcbiAgICB0eXBlIGNlcmNsZVR5cGUgPSB7XHJcbiAgICAgICAgeDE6IG51bWJlcixcclxuICAgICAgICB4MjogbnVtYmVyLFxyXG4gICAgICAgIHkxOiBudW1iZXI7XHJcbiAgICAgICAgeTI6IG51bWJlcixcclxuICAgICAgICByYWRpdXM6IG51bWJlcixcclxuICAgICAgICBmaWxsOiBzdHJpbmdcclxuICAgIH1cclxuICAgIGNvbnN0IHJlY3RhbmdsZTogcmVjdGFuZ2xlVHlwZSA9IHtcclxuICAgICAgICB3aWR0aDogNjAwLFxyXG4gICAgICAgIGhlaWdodDogMzYwLFxyXG4gICAgfVxyXG4gICAgY29uc3QgY2VyY2xlOiBjZXJjbGVUeXBlID0ge1xyXG4gICAgICAgIC8vY3R4LmFyYygxNTAsNDAsMzAsMCxNYXRoLlBJKjIsdHJ1ZSk7XHJcbiAgICAgICAgeDE6IDIwMCxcclxuICAgICAgICB4MjogNDAsXHJcbiAgICAgICAgeTE6IDM1LFxyXG4gICAgICAgIHkyOiAwLFxyXG4gICAgICAgIHJhZGl1czogTWF0aC5QSSoyLFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBtYXN0ZXJjYXJkOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXN0ZXItY2FyZCcpO1xyXG4gICAgbGV0IGN0eCA9IG1hc3RlcmNhcmQuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAvL2ZvbmQgbm9pclxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCByZWN0YW5nbGUud2lkdGgsIHJlY3RhbmdsZS5oZWlnaHQpO1xyXG5cclxuICAgIC8vY2VyY2xlc1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgICBjdHguYXJjKGNlcmNsZS54MSwgY2VyY2xlLngyKjMsIGNlcmNsZS55MSozLCBjZXJjbGUueTIsIGNlcmNsZS5yYWRpdXMpO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIm9yYW5nZVwiO1xyXG4gICAgY3R4LmFyYyhjZXJjbGUueDEqMiwgY2VyY2xlLngyKjMsIGNlcmNsZS55MSozLCBjZXJjbGUueTIsIGNlcmNsZS5yYWRpdXMpO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuXHJcbiAgICBjdHguZm9udCA9ICczMHB0IEhlbHZldGljYSc7XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcImJvdHRvbVwiO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9XCJ3aGl0ZVwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KFwiTWFzdGVyY2FyZFwiLHJlY3RhbmdsZS53aWR0aC8yLHJlY3RhbmdsZS5oZWlnaHQtMzApO1xyXG59XHJcblxyXG5kcmF3TWFzdGVyY2FyZCgpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGRyYXdUcmlhbmdsZSgpIHtcclxuICAgIGxldCB0cmlhbmdsZTogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJpYW5nbGUnKTtcclxuICAgIGxldCBjdHggPSB0cmlhbmdsZS5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuXHJcbiAgICAvL3RyaWFuZ2xlXHJcbiAgICBjdHguYmVnaW5QYXRoKClcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICBjdHgubW92ZVRvKDE1MCwzMDApO1xyXG4gICAgY3R4LmxpbmVUbygzMDAsMTAwKTtcclxuICAgIGN0eC5saW5lVG8oNDUwLDMwMCk7XHJcbiAgICBjdHguZmlsbCgpO1xyXG5cclxuICAgIC8vY2VyY2xlc1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuICAgIGN0eC5hcmMoMzAwLDIzMCw4MCwwLE1hdGguUEkqMix0cnVlKTtcclxuICAgIGN0eC5maWxsKCk7XHJcblxyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgIGN0eC5hcmMoMzEwLDIzMCw2NSwwLE1hdGguUEkqMix0cnVlKTtcclxuICAgIGN0eC5maWxsKCk7XHJcblxyXG59XHJcbmRyYXdUcmlhbmdsZSgpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGRyYXdTeW1ib2xzKCkge1xyXG4gICAgdHlwZSByZWN0YW5nbGVUeXBlID0ge1xyXG4gICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVjdGFuZ2xlOiByZWN0YW5nbGVUeXBlID0ge1xyXG4gICAgICAgIHdpZHRoOiA2MDAsXHJcbiAgICAgICAgaGVpZ2h0OiAzNjAsXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNoYXBlczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hhcGVzJyk7XHJcbiAgICBsZXQgY3R4ID0gc2hhcGVzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4vL2ZvbmQgbm9pclxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiZGFya2JsdWVcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCByZWN0YW5nbGUud2lkdGgsIHJlY3RhbmdsZS5oZWlnaHQpO1xyXG5cclxuICAgIC8vdHJpYW5nbGUgMVxyXG4gICAgY3R4LmJlZ2luUGF0aCgpXHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJvcmFuZ2VcIjtcclxuICAgIGN0eC5tb3ZlVG8oNTAsMzAwKTtcclxuICAgIGN0eC5saW5lVG8oNzAsMjUwKTtcclxuICAgIGN0eC5saW5lVG8oOTAsMzAwKTtcclxuICAgIGN0eC5maWxsKCk7XHJcblxyXG4gICAgLy9jZXJjbGVcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcInR1cnF1b2lzZVwiO1xyXG4gICAgY3R4LmFyYygxNTAsMjgwLDIwLDAsTWF0aC5QSSoyLHRydWUpO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuXHJcbiAgICAvL2NhcnLDqVxyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJvcmFuZ2VcIjtcclxuICAgIGN0eC5zdHJva2VSZWN0KDIwMCwgMjUwLCA1MCwgNTApO1xyXG4gICAgLy9jdHgudHJhbnNmb3JtKCk7XHJcblxyXG59XHJcblxyXG5kcmF3U3ltYm9scygpOyJdfQ==\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxheWluZy13aXRoLXNoYXBlcy8uL3NyYy9zY3NzL21haW4uc2Nzcz9mN2U1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkplaying_with_shapes"] = self["webpackChunkplaying_with_shapes"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;