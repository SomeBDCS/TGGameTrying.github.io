mergeInto(LibraryManager.library, {
  TelegramSetData: function (strPtr) {
    var data = UTF8ToString(strPtr);
    if (window.Telegram && Telegram.WebApp && Telegram.WebApp.setData) {
      Telegram.WebApp.setData(data);
      console.log("Telegram data saved:", data);
    } else {
      console.warn("Telegram WebApp API not available");
    }
  },

  TelegramGetData: function () {
    if (window.Telegram && Telegram.WebApp && Telegram.WebApp.initDataUnsafe) {
      return allocateUTF8(window.Telegram.WebApp.initDataUnsafe.data || "");
    }
    return allocateUTF8("");
  }
});