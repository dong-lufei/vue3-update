import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { defineAsyncComponent, h } from "vue";
import Error from "../components/Error.vue";
import Loading from "../components/Loading.vue";


NProgress.configure({
    trickleSpeed: 50, //滴速50毫秒
    showSpinner: false, // 是否显示加载的loading图标
});

export function delay(duration) {
    if (!duration) {
        duration = random(1000, 5000);
    }

    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

export function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// 得到一个异步组件
export function getAsyncComponent(path) {
    return defineAsyncComponent({
        loader: () =>// import(path),
        {
            NProgress.start(); //进度条开始
            const comp = import(path);
            if (comp) {
                NProgress.done(); //进度条结束
            }
            return comp;
        },  //异步加载

        loadingComponent: Loading, // 当promise在pending状态时，将显示这里的组件
        errorComponent: { //加载失败时显示
            render() {
                return h(Error, "出错了！！！");
            },
        },
    });
}

//得到一个异步页面
export function getAsyncPage(path) {
    return defineAsyncComponent({
        loader: async () => {
            NProgress.start();  //开启进度条
            await delay();
            const comp = await import(path);
            NProgress.done();  //关闭进度条
            return comp;
        },
        loadingComponent: Loading, // 当promise在pending状态时，将显示这里的组件
    });
}
// errorComponent: { //加载失败时显示
//     render() {
//         return h(Error, "出错了！！！");
//     },
// },