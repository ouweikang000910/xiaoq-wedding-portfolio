# 小区 — 婚庆道具设计师

黑红风格个人作品集，适配手机与电脑，包含作品筛选、详情弹窗与浏览器本地资料编辑。

## 项目结构

- `site/`：可直接托管的 HTML、CSS、JavaScript 和图片。
- `.github/workflows/pages.yml`：提交到 `main` 后发布网站。
- `scripts/set-pages-url.mjs`：部署时写入 GitHub Pages 的正式地址和分享图片地址，支持仓库子目录或自定义域名。

## GitHub Pages 部署

将项目上传到仓库后，在仓库的 Settings → Pages 中把发布来源设置为 GitHub Actions，然后运行 Publish portfolio to GitHub Pages 工作流。

部署采用 GitHub 官方 Pages Actions，配置参考：
https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

此目录准备完成不代表远端仓库已创建或网站已发布；应以 GitHub 工作流成功及返回的网站地址为准。

## 更新网站

编辑 `site/index.html` 的初始个人信息、项目标题和链接；编辑 `site/app.js` 的项目说明；替换 `site/assets/` 内的作品图。页面内「编辑资料」只保存到当前浏览器，不会更新仓库或所有访客看到的默认内容。

姓名「小区」与职业「婚庆道具设计师」来自用户。作品图为 AI 概念示例，非实际落地案例。真实作品、邮箱与所在地可以后续补充。

## 素材

图片由内置 imagegen 工具生成并压缩为 WebP。字体使用 Google Fonts；字体服务不可用时自动使用系统字体。
