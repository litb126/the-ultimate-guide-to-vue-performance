import { ref } from 'vue';

interface CacheEntry {
    value: any;
    expiration: number;
}

const cache = ref(new Map<string, CacheEntry>());

export function useCache() {

    const TEN_MINUTES = 1000 * 60 * 10;
    function setItem(key: string, value: any, ttl: number = TEN_MINUTES) {
        const expiration = Date.now() + ttl;
        cache.value.set(key, { value, expiration });
    }

    function getItem(key: string) {
        const entry = cache.value.get(key);
        if (entry) {
            if (Date.now() < entry.expiration) {
                return entry.value;
            } else {
                cache.value.delete(key);
            }
        }
        return null;
    }

    function removeItem(key: string) {
        cache.value.delete(key);
    }

    function hasItem(key: string) {
        const entry = cache.value.get(key);
        if (entry) {
            if (Date.now() < entry.expiration) {
                return true;
            } else {
                cache.value.delete(key);
            }
        }
        return false;
    }

    function clearCache() {
        cache.value.clear();
    }

    return {
        setItem,
        getItem,
        hasItem,
        removeItem,
        clearCache
    };
}