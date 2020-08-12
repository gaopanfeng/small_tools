// javascript:
(function () {
    let name = 'debug.wap.searchhub.server';
    let val = window.prompt('后端地址:','doc01.wap.hb.ted:5555');
    if (!val) {
        return;
    }
    document.cookie = `${name}=${val}; path=/`;
})();
