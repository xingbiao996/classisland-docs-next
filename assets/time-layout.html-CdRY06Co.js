import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as a,e as i}from"./app-YkZ5Jls-.js";const n="/assets/1690343735712-WYtZ3P0l.png",s="/assets/1690343828036-CLTyKxRe.png",p="/assets/1704962385766-fAFkcTu0.png",o="/assets/1704962437551-B6Pjhtsi.png",r="/assets/1707463956987-Dvm1hHFo.png",l="/assets/1690344105820-BLzFb_y_.png",c="/assets/1707455170854-CXj-k4NB.png",d={},h=i('<h1 id="时间表" tabindex="-1"><a class="header-anchor" href="#时间表"><span>时间表</span></a></h1><p>时间表规定了在一天中各个时间点，如上课、课间休息等。课表将根据此时间表显示对应的课程。</p><p>当使用了该时间表的课表启用时，会在主界面上显示所有的时间点，并根据系统时间展开显示当前的时间点。</p><figure><img src="'+n+'" alt="1690343735712" tabindex="0" loading="lazy"><figcaption>1690343735712</figcaption></figure><p>时间点具有以下类型：</p><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>上课</td><td>代表上课时间。此类型的时间点会在对应时间表的课表中显示，可以编辑在此时间点上的授课科目。</td></tr><tr><td>课间休息</td><td>代表下课时间。此类型时间点在折叠时会完全隐藏，不在主界面上显示。</td></tr><tr><td>分割线</td><td>此时间点仅会在主界面上显示一条分割线，用于在视觉上将不同时段的课程分割开来。</td></tr></tbody></table><p>此外，对于<code>上课</code>类型的时间点，可以设置是否默认隐藏。若启用默认隐藏，那么仅有处于此时间点时，此时间点才会显示。</p><h2 id="编辑时间表" tabindex="-1"><a class="header-anchor" href="#编辑时间表"><span>编辑时间表</span></a></h2><div class="hint-container note"><p class="hint-container-title">注</p><p><strong>你无法编辑已启用的课表使用的活动的时间表。</strong></p></div><figure><img src="'+s+'" alt="1690343828036" tabindex="0" loading="lazy"><figcaption>1690343828036</figcaption></figure><p>我们来了解如何编辑时间表。</p><p>在界面左侧可以选择要编辑的时间表，在中间可以编辑时间表。时间表编辑器具有列表和时间轴两种视图模式，您可以点击下方的按钮来进行切换。建议您使用时间轴视图进行编辑。</p><h3 id="新建时间表" tabindex="-1"><a class="header-anchor" href="#新建时间表"><span>新建时间表</span></a></h3><p>点击【新建时间表】可以新建一个时间表。您也可以点击界面右上角的【从表格导入…】按钮来直接从表格导入时间表。</p><figure><img src="'+p+'" alt="1704962385766" tabindex="0" loading="lazy"><figcaption>1704962385766</figcaption></figure><h3 id="添加时间点" tabindex="-1"><a class="header-anchor" href="#添加时间点"><span>添加时间点</span></a></h3><p>点击工具栏中添加时间点的按钮可以直接添加对应类型的时间点。默认情况下，添加的时间点的开始和结束时间会被设定为当前时间。如果选中了时间点，那么添加的时间点会被插入到选中的时间点后方。</p><figure><img src="'+o+'" alt="1704962437551" tabindex="0" loading="lazy"><figcaption>1704962437551</figcaption></figure><p>新插入的上课类型时间点默认长 40 分钟，课间休息时间点默认长 10 分钟。您可以在应用设置中修改这个默认值。</p><figure><img src="'+r+'" alt="1707463956987" tabindex="0" loading="lazy"><figcaption>1707463956987</figcaption></figure><h3 id="编辑时间点" tabindex="-1"><a class="header-anchor" href="#编辑时间点"><span>编辑时间点</span></a></h3><p>选中的时间点详细信息会显示在视图右侧，您可以在此处修改选中的时间点的详细信息。</p><p>在使用时间轴视图时，您可以在选中时间点后，直接拖动开始和结束处的把柄来修改对应的时间。您可以点击右下角处的按钮来缩放视图。</p><p>每个上课类型的时间点，在对应的课表中对应一节课程，可以设置上课的科目。在主界面上，默认会显示所有上课类型的时间点，而课间休息类型的时间点只会在处于该时间点时才会显示。您可以为这个时间点设置该时间点的默认科目，也可以一键覆盖所有课表中对应时间点的科目。</p><p>此外，你可以使上课类型的时间点默认隐藏，这样就像课间休息类型的时间点一样，只有在处于该时间点时才会显示。</p><p>除了添加上课类型时间点，您还需要在每个上课类型时间点间添加课间休息类型的时间点，以告诉软件这段时间是课间休息。</p><p>按照学校实际安排添加好时间点后，就完成了时间表编辑。</p><h3 id="查看时间表信息" tabindex="-1"><a class="header-anchor" href="#查看时间表信息"><span>查看时间表信息</span></a></h3><p>您可以通过【时间表信息】按钮查看并编辑时间表的基本信息，如名称等（如下图）。</p><figure><img src="'+l+'" alt="1690344105820" tabindex="0" loading="lazy"><figcaption>1690344105820</figcaption></figure><h3 id="删除时间表" tabindex="-1"><a class="header-anchor" href="#删除时间表"><span>删除时间表</span></a></h3><p>点击工具栏中【删除时间表】按钮即可删除时间表。删除时间表时，时间表必须没有被任何课表使用，否则将无法删除。</p><figure><img src="'+c+'" alt="1707455170854" tabindex="0" loading="lazy"><figcaption>1707455170854</figcaption></figure>',33),g=[h];function m(f,u){return a(),e("div",null,g)}const b=t(d,[["render",m],["__file","time-layout.html.vue"]]),x=JSON.parse('{"path":"/app/profile/time-layout.html","title":"时间表","lang":"zh-CN","frontmatter":{"description":"时间表 时间表规定了在一天中各个时间点，如上课、课间休息等。课表将根据此时间表显示对应的课程。 当使用了该时间表的课表启用时，会在主界面上显示所有的时间点，并根据系统时间展开显示当前的时间点。 16903437357121690343735712 时间点具有以下类型： 此外，对于上课类型的时间点，可以设置是否默认隐藏。若启用默认隐藏，那么仅有处于此时间...","head":[["meta",{"property":"og:url","content":"https://docs.classisland.tech/app/profile/time-layout.html"}],["meta",{"property":"og:site_name","content":"ClassIsland文档"}],["meta",{"property":"og:title","content":"时间表"}],["meta",{"property":"og:description","content":"时间表 时间表规定了在一天中各个时间点，如上课、课间休息等。课表将根据此时间表显示对应的课程。 当使用了该时间表的课表启用时，会在主界面上显示所有的时间点，并根据系统时间展开显示当前的时间点。 16903437357121690343735712 时间点具有以下类型： 此外，对于上课类型的时间点，可以设置是否默认隐藏。若启用默认隐藏，那么仅有处于此时间..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-29T07:25:46.000Z"}],["meta",{"property":"article:author","content":"ClassIsland社区"}],["meta",{"property":"article:modified_time","content":"2024-08-29T07:25:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"时间表\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-29T07:25:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ClassIsland社区\\",\\"url\\":\\"https://classisland.tech\\"}]}"]]},"headers":[{"level":2,"title":"编辑时间表","slug":"编辑时间表","link":"#编辑时间表","children":[{"level":3,"title":"新建时间表","slug":"新建时间表","link":"#新建时间表","children":[]},{"level":3,"title":"添加时间点","slug":"添加时间点","link":"#添加时间点","children":[]},{"level":3,"title":"编辑时间点","slug":"编辑时间点","link":"#编辑时间点","children":[]},{"level":3,"title":"查看时间表信息","slug":"查看时间表信息","link":"#查看时间表信息","children":[]},{"level":3,"title":"删除时间表","slug":"删除时间表","link":"#删除时间表","children":[]}]}],"git":{"createdTime":1724916346000,"updatedTime":1724916346000,"contributors":[{"name":"hello8693","email":"1320998105@qq.com","commits":1}]},"readingTime":{"minutes":3.36,"words":1008},"filePathRelative":"app/profile/time-layout.md","localizedDate":"2024年8月29日","autoDesc":true}');export{b as comp,x as data};
