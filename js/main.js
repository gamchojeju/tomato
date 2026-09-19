const galleryImages = [
  "img_4839.jpg","img_4841.jpg","img_4836.jpg","img_4823.jpg","img_4828.jpg","img_4822.jpg",
  "img_4835.jpg","img_4842.jpg","img_4843.jpg","img_4844.jpg","img_4838.jpg","img_4840.jpg",
  "img_4827.jpg","img_4830.jpg","img_4832.jpg","img_4833.jpg","img_4834.jpg","img_4837.jpg",
  "img_4824.jpg","img_4825.jpg","img_4826.jpg","img_4829.jpg"
];


const galleryCaptions = {
  ko:["하우스의 오늘","매일의 손길","익어가는 토마토","수확의 순간","붉게 익은 송이","열매 가까이","하우스의 길","오늘의 작업","초록이 자라는 곳","햇빛과 잎","하우스의 풍경","함께 돌보는 시간","자라는 열매","풍성한 가지","초록에서 빨강으로","수확을 기다리며","열매의 기록","농장 안쪽 풍경","선별 · 포장","출고 준비","보내는 날","하우스의 기록"],
  zh:["温室的一天","每天的照料","成熟中的番茄","收获时刻","成熟的一串","近看果实","温室的长路","今天的工作","生长中的绿色","阳光与叶片","温室风景","一起照料的时间","正在生长的果实","丰盛的枝条","从绿到红","等待收获","果实记录","温室深处","筛选 · 包装","出货准备","寄出的日子","温室记录"],
  en:["Today in the greenhouse","Daily care","Tomatoes ripening","Harvest moment","A ripe cluster","Close to the fruit","The greenhouse aisle","A day of work","Where green things grow","Light and leaves","Greenhouse view","Time spent caring","Growing fruit","A full branch","From green to red","Waiting for harvest","Fruit in focus","Inside the greenhouse","Sort · Pack","Ready to ship","Shipping day","Farm record"],
  ja:["ハウスの今日","毎日の手入れ","熟していくトマト","収穫の瞬間","熟した一房","果実を近くから","ハウスの道","今日の仕事","育つ緑","光と葉","ハウスの風景","一緒に手をかける時間","育つ実","たわわな枝","緑から赤へ","収穫を待つ実","果実の記録","ハウスの奥","選別 · 梱包","出荷準備","発送の日","農園の記録"]
};

const translations = {
  ko:{
    "nav.about":"ABOUT","nav.farm":"FARM","nav.tomato":"TOMATO","nav.story":"STORY","nav.gallery":"GALLERY","nav.shop":"SHOP",
    "about.intro":"사진 한 장에 다 담기지 않는 시간. 매일 하우스를 살피는 일에서 농사가 이어집니다.",
    "harvest.title":"익은 만큼 따고,<br><em>받으실 곳까지 준비합니다.</em>","harvest.copy":"토마토를 수확한 뒤 선별하고, 상자에 담아 보내기까지. 농장에서 시작된 하루가 식탁까지 이어집니다.","harvest.cap1":"선별 · 포장","harvest.cap2":"출고 준비","harvest.cap3":"농장에서 보내는 하루",
    "hero.eyebrow":"GAHOE-RI · NONGSAN / BUYEO",
    "hero.title":"30년 동안,<br><em>같은 자리에서</em><br>토마토를 키웠습니다.",
    "hero.copy":"하우스 안의 작은 변화를 살피고, 익은 만큼 수확합니다.<br>똘똘이의 토마토를 만나보세요.",
    "hero.cta1":"토마토 만나기","hero.cta2":"농장 이야기 보기 →","hero.note":"TIME · CARE · HARVEST",
    "lead.1.title":"30+ YEARS","lead.1.copy":"한 자리에서 이어온 농사의 시간",
    "lead.2.title":"GAHOE-RI","lead.2.copy":"논산·부여 가회리 하우스",
    "lead.3.title":"FRESH PICK","lead.3.copy":"익은 만큼 수확하고 정성껏 보냅니다",
    "about.title":"오래 농사 지은 사람의<br><em>꾸준한 하루</em>","about.badge":"YEARS<br>OF FARMING","about.badge2":"시간이 쌓인 농사",
    "about.lead":"농사는 하루아침에 만들어지지 않습니다.",
    "about.copy":"30년 넘게 밭과 하우스를 오가며 쌓은 경험. 계절마다 달라지는 작물의 상태를 살피고, 매일 같은 마음으로 돌봅니다. 올해도 좋은 토마토를 수확하기 위해 하루를 시작합니다.",
    "about.quote":"“매일 들여다보는 것부터 농사는 시작됩니다.”",
    "farm.title":"가회리 하우스에서<br><em>토마토가 자랍니다.</em>","farm.intro":"심고, 살피고, 수확하고, 포장하는 모든 과정에 농부의 손길이 있습니다.",
    "process.1.title":"관리","process.1.copy":"하우스의 환경과 작물의 상태를 매일 살핍니다.",
    "process.2.title":"재배","process.2.copy":"토마토가 자라는 흐름에 맞춰 꾸준히 돌봅니다.",
    "process.3.title":"수확 · 선별","process.3.copy":"잘 익은 열매를 수확하고 상태를 살핍니다.",
    "process.4.title":"포장 · 배송","process.4.copy":"받는 분께 잘 도착할 수 있도록 정성껏 포장합니다.",
    "tomato.title":"하우스에서 익어가는<br><em>한 송이의 시간</em>","tomato.copy":"초록 열매가 맺히고, 색이 차오르고, 수확할 때가 옵니다. 저마다 다른 속도로 익어가는 열매를 살피며 수확합니다.",
    "tomato.cta":"토마토 사진 보기 →",
    "story.title":"좋은 토마토는<br><em>좋은 하루들이 모여</em><br>만들어집니다.",
    "story.copy":"아주 특별한 비법보다 중요한 것은 매일의 관찰과 손길이라고 믿습니다. 오늘도 하우스에 들어가 토마토를 살피는 것, 그 꾸준함에서 이야기는 시작됩니다.",
    "gallery.title":"지금까지의<br><em>농장 기록</em>","gallery.intro":"현재의 사진으로 먼저 채우고, 앞으로의 계절과 수확 기록을 계속 더해갑니다.",
    "shop.title":"똘똘이 토마토를<br><em>집에서 만나보세요.</em>","shop.copy":"판매 링크를 연결해두는 공간입니다. 실제 주소가 준비되면 버튼에 바로 연결하면 됩니다.",
    "shop.coupang":"쿠팡에서 만나기 ↗","shop.naver":"네이버 스마트스토어 ↗","shop.placeholder":"링크 준비 중","shop.order":"주문하기 ↗",
    "footer.tag":"시간이 만든 맛, 정성으로 키운 방울토마토","footer.contact":"CONTACT · 준비 중"
  },
  zh:{
    "nav.about":"ABOUT","nav.farm":"FARM","nav.tomato":"TOMATO","nav.story":"STORY","nav.gallery":"GALLERY","nav.shop":"SHOP",
    "about.intro":"一张照片装不下全部的时间。每天走进温室、仔细观察，农事就这样延续。",
    "harvest.title":"成熟多少，就采摘多少，<br><em>再准备送到您手中。</em>","harvest.copy":"采摘、筛选、装箱，再送出农场。一天的农事就这样延续到餐桌。","harvest.cap1":"筛选 · 包装","harvest.cap2":"出货准备","harvest.cap3":"从农场寄出的日子",
    "hero.eyebrow":"GAHOE-RI · NONGSAN / BUYEO","hero.title":"30年来，<br><em>在同一个地方</em><br>种植小番茄。",
    "hero.copy":"每天观察温室里的细微变化，在成熟的时候采摘。<br>欢迎认识 Ttolttoli 小番茄。","hero.cta1":"认识小番茄","hero.cta2":"农场故事 →","hero.note":"TIME · CARE · HARVEST",
    "lead.1.title":"30+ YEARS","lead.1.copy":"在同一片土地上延续的时间","lead.2.title":"GAHOE-RI","lead.2.copy":"论山·扶余 加会里温室","lead.3.title":"FRESH PICK","lead.3.copy":"成熟多少，就采摘多少",
    "about.title":"一位长期务农的人，<br><em>日复一日的坚持</em>","about.badge":"YEARS<br>OF FARMING","about.badge2":"时间积累的农事",
    "about.lead":"农业从来不是一朝一夕完成的。","about.copy":"三十多年往返田地与温室积累的经验，让我们学会观察季节与作物每天的变化。今年也从照料每一株番茄开始。",
    "about.quote":"“从每天仔细看一眼开始，农事就开始了。”",
    "farm.title":"在加会里温室，<br><em>番茄慢慢长大。</em>","farm.intro":"从照料、栽培到采摘、包装，每一步都有农人的手。",
    "process.1.title":"照料","process.1.copy":"每天观察温室环境与作物状态。","process.2.title":"栽培","process.2.copy":"顺着番茄生长的节奏持续照料。","process.3.title":"采摘 · 筛选","process.3.copy":"采摘成熟果实并仔细检查。","process.4.title":"包装 · 配送","process.4.copy":"认真包装，让它平安抵达。",
    "tomato.title":"在温室里成熟的<br><em>一串番茄的时间</em>","tomato.copy":"从结出青果到颜色慢慢变浓，每一颗都有自己的节奏。我们观察它们，在适合的时候采摘。","tomato.cta":"查看番茄照片 →",
    "story.title":"好的番茄，<br>来自<em>一个个认真度过的日子</em>。","story.copy":"比特别的秘诀更重要的，是每天的观察与照料。今天走进温室，看一看番茄，这份坚持就是故事的开始。",
    "gallery.title":"到目前为止的<br><em>农场记录</em>","gallery.intro":"先用现在的照片记录，也会随着季节与收获不断增加新的记录。",
    "shop.title":"把 Ttolttoli 小番茄<br><em>带回家。</em>","shop.copy":"这里预留购买链接。准备好真实地址后即可直接连接。","shop.coupang":"在 Coupang 认识我们 ↗","shop.naver":"Naver Smart Store ↗","shop.placeholder":"链接准备中","shop.order":"立即订购 ↗",
    "footer.tag":"时间酿成的味道，用心种出的樱桃番茄","footer.contact":"CONTACT · 准备中"
  },
  en:{
    "nav.about":"ABOUT","nav.farm":"FARM","nav.tomato":"TOMATO","nav.story":"STORY","nav.gallery":"GALLERY","nav.shop":"SHOP",
    "about.intro":"A photograph cannot hold all that time. Farming continues in the daily habit of walking into the greenhouse and looking closely.",
    "harvest.title":"Harvest what is ready,<br><em>then prepare it for the journey.</em>","harvest.copy":"From picking and sorting to packing each box, the day that begins on the farm continues all the way to your table.","harvest.cap1":"Sort · Pack","harvest.cap2":"Ready to ship","harvest.cap3":"A day at the farm",
    "hero.eyebrow":"GAHOE-RI · NONGSAN / BUYEO","hero.title":"For 30 years,<br><em>in the same place,</em><br>we have grown tomatoes.",
    "hero.copy":"We watch the small changes in the greenhouse and harvest as they ripen.<br>Meet Ttolttoli tomatoes.","hero.cta1":"Meet the Tomatoes","hero.cta2":"Our Farm Story →","hero.note":"TIME · CARE · HARVEST",
    "lead.1.title":"30+ YEARS","lead.1.copy":"A lifetime of farming in one place","lead.2.title":"GAHOE-RI","lead.2.copy":"A greenhouse in Gahoe-ri, Nonsan / Buyeo","lead.3.title":"FRESH PICK","lead.3.copy":"Harvested as they ripen, carefully sent",
    "about.title":"A farmer's long days,<br><em>built on consistency</em>","about.badge":"YEARS<br>OF FARMING","about.badge2":"Farming shaped by time",
    "about.lead":"Farming is never made in a single day.","about.copy":"More than 30 years of moving between fields and greenhouses have taught us to notice seasonal changes and the condition of each crop. Another good harvest begins with the same daily care.",
    "about.quote":"“Farming starts with looking closely, every day.”",
    "farm.title":"In the Gahoe-ri greenhouse,<br><em>the tomatoes grow.</em>","farm.intro":"From care and cultivation to harvest and packing, every step carries a farmer's touch.",
    "process.1.title":"CARE","process.1.copy":"We check the greenhouse and crops every day.","process.2.title":"GROW","process.2.copy":"We follow the rhythm of the plants with steady care.","process.3.title":"HARVEST · SORT","process.3.copy":"We pick ripe fruit and check each harvest.","process.4.title":"PACK · SEND","process.4.copy":"We pack each order carefully for its journey.",
    "tomato.title":"A tomato ripening in the greenhouse,<br><em>one moment at a time</em>","tomato.copy":"Green fruit appears, color deepens, and the harvest day arrives. We watch each tomato and pick it at its own pace.","tomato.cta":"See the Tomato Gallery →",
    "story.title":"Good tomatoes are made from<br><em>good days, gathered together.</em>","story.copy":"More than a special secret, we believe in daily observation and care. Walking into the greenhouse and looking closely—that steady habit is where the story begins.",
    "gallery.title":"Records from the<br><em>farm so far</em>","gallery.intro":"We begin with today's photographs and keep adding new seasons and harvest moments.",
    "shop.title":"Bring Ttolttoli tomatoes<br><em>home.</em>","shop.copy":"A space reserved for purchase links. Add the real store addresses when they are ready.","shop.coupang":"Find us on Coupang ↗","shop.naver":"Naver Smart Store ↗","shop.placeholder":"Link coming soon","shop.order":"Order Now ↗",
    "footer.tag":"A taste shaped by time, tomatoes grown with care","footer.contact":"CONTACT · Coming soon"
  },
  ja:{
    "nav.about":"ABOUT","nav.farm":"FARM","nav.tomato":"TOMATO","nav.story":"STORY","nav.gallery":"GALLERY","nav.shop":"SHOP",
    "about.intro":"一枚の写真には収まらない時間。毎日ハウスに入り、よく見ることから農は続いていきます。",
    "harvest.title":"熟した分だけ収穫し、<br><em>届くところまで整えます。</em>","harvest.copy":"収穫、選別、箱詰め、発送まで。農園で始まった一日が食卓へとつながります。","harvest.cap1":"選別 · 梱包","harvest.cap2":"出荷準備","harvest.cap3":"農園から送る一日",
    "hero.eyebrow":"GAHOE-RI · NONGSAN / BUYEO","hero.title":"30年、<br><em>同じ場所で</em><br>トマトを育てています。",
    "hero.copy":"ハウスの小さな変化を見つめ、熟した分だけ収穫します。<br>トルトリのトマトをどうぞ。","hero.cta1":"トマトを見る","hero.cta2":"農園の物語 →","hero.note":"TIME · CARE · HARVEST",
    "lead.1.title":"30+ YEARS","lead.1.copy":"ひとつの場所で続いてきた農の時間","lead.2.title":"GAHOE-RI","lead.2.copy":"論山・扶余、加会里のハウス","lead.3.title":"FRESH PICK","lead.3.copy":"熟した分だけ、丁寧に収穫",
    "about.title":"長く農を続けてきた人の<br><em>変わらない一日</em>","about.badge":"YEARS<br>OF FARMING","about.badge2":"時間が育てた農の知恵",
    "about.lead":"農業は、一日ではできあがりません。","about.copy":"30年以上、畑とハウスを行き来して積み重ねてきた経験。季節ごとの変化を見つめ、毎日同じ気持ちで手をかけています。今年も良いトマトの収穫から一日が始まります。",
    "about.quote":"「毎日よく見ることから、農業は始まります。」",
    "farm.title":"加会里のハウスで<br><em>トマトが育ちます。</em>","farm.intro":"手入れ、栽培、収穫、梱包。そのすべてに農家の手があります。",
    "process.1.title":"手入れ","process.1.copy":"ハウスの環境と作物の状態を毎日確認します。","process.2.title":"栽培","process.2.copy":"トマトの成長に合わせて、丁寧に育てます。","process.3.title":"収穫 · 選別","process.3.copy":"熟した実を収穫し、状態を確認します。","process.4.title":"梱包 · 発送","process.4.copy":"無事に届くよう、丁寧に梱包します。",
    "tomato.title":"ハウスで熟していく<br><em>一房の時間</em>","tomato.copy":"青い実がつき、色が深まり、収穫の時を迎えます。それぞれのペースを見ながら収穫しています。","tomato.cta":"トマトの写真を見る →",
    "story.title":"良いトマトは、<br><em>良い一日の積み重ね</em><br>から生まれます。","story.copy":"特別な秘訣より大切なのは、毎日の観察と手入れ。今日もハウスに入り、トマトを見る。その積み重ねから物語が始まります。",
    "gallery.title":"これまでの<br><em>農園の記録</em>","gallery.intro":"今ある写真から始めて、これからの季節と収穫の記録を増やしていきます。",
    "shop.title":"トルトリのトマトを<br><em>ご家庭へ。</em>","shop.copy":"購入リンクをつなぐ場所です。実際のURLが決まったらボタンに設定できます。","shop.coupang":"Coupangで見る ↗","shop.naver":"Naver Smart Store ↗","shop.placeholder":"リンク準備中","shop.order":"注文する ↗",
    "footer.tag":"時間が育てた味、心を込めて育てたミニトマト","footer.contact":"CONTACT · 準備中"
  }
};

const config = {
  coupangUrl: "#",
  naverUrl: "#"
};

function setPhoto(el){
  const path = el.dataset.photo;
  if(!path) return;
  const img = new Image();
  img.onload = () => {
    el.style.backgroundImage = `url("${path}")`;
    el.classList.add("has-photo");
  };
  img.onerror = () => el.classList.add("photo-empty");
  img.src = path;
}

function buildGallery(){
  const grid = document.querySelector("#galleryGrid");
  if(!grid) return;
  grid.innerHTML = "";
  galleryImages.forEach((name, index) => {
    const fig = document.createElement("figure");
    fig.className = "gallery-item";
    const img = document.createElement("img");
    img.src = `images/gallery/${name}`;
    img.alt = `Ttolttoli farm record ${String(index + 1).padStart(2,"0")}`;
    img.loading = index < 6 ? "eager" : "lazy";
    const cap = document.createElement("figcaption");
    const currentLang = document.documentElement.lang === "zh-CN" ? "zh" : (document.documentElement.lang === "ja" ? "ja" : (document.documentElement.lang === "en" ? "en" : "ko"));
    cap.textContent = galleryCaptions[currentLang]?.[index] || `FARM RECORD ${String(index + 1).padStart(2,"0")}`;
    fig.append(img, cap);
    grid.appendChild(fig);
  });
}

function applyLanguage(lang){
  const dict = translations[lang] || translations.ko;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang === "ja" ? "ja" : lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if(dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll(".lang").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  buildGallery();
  try { localStorage.setItem("ttolttoli-lang", lang); } catch(e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-photo]").forEach(setPhoto);
  buildGallery();

  const header = document.querySelector("[data-fixed-header]");
  const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, {passive:true});

  const toggle = document.querySelector(".menu-toggle");
  const siteHeader = document.querySelector(".site-header");
  toggle?.addEventListener("click", () => {
    const open = siteHeader.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".mobile-menu a").forEach(a => a.addEventListener("click", () => {
    siteHeader.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded","false");
  }));

  document.querySelectorAll(".lang").forEach(btn => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  const saved = (() => { try { return localStorage.getItem("ttolttoli-lang"); } catch(e) { return null; }})();
  applyLanguage(saved && translations[saved] ? saved : "ko");

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold:.08});
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  const coupang = document.querySelector("#coupangLink");
  const naver = document.querySelector("#naverLink");
  if(coupang) coupang.href = config.coupangUrl;
  if(naver) naver.href = config.naverUrl;
});
