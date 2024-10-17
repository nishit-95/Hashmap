const Entry = require("./entry");

class MyHashMap {
  static DEFAULT_CAPACITY = 10;

  constructor(capacity = MyHashMap.DEFAULT_CAPACITY) {
    this.capacity = capacity;
    this.buckets = new Array(this.capacity);
  }

  hashCode(key) {
    return (
      [...key].reduce((hash, char) => hash * 31 + char.charCodeAt(0), 0) %
      this.capacity
    );
  }

  put(key, value) {
    const bucketIndex = this.hashCode(key);
    let head = this.buckets[bucketIndex];

    while (head != null) {
      if (head.key === key) {
        head.value = value;
        return;
      }
      head = head.nextEntry;
    }

    const newEntry = new Entry(key, value, this.buckets[bucketIndex]);
    this.buckets[bucketIndex] = newEntry;
  }

  get(key) {
    const bucketIndex = this.hashCode(key);
    let head = this.buckets[bucketIndex];

    while (head != null) {
      if (head.key === key) {
        return head.value;
      }
      head = head.nextEntry;
    }
    return null;
  }

  remove(key) {
    const bucketIndex = this.hashCode(key);
    let head = this.buckets[bucketIndex];
    let prev = null;

    while (head != null) {
      if (head.key === key) {
        if (prev === null) {
          this.buckets[bucketIndex] = head.nextEntry;
        } else {
          prev.nextEntry = head.nextEntry;
        }
        return true;
      }
      prev = head;
      head = head.nextEntry;
    }
    return false;
  }

  dump() {
    this.buckets.forEach((bucket, index) => {
      const entries = [];
      let head = bucket;
      while (head != null) {
        entries.push(`[${head.key}: ${head.value}]`);
        head = head.nextEntry;
      }
      console.log(`Bucket ${index}: ${entries.join(" -> ") || "empty"}`);
    });
  }
}

module.exports = MyHashMap;
