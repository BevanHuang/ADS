(function() {
    function $(id) {
        return document.getElementById(id);
    }

    function alertNodeName(id) {
        alert($(id).nodeName);
    }

    window['myNamesapce'] = {};
    window['myNamesapce']['showNodeName'] = alertNodeName;
})();

myNamesapce.showNodeName('myDiv');

// alert(document.getElementById('myDiv'));