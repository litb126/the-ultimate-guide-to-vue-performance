import { useCache } from "./useCache";
import { ref } from "vue";
import defu from "defu";

interface useFetchOptions {
    ttl?: number;
    fetchOptions?: RequestInit;
}

export function useFetch<T extends unknown>(url: string, options?: useFetchOptions) {
    const data = ref<T>();
    const error = ref<unknown>();
    const loading = ref(false);
    const cache = useCache();

    const TEN_MINUTES = 1000 * 60 * 10;
    const opts = defu(options, {
        ttl: TEN_MINUTES,
        fetchOptions: {
            headers: {
                Accept: 'application/json'
            }
        }
    });

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

    fetchData();

    return { data, error, loading, execute: fetchData, refresh };
}