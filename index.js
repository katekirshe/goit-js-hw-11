import{a as m,i as s,S as g}from"./assets/vendor-qbZl2uZI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const h="https://pixabay.com/api/",p="54654074-13d582212f11236cf0611e9cc";function y(i){return m.get(h,{params:{key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(function(t){if(!t.data.hits.length){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}return t.data}).catch(function(t){console.log(t),s.error({message:"API error.",position:"topRight"})})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");function v(i){const t=i.map(({webformatURL:a,largeImageURL:e,tags:r,likes:o,views:d,comments:u,downloads:f})=>`<li class="gallery-item">
            <a class="gallery-link" href="${e}">
                <img
                    class="gallery-image"
                    src="${a}"
                    alt="${r}"
                />
                <ul class="card-info">
                    <li>
                        <div>Likes</div>
                        <div>${o}</div>
                    </li>
                    <li> <div>Views</div>
                        <div>${d}</div>
                    </li>
                    <li> <div>Comments</div>
                        <div>${u}</div>
                    </li>
                    <li> <div>Downloads</div>
                        <div>${f}</div>
                    </li>
                </ul>
            </a>
        </li>`).join("");l.insertAdjacentHTML("beforeend",t),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function L(){l.innerHTML=""}function b(){c.classList.remove("hidden")}function S(){c.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",i=>{i.preventDefault();const t=i.target.children[0].children[0].value;if(!t.trim().length){s.error({message:"The field can't be empty!",position:"topRight"});return}L(),b(),y(t).then(n=>{v(n.hits)}).finally(()=>{S(),i.target.reset()})});
//# sourceMappingURL=index.js.map
