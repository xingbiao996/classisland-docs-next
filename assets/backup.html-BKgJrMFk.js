import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a as e,b as t,d as o,w as c,e as a,r as p,o as i}from"./app-YkZ5Jls-.js";const r="/assets/1724066299317-DwJGm8l9.png",d={},h=a('<h1 id="应用数据备份" tabindex="-1"><a class="header-anchor" href="#应用数据备份"><span>应用数据备份</span></a></h1><p>本文章主要描述 ClassIsland 内置的备份功能，以及如何手动备份和恢复应用数据。</p><figure><img src="'+r+'" alt="1724066299317" tabindex="0" loading="lazy"><figcaption>1724066299317</figcaption></figure><p>ClassIsland 内置了应用数据备份功能，可以在<a href="classisland://app/settings/storage" target="_blank" rel="noopener noreferrer">【应用设置】-&gt;【存储】</a>中查看和调整相关设置。</p><p>进行备份时，会将以下文件和文件夹复制到<code>./Backups/Backup_&lt;时间&gt;</code>文件夹下：</p>',5),u=e("li",null,[e("code",null,"Settings.json"),t(" - 应用设置")],-1),m=e("li",null,[e("code",null,"Config/"),t(" - 应用其它配置")],-1),_=e("code",null,"Profiles/",-1),g=a('<div class="hint-container note"><p class="hint-container-title">注</p><p>为了您的数据安全，在使用应用内置的备份功能的同时，也建议您手动将相关配置文件备份到其它地方。</p></div><h2 id="自动备份" tabindex="-1"><a class="header-anchor" href="#自动备份"><span>自动备份</span></a></h2><p>ClassIsland 默认会每隔 7 天进行一次自动备份，并将备份文件保存到<code>./Backups/Auto_Backup_&lt;时间&gt;</code>文件夹下。默认仅保留最近 16 次自动备份，手动备份和更新备份产生的备份文件不受影响。</p><h2 id="更新备份" tabindex="-1"><a class="header-anchor" href="#更新备份"><span>更新备份</span></a></h2><p>ClassIsland 在版本更新时，会自动把应用数据被分到<code>./Backups/Update_Backup_&lt;应用版本&gt;_&lt;时间&gt;</code>文件夹下。</p><h2 id="恢复备份" tabindex="-1"><a class="header-anchor" href="#恢复备份"><span>恢复备份</span></a></h2><p>如果出现配置文件损坏/丢失等情况，您可以在<strong>应用退出的情况下</strong>，将备份的数据文件覆盖到应用目录下恢复数据。</p>',7);function f(k,C){const s=p("RouteLink");return i(),l("div",null,[h,e("ul",null,[u,m,e("li",null,[_,t(" - "),o(s,{to:"/app/profile/profile-settings-page.html"},{default:c(()=>[t("档案")]),_:1}),t("信息（包括课表、时间表、科目等）")])]),g])}const B=n(d,[["render",f],["__file","backup.html.vue"]]),x=JSON.parse('{"path":"/app/backup.html","title":"应用数据备份","lang":"zh-CN","frontmatter":{"description":"应用数据备份 本文章主要描述 ClassIsland 内置的备份功能，以及如何手动备份和恢复应用数据。 17240662993171724066299317 ClassIsland 内置了应用数据备份功能，可以在【应用设置】->【存储】中查看和调整相关设置。 进行备份时，会将以下文件和文件夹复制到./Backups/Backup_<时间>文件夹下： S...","head":[["meta",{"property":"og:url","content":"https://docs.classisland.tech/app/backup.html"}],["meta",{"property":"og:site_name","content":"ClassIsland文档"}],["meta",{"property":"og:title","content":"应用数据备份"}],["meta",{"property":"og:description","content":"应用数据备份 本文章主要描述 ClassIsland 内置的备份功能，以及如何手动备份和恢复应用数据。 17240662993171724066299317 ClassIsland 内置了应用数据备份功能，可以在【应用设置】->【存储】中查看和调整相关设置。 进行备份时，会将以下文件和文件夹复制到./Backups/Backup_<时间>文件夹下： S..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-29T07:25:46.000Z"}],["meta",{"property":"article:author","content":"ClassIsland社区"}],["meta",{"property":"article:modified_time","content":"2024-08-29T07:25:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"应用数据备份\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-29T07:25:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ClassIsland社区\\",\\"url\\":\\"https://classisland.tech\\"}]}"]]},"headers":[{"level":2,"title":"自动备份","slug":"自动备份","link":"#自动备份","children":[]},{"level":2,"title":"更新备份","slug":"更新备份","link":"#更新备份","children":[]},{"level":2,"title":"恢复备份","slug":"恢复备份","link":"#恢复备份","children":[]}],"git":{"createdTime":1724916346000,"updatedTime":1724916346000,"contributors":[{"name":"hello8693","email":"1320998105@qq.com","commits":1}]},"readingTime":{"minutes":1.08,"words":325},"filePathRelative":"app/backup.md","localizedDate":"2024年8月29日","autoDesc":true}');export{B as comp,x as data};
