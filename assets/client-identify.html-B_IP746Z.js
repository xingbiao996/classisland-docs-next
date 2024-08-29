import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as e,b as t,d as s,w as i,e as d,r as o,o as r}from"./app-YkZ5Jls-.js";const c={},p=e("h1",{id:"客户端识别",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#客户端识别"},[e("span",null,"客户端识别")])],-1),m=e("p",null,"您可以为每个 ClassIsland 实例自定义一个 id，来标识每个实例。您可以将自定义 id 设置为班级名、教室编号等易于识别的名称。",-1),h=e("p",null,"除了自定义的 id 外，ClassIsland 还会生成一段唯一客户端 id（CUID），来标识每个实例。",-1),u=d(`<p><a id="url-template"></a></p><h2 id="url-模板" tabindex="-1"><a class="header-anchor" href="#url-模板"><span>url 模板</span></a></h2><p>在调用集控清单中的 url 时，ClassIsland 可以根据客户端的信息，将对应信息填入 url 模板中，实现为每个 ClassIsland 实例分配特定的对象。</p><p>ClassIsland 支持以下模板：</p><table><thead><tr><th>模板</th><th>说明</th></tr></thead><tbody><tr><td><code>{id}</code></td><td>客户端的 ID</td></tr><tr><td><code>{cuid}</code></td><td>客户端的唯一客户端 ID</td></tr></tbody></table><p>在发起请求时，url 中的模板会直接被替换为对应信息，例如：</p><div class="language-plaintext line-numbers-mode" data-highlighter="shiki" data-ext="plaintext" data-title="plaintext" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>https://example.com/client/{id}/policy.json -&gt; https://example.com/client/TEST_ID/policy.json</span></span>
<span class="line"><span>https://example.com/client/{cuid}/policy.json -&gt; https://example.com/client/9f5ab079-83c7-aeba-db2f-db39a0009845/policy.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function g(_,y){const a=o("RouteLink");return r(),n("div",null,[p,m,h,e("p",null,[t("这些信息可以在访问集控配置数据时，加入到 url 中。详细请见"),s(a,{to:"/management/configure.html#url-template"},{default:i(()=>[t("url 模板")]),_:1}),t("。")]),u])}const C=l(c,[["render",g],["__file","client-identify.html.vue"]]),I=JSON.parse('{"path":"/management/client-identify.html","title":"客户端识别","lang":"zh-CN","frontmatter":{"description":"客户端识别 您可以为每个 ClassIsland 实例自定义一个 id，来标识每个实例。您可以将自定义 id 设置为班级名、教室编号等易于识别的名称。 除了自定义的 id 外，ClassIsland 还会生成一段唯一客户端 id（CUID），来标识每个实例。 这些信息可以在访问集控配置数据时，加入到 url 中。详细请见。 url 模板 在调用集控清单...","head":[["meta",{"property":"og:url","content":"https://docs.classisland.tech/management/client-identify.html"}],["meta",{"property":"og:site_name","content":"ClassIsland文档"}],["meta",{"property":"og:title","content":"客户端识别"}],["meta",{"property":"og:description","content":"客户端识别 您可以为每个 ClassIsland 实例自定义一个 id，来标识每个实例。您可以将自定义 id 设置为班级名、教室编号等易于识别的名称。 除了自定义的 id 外，ClassIsland 还会生成一段唯一客户端 id（CUID），来标识每个实例。 这些信息可以在访问集控配置数据时，加入到 url 中。详细请见。 url 模板 在调用集控清单..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-29T07:25:46.000Z"}],["meta",{"property":"article:author","content":"ClassIsland社区"}],["meta",{"property":"article:modified_time","content":"2024-08-29T07:25:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"客户端识别\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-29T07:25:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ClassIsland社区\\",\\"url\\":\\"https://classisland.tech\\"}]}"]]},"headers":[{"level":2,"title":"url 模板","slug":"url-模板","link":"#url-模板","children":[]}],"git":{"createdTime":1724916346000,"updatedTime":1724916346000,"contributors":[{"name":"hello8693","email":"1320998105@qq.com","commits":1}]},"readingTime":{"minutes":0.79,"words":238},"filePathRelative":"management/client-identify.md","localizedDate":"2024年8月29日","autoDesc":true}');export{C as comp,I as data};
