class LRUCache {
    map = new Map();
    constructor(capacity) {
        this.max = capacity;
    }
    get(key) {
        if (this.map.has(key)) {
            const value = this.map.get(key);
            this.put(key, value);
            return value;
        }
        return -1;
    }
    put(key, value) {
        if (this.map.has(key)) {
            this.map.delete(key);
        } else {
            if (this.map.size == this.max) {
                this.map.delete(this.map.keys().next().value);
            }
        }
        this.map.set(key, value);
    }
}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1);
lRUCache.put(2, 2);
console.log(lRUCache.get(1));
lRUCache.put(3, 3);
console.log(lRUCache.get(2));
lRUCache.put(4, 4);
console.log(lRUCache.get(1));
console.log(lRUCache.get(3));
console.log(lRUCache.get(4));
