# Teatergent Website

這是可直接部署至 GitHub Pages 的靜態網站，不需要安裝套件或執行建置。

## 上傳及發佈

1. 將這個資料夾內的所有檔案與 assets 資料夾上傳至 GitHub repository 根目錄，保留資料夾結構。
2. 到 repository 的 Settings → Pages，選擇 Deploy from a branch。
3. 選擇 main 分支與 / (root)，儲存後等待 GitHub Pages 完成發佈。

## 檔案

- index.html：網頁與英文文案。
- style.css：字體、滿版布局與響應式樣式。
- app.js：影片方向切換、自動播放及圖片漸變。
- assets/：原始品牌 logo、桌機／手機影片、8 張優化圖片、品牌素材。

字體：Kazimir Text，透過 Adobe Fonts 網站專案 https://use.typekit.net/kbf2edg.css 載入。需連線至 Adobe Fonts；無法載入時以 Georgia／serif 備援。

桌機／筆電與平板直向使用左右分欄；手機窄螢幕，以及寬度不超過 1400px 的觸控平板橫向，使用圖片與文字上下交替。每組圖片每 3 秒自動切換，漸變歷時 1 秒；無圖片切換圓點或影片暫停按鈕。若裝置啟用減少動態效果，則停用自動切換。

所有資源使用相對路徑，支援 GitHub Pages 的 repository 子目錄網址。

Spray 圖片每次出場從 100% 緩慢放大至 115%，以 4 秒涵蓋出場與淡出階段，避免淡出時縮放跳回原尺寸。
