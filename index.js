import{a as m,i as a,S as g}from"./assets/vendor-qbZl2uZI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h="https://pixabay.com/api/",p="54654074-13d582212f11236cf0611e9cc";function y(i){return m.get(h,{params:{key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(function(t){return t.data.hits.length||a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t.data}).catch(function(t){console.log(t),a.error({message:"API error.",position:"topRight"})})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");function v(i){const t=i.map(({webformatURL:n,largeImageURL:e,tags:r,likes:s,views:d,comments:u,downloads:f})=>`<li class="gallery-item">
            <a class="gallery-link" href="${e}">
                <img
                    class="gallery-image"
                    src="${n}"
                    alt="${r}"
                />
                <ul class="card-info">
                    <li>
                        <div>Likes</div>
                        <div>${s}</div>
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
        </li>`).join("");l.insertAdjacentHTML("beforeend",t),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function L(){l.innerHTML=""}function P(){c.classList.remove("hidden")}function S(){c.classList.add("hidden")}const b=document.querySelector(".form");b.addEventListener("submit",i=>{i.preventDefault();const t=i.target.elements["search-text"].value;if(!t.trim().length){a.error({message:"The field can't be empty!",position:"topRight"});return}L(),P(),y(t).then(o=>{if(!o.hits.length){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(o.hits)}).catch(o=>{console.log(o),a.error({message:"API error.",position:"topRight"})}).finally(()=>{S(),i.target.reset()})});
//# sourceMappingURL=index.js.map
