import{a as d,i as u}from"./assets/vendor-Ct1dAQTh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",m="54654074-13d582212f11236cf0611e9cc";function g(i){return d.get(f,{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(function(t){return t.data.hits.length||u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t.data}).catch(function(t){console.log(t)}).finally(function(){})}function y(i){const t=document.querySelector(".gallery");console.log(i);const o=i.map(({webformatURL:n,largeImageURL:e,tags:r,likes:l,views:s,comments:a,downloads:c})=>`<li class="gallery-item">
            <a class="gallery-link" href="${n}">
                <img
                    class="gallery-image"
                    src="${n}"
                    alt="${r}"
                />
                <ul class="card-info">
                    <li>
                        <div>Likes</div>
                        <div>${l}</div>
                    </li>
                    <li> <div>Views</div>
                        <div>${s}</div>
                    </li>
                    <li> <div>Comments</div>
                        <div>${a}</div>
                    </li>
                    <li> <div>Downloads</div>
                        <div>${c}</div>
                    </li>
                </ul>
            </a>
        </li>`).join("");t.insertAdjacentHTML("beforeend",o)}const p=document.querySelector(".form");p.addEventListener("submit",i=>{i.preventDefault();const t=i.target.children[0].children[0].value;if(!t.trim().length)return alert("Поле порожнє!!!");g(t).then(o=>{y(o.hits)})});
//# sourceMappingURL=index.js.map
