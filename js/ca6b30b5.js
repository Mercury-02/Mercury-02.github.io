(()=>{"use strict";new class{constructor(){this.listeners={}}on(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)}off(t,e){const i=this.listeners[t];i&&(this.listeners[t]=i.filter((t=>t!==e)))}emit(t,...e){const i=this.listeners[t];i&&i.length&&i.forEach((t=>{t(...e)}))}};const t=t=>fetch(t).then((t=>{if(!t.ok)throw new Error(`Network response was not ok (Status: ${t.status})`);return t.json()})).catch((t=>{throw t}));class e{constructor(t){this.root=this.getElement(t),this.initializeDOMStructure(),this.setStyles()}getElement(t){const e=document.querySelector(t);if(!e)throw new Error(`Element with selector ${t} not found.`);return e}initializeDOMStructure(){this.now=document.createElement("div"),this.now.className="now";const t=document.createElement("div");this.obsTime=document.createElement("div"),this.obsTime.id="obs-time",this.nowTemp=document.createElement("span"),this.nowTemp.id="now-temp",t.appendChild(this.obsTime),t.appendChild(this.nowTemp);const e=document.createElement("div");this.nowIcon=document.createElement("div"),this.nowIcon.id="now-icon",this.nowWeather=document.createElement("span"),this.nowWeather.id="now-weather",e.appendChild(this.nowIcon),e.appendChild(this.nowWeather),this.now.appendChild(t),this.now.appendChild(e),this.ul=document.createElement("ul"),this.ul.id="weather-7d",this.root.appendChild(this.now),this.root.appendChild(this.ul)}setStyles(){this.root.style.opacity="0",this.root.style.position="absolute",this.root.style.top="10%",this.root.style.left="10%",this.root.style.width="30%",this.root.style.display="flex",this.root.style.flexDirection="column",this.root.style.padding="20px",this.root.style.borderRadius="20px",this.root.style.zIndex="10",this.root.style.minWidth="420px",this.now.style.flex="1",this.now.style.display="flex",this.now.style.justifyContent="space-between",this.now.style.alignItems="center",this.obsTime.style.fontSize="13px",this.nowWeather.style.fontSize="13px",this.nowIcon.style.textAlign="right",this.nowTemp.style.fontSize="42px",this.nowTemp.style.color="var(--color-font)",this.ul.style.display="flex",this.ul.style.margin="0",this.ul.style.padding="20px 0 0 0",this.ul.style.justifyContent="space-between"}updateNowWeather(t){const{icon:e,text:i,temp:n,obsTime:s,windDir:o,humidity:r,pressure:h}=t;this.obsTime.innerHTML=`${new Date(s).toLocaleTimeString()}`,this.nowIcon.innerHTML=`<img style="width:48px;height:48px" src="/img/qweather-color-icon/${e}.png" />`,this.nowWeather.innerHTML=`P:${h} H:${r}`,this.nowTemp.innerHTML=`${n}°`}update7DayForecast(t){const{daily:e}=t;e.forEach((t=>{const{tempMin:e,tempMax:i,iconDay:n,fxDate:s,textDay:o}=t,r=(new Date).getDate()===new Date(s).getDate(),h=`\n        <li style="display: flex; flex-direction: column; align-items: center;">\n          <span style="color: var(--color-font); font-size: 12px; line-height: 1.5;">${new Date(s).getDate()}</span>\n          <img src="/img/qweather-color-icon/${n}.png" style="width: 22px; height: 22px;">\n          <span style="color: var(--color-font); font-size: 12px; line-height: 1.5;">${e}-${i}°</span>\n          ${r?'<span style="margin-top:6px;width:8px;height:8px;border-radius:50%;background: var(--color-primary);"></span>':""}\n        </li>\n      `;this.ul.insertAdjacentHTML("beforeend",h)}))}}(i=>{const{enable:n,cityCode:s,appKey:o}=i;if("true"===n){const i=`https://devapi.qweather.com/v7/weather/7d?location=${s}&key=${o}`,n=`https://devapi.qweather.com/v7/weather/now?location=${s}&key=${o}`;Promise.all([t(n),t(i)]).then((([t,i])=>{if("200"===(null==t?void 0:t.code)&&"200"===(null==i?void 0:i.code)){const n=new e(".weather"),{icon:s,text:o,temp:r,obsTime:h,windDir:l,humidity:a,pressure:c}=t.now;n.updateNowWeather({icon:s,text:o,temp:r,obsTime:h,windDir:l,humidity:a,pressure:c});const p=i.daily.map((t=>({tempMin:t.tempMin,tempMax:t.tempMax,iconDay:t.iconDay,fxDate:t.fxDate,textDay:t.textDay})));n.update7DayForecast({daily:p})}}))}})(window.weather)})();