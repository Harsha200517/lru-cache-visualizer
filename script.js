class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.hits = 0;
        this.misses = 0;
    }

    get(key) {
        if (!this.map.has(key)) {
            this.misses++;
            showNotification("Key not found");
            addLog("Tried to access key " + key + " → Not found");
            return -1;
        }

        let value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, value);

        this.hits++;
        showNotification("Key " + key + " accessed");
        addLog("Accessed key " + key);

        return value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            this.map.delete(key);
        }
        else if (this.map.size >= this.capacity) {
            let lruKey = this.map.keys().next().value;
            this.map.delete(lruKey);

            showNotification("Removed old key " + lruKey);
            addLog("Removed least used key " + lruKey);
        }

        this.map.set(key, value);
        showNotification("Added key " + key);
        addLog("Added key " + key + " with value " + value);
    }
}

// Initialize cache
let cache = new LRUCache(3);

// Add data
function put() {
    let key = document.getElementById("key").value;
    let value = document.getElementById("value").value;

    if (key === "" || value === "") return;

    cache.put(key, value);
    render();
}

// Access data
function get() {
    let key = document.getElementById("getKey").value;

    if (key === "") return;

    cache.get(key);
    render();
}

// Render cache
function render() {
    let cacheDiv = document.getElementById("cache");
    cacheDiv.innerHTML = "";

    let keys = Array.from(cache.map.keys());
    keys.reverse(); // MRU on top

    keys.forEach((key, index) => {
        let div = document.createElement("div");
        div.className = "block";

        if (index === keys.length - 1) {
            div.classList.add("lru");
        }

        div.innerText = key;
        cacheDiv.appendChild(div);
    });

    document.getElementById("hits").innerText = cache.hits;
    document.getElementById("misses").innerText = cache.misses;
}

// Notification
function showNotification(message) {
    let box = document.getElementById("notification");
    box.innerText = message;
    box.style.display = "block";

    setTimeout(() => {
        box.style.display = "none";
    }, 3000);
}

// Log
function addLog(message) {
    let log = document.getElementById("log");
    let li = document.createElement("li");
    li.innerText = message;
    log.prepend(li);
}

// Clear log
function clearLog() {
    document.getElementById("log").innerHTML = "";
}