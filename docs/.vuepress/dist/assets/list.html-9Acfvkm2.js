import{_ as n,o as s,c as a,e}from"./app-ZuSuMYJS.js";const p={},t=e(`<h3 id="自定义导航栏" tabindex="-1"><a class="header-anchor" href="#自定义导航栏" aria-hidden="true">#</a> 自定义导航栏</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * stCustomHeader 导航栏
 * <span class="token keyword">@description</span> 自定义导航栏组件, 原生导航栏不满足功能时替换
 * <span class="token keyword">@author</span> xuqiang 2023-11-08
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">title</span>  页面标题
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">titleColor</span>  标题颜色
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">titleSize</span>  字体大小
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">iconColor</span>  返回
 * <span class="token keyword">@event</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> backPrevPage 点击事件
 */</span>  

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;st-custom-header&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
            <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;标题&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">titleColor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
            <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">titleSize</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">16</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">iconColor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
            <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function l(c,i){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","list.html.vue"]]);export{u as default};
