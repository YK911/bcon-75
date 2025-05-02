export function saveToLS(key = "", value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function loadFromLS(key = "") {
  try {
    const lsValue = localStorage.getItem(key);

    if (!lsValue) {
      throw new Error("⚠️ No data");
    }

    return JSON.parse(lsValue);
  } catch (error) {
    console.log(error.message);
  }
}
