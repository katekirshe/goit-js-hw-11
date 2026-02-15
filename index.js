import{a as f,i as m,S as g}from"./assets/vendor-qbZl2uZI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="https://pixabay.com/api/",h="54654074-13d582212f11236cf0611e9cc";function p(i){return f.get(y,{params:{key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(function(t){return t.data.hits.length||m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t.data}).catch(function(t){console.log(t)})}const l=document.querySelector(".gallery"),s=document.querySelector(".loader");function v(i){const t=i.map(({webformatURL:n,largeImageURL:e,tags:r,likes:a,views:c,comments:d,downloads:u})=>`<li class="gallery-item">
            <a class="gallery-link" href="${e}">
                <img
                    class="gallery-image"
                    src="${n}"
                    alt="${r}"
                />
                <ul class="card-info">
                    <li>
                        <div>Likes</div>
                        <div>${a}</div>
                    </li>
                    <li> <div>Views</div>
                        <div>${c}</div>
                    </li>
                    <li> <div>Comments</div>
                        <div>${d}</div>
                    </li>
                    <li> <div>Downloads</div>
                        <div>${u}</div>
                    </li>
                </ul>
            </a>
        </li>`).join("");l.insertAdjacentHTML("beforeend",t),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function L(){l.innerHTML=""}function S(){s.classList.remove("hidden")}function b(){s.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",i=>{i.preventDefault();const t=i.target.children[0].children[0].value;if(!t.trim().length)return alert("Поле порожнє!!!");L(),S(),p(t).then(o=>{v(o.hits)}).catch(o=>{console.log(o)}).finally(()=>{b(),i.target.reset()})});
//# sourceMappingURL=index.js.map
