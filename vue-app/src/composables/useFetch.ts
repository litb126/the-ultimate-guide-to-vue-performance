import { useCache } from "./useCache";
import { ref } from "vue";
import defu from "defu";

interface useFetchOptions {
    ttl?: number;
    fetchOptions?: RequestInit;
    immediate?: boolean;
}

export function useFetch<T>(url: string, options?: useFetchOptions) {
    const data = ref<T>();
    const error = ref<unknown>();
    const loading = ref(false);
    const cache = useCache();

    const TEN_MINUTES = 1000 * 60 * 10;
    const opts = defu(options, {
        immediate: true,
        ttl: TEN_MINUTES,
        fetchOptions: {
            headers: {
                Accept: 'application/json'
            }
        },
    } as useFetchOptions);

    const fetchData = async () => {
        loading.value = true;
        try {
            const cachedData = cache.getItem(url);
            if (cachedData) {
                data.value = cachedData;
            } else {
                const response = await fetch(url, opts.fetchOptions);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                data.value = await response.json();
                cache.setItem(url, data.value, opts.ttl);
            }
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    };

    function refresh() {
        cache.removeItem(url);
        fetchData();
    }

    if (opts.immediate) {
        fetchData();
    }


    return { data, error, loading, execute: fetchData, refresh };
}