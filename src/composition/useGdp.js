import gsap from "gsap";
import { computed, ref, watch } from "vue";

const colors = ["#334552", "#b34335", "#6e9fa5", "#a2c3ac", "#c8846c"];

export default function useGdp(gdpRef, maxSize) {
    const maxVaule = computed(() => {
        if (gdpRef.value.length) {
            return Math.max(...gdpRef.value.map(it => it.value));
        }
        return 0;
    });
    const bars = ref([]);
    // 条的最新状态
    const barsTarget = computed(() => {
        return gdpRef.value.map((it, i) => ({
            ...it,
            color: colors[i % colors.length],
            size: it.value / maxVaule.value * maxSize,
        }));
    });
    watch(
        barsTarget,
        () => {
            // 将bars变到barsTarget
            for (let i = 0; i < barsTarget.value.length; i++) {
                if (!bars.value[i]) {
                    bars.value[i] = {
                        ...barsTarget.value[i],
                        size: 0,
                        value: 0,
                    }
                }
                // bars.value[i] 中的属性 逐步变化到 barsTarget.value[i]
                gsap.to(bars.value[i], {
                    ...barsTarget.value[i],
                    duration: 1,
                });
            }
        },
        { deep: true }
    );

    return {
        bars,
    }
}