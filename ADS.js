(function() {
    //ADS命名空间
    if(!window.ADS) {
        window['ADS'] = {}
    }

    function isCompatible(other) {
        // 使用能力检测来检查必要条件
        if(other === false
            || !Array.prototype.push
            || !Object.hasOwnProperty
            || !document.createElement
            || !document.getElementsByTagName) {
                return false;
            }
            return true;
    };
    window['ADS']['isCompatible'] = isCompatible;

    function $() {
        var elements = new Array();

        // 查找作为参数提供的所有元素
        for(var i = 0; i < arguments.length; i++) {
            var element = arguments[i];

            if(typeof element == 'string') {
                element = document.getElementById(element);
            }

            // 如果只提供了一个参数，则立即返回这个元素
            if(arguments.length == 1) {
                return element;
            }

            // 否则，将它添加到数组中
            elements.push(element);
        }

        // 返回包含多个被请求元素的数组
        return elements;
    };
    window['ADS']['$'] = $;

    function addEvent(node, type, listener) {

    };
    window['ADS']['addEvent'] = addEvent;

    function removeEvent(node, type, listener) {

    };
    window['ADS']['removeEvent'] = removeEvent;

    function getElementsByClassName(className, tag, parent) {

    };
    window['ADS']['getElementsByClassName'] = getElementsByClassName;

    function toggleDisplay(node, value) {

    };
    window['ADS']['toggleDispaly'] = toggleDisplay;

    function insertAfter(node, referenceNode) {

    };
    window['ADS']['insertAfter'] = insertAfter;

    function removeChildren(parent) {

    };
    window['ADS']['removeChildren'] = removeChildren;

    function prependChild(parent, newChild) {

    };
    window['ADS']['prependChild'] = prependChild;
})();

if(ADS.isCompatible()) {
    alert('yes');
}

var element = ADS.$('example', 'example2', 'example4');