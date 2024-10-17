class Entry {
  constructor(key, value, nextEntry = null) {
    this.key = key;
    this.value = value;
    this.nextEntry = nextEntry;
  }
}

module.exports = Entry;
