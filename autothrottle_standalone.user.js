// ==UserScript==
// @name                GeoFS-V3.9_Autothrottle
// @name:vi             GeoFS-V3.9_Ga-Tự-Động
// @name:zh-CN          GeoFS-V3.9_自动油门
// @name:zh-TW          GeoFS-V3.9_自動油門
// @name:ja             GeoFS-V3.9_オートスロットル
// @name:ko             GeoFS-V3.9_자동-조절
// @name:fr             GeoFS-V3.9_Auto-Manette
// @name:de             GeoFS-V3.9_Autothrottle
// @name:es             GeoFS-V3.9_Acelerador-Automático
// @name:pt-BR          GeoFS-V3.9_Acelerador-Automático
// @name:pt-PT          GeoFS-V3.9_Acelerador-Automático
// @name:ru             GeoFS-V3.9_Автомат-Тяги
// @name:ar             GeoFS-V3.9_خنق-تلقائي
// @name:tr             GeoFS-V3.9_Otomatik-Gaz-Kelebeği
// @name:id             GeoFS-V3.9_Pembatasan-Otomatis
// @name:th             GeoFS-V3.9_คันเร่งอัตโนมัติ
// @name:pl             GeoFS-V3.9_Automatyczna-Przepustnica
// @name:nl             GeoFS-V3.9_Autothrottle
// @name:it             GeoFS-V3.9_Automanetta
// @name:sv             GeoFS-V3.9_Autothrottle
// @name:da             GeoFS-V3.9_Autothrottle
// @name:fi             GeoFS-V3.9_Automaattinen-Kaasutin
// @name:nb             GeoFS-V3.9_Autothrottle
// @name:cs             GeoFS-V3.9_Autothrottle
// @name:hu             GeoFS-V3.9_Automatikus-Fojtószelep
// @name:ro             GeoFS-V3.9_Autoaccelerare
// @name:uk             GeoFS-V3.9_Автодросель
// @name:hi             GeoFS-V3.9_ऑटोथ्रोटल
// @name:bn             GeoFS-V3.9_অটোথ্রটল
// @name:fa             GeoFS-V3.9_گاز-خودکار
// @name:he             GeoFS-V3.9_מצערת-אוטומטית
// @name:ms             GeoFS-V3.9_Autothrottle
// @name:fil            GeoFS-V3.9_Autothrottle
// @name:el             GeoFS-V3.9_Αυτόματο-Γκάζι
// @name:hr             GeoFS-V3.9_Automatski-Gas
// @name:sk             GeoFS-V3.9_Autothrottle
// @name:bg             GeoFS-V3.9_Автодросел
// @name:sr             GeoFS-V3.9_Аутотхроттле
// @name:lt             GeoFS-V3.9_Automatinis-Droselis
// @name:lv             GeoFS-V3.9_Autodrosele
// @name:et             GeoFS-V3.9_Automaatne-Drosselklapp
// @name:sl             GeoFS-V3.9_Samodejni-Plin
// @name:ca             GeoFS-V3.9_Autoaccelerador
// @name:af             GeoFS-V3.9_Autothrottle
// @name:sw             GeoFS-V3.9_Autothrottle
// @name:zu             GeoFS-V3.9_I-Autothrottle
// @name:mn             GeoFS-V3.9_Автомат-Тохируулагч
// @name:my             GeoFS-V3.9_Autothrottle
// @name:km             GeoFS-V3.9_ស្វ័យប្រវត្តិ
// @name:lo             GeoFS-V3.9_Autothrottle
// @name:ur             GeoFS-V3.9_آٹو-تھروٹل

// @description         Precision PID-based Autothrottle for GeoFS. Features a compact glassmorphic panel and auto-retard Landing Mode. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:vi      Bộ điều khiển tự động dựa trên PID chính xác cho GeoFS. Có bảng điều khiển thủy tinh nhỏ gọn và Chế độ hạ cánh tự động chậm lại. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:zh-CN   用于 GeoFS 的基于 PID 的精密自动油门。具有紧凑的玻璃变形面板和自动延迟着陆模式。 © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:zh-TW   用於 GeoFS 的基於 PID 的精密自動油門。具有緊湊的玻璃變形面板和自動延遲著陸模式。 © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:ja      GeoFS 用の高精度 PID ベースのオートスロットル。コンパクトなグラスモーフィックパネルと自動遅延着陸モードを備えています。 © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:ko      GeoFS용 정밀 PID 기반 자동 조절. 소형 유리모형 패널과 자동 지연 착륙 모드가 특징입니다. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:fr      Autothrottle de précision basé sur PID pour GeoFS. Comprend un panneau glassmorphic compact et un mode d'atterrissage à retard automatique. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:de      Präzises PID-basiertes Autothrottle für GeoFS. Verfügt über ein kompaktes glasmorphisches Panel und einen Landemodus mit automatischer Verzögerung. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:es      Acelerador automático basado en PID de precisión para GeoFS. Cuenta con un panel glassmorphic compacto y modo de aterrizaje con retardo automático. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:pt-BR   Autothrottle baseado em PID de precisão para GeoFS. Apresenta um painel glassmorphic compacto e modo de pouso com retardo automático. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:pt-PT   Autothrottle baseado em PID de precisão para GeoFS. Apresenta um painel glassmorphic compacto e modo de aterragem com retardamento automático. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:ru      Прецизионный автоматический дроссель на основе ПИД-регулятора для GeoFS. Имеет компактную стекломорфную панель и автоматический режим приземления. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:ar      خنق تلقائي دقيق قائم على PID لـ GeoFS. تتميز بلوحة زجاجية مدمجة ووضع هبوط تلقائي. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:tr      GeoFS için Hassas PID Tabanlı Otomatik Kısma. Kompakt bir cammorfik panele ve otomatik geciktirmeli İniş Moduna sahiptir. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:id      Autothrottle berbasis PID presisi untuk GeoFS. Dilengkapi panel kacamorfik kompak dan Mode Pendaratan dengan perlambatan otomatis. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:th      คันเร่งอัตโนมัติที่ใช้ PID ที่แม่นยำสำหรับ GeoFS โดดเด่นด้วยแผงกลาสมอร์ฟิกขนาดกะทัดรัดและโหมด Landing Mode ที่หน่วงอัตโนมัติ © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:pl      Precyzyjna automatyczna przepustnica oparta na PID dla GeoFS. Posiada kompaktowy panel szklanomorficzny i tryb lądowania z automatycznym opóźnianiem. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:nl      Precisie-PID-gebaseerde Autothrottle voor GeoFS. Beschikt over een compact glasmorf paneel en automatisch vertraagde landingsmodus. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:it      Autothrottle di precisione basato su PID per GeoFS. Dispone di un pannello vetromorfico compatto e modalità di atterraggio con ritardo automatico. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:sv      Precision PID-baserad Autothrottle för GeoFS. Har en kompakt glasmorfisk panel och automatiskt retard landningsläge. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:da      Præcisions PID-baseret Autothrottle til GeoFS. Har et kompakt glasmorfisk panel og auto-retard landingstilstand. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:fi      Tarkka PID-pohjainen automaattinen kaasutin GeoFS:lle. Sisältää kompaktin lasimorfisen paneelin ja automaattisesti hidastavan laskeutumistilan. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:nb      Presisjons PID-basert autothrottle for GeoFS. Har et kompakt glassmorfisk panel og automatisk forsinket landingsmodus. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:cs      Přesný autothrottle založený na PID pro GeoFS. Obsahuje kompaktní sklomorfní panel a automaticky retardovaný režim přistání. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:hu      Precíziós PID-alapú automata fojtószelep a GeoFS-hez. Kompakt üvegmorf panellel és automatikusan késleltetett leszállási móddal rendelkezik. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:ro      Autothrottle de precizie bazat pe PID pentru GeoFS. Dispune de un panou sticlomorf compact și modul de aterizare cu întârziere automată. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:uk      Precision Autothrottle на основі PID для GeoFS. Має компактну скломорфну ​​панель і режим приземлення з автоматичною затримкою. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:hi      जियोएफएस के लिए सटीक पीआईडी-आधारित ऑटोथ्रोटल। एक कॉम्पैक्ट ग्लासमॉर्फिक पैनल और ऑटो-रिटार्ड लैंडिंग मोड की सुविधा है। © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:bn      জিওএফএস-এর জন্য যথার্থ PID-ভিত্তিক অটোথ্রটল। একটি কমপ্যাক্ট গ্লাসমর্ফিক প্যানেল এবং স্বয়ংক্রিয়-রিটার্ড ল্যান্ডিং মোড বৈশিষ্ট্যযুক্ত। © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:fa      گاز خودکار مبتنی بر PID دقیق برای GeoFS. دارای پانل شیشه ای جمع و جور و حالت فرود عقب ماندگی خودکار. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:he      Autothrottle מבוסס PID מדויק עבור GeoFS. כולל פאנל זכוכית מורפי קומפקטי ומצב נחיתה עם עיכוב אוטומטי. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:ms      Autothrottle berasaskan PID ketepatan untuk GeoFS. Mempunyai panel glassmorphic padat dan Mod Pendaratan terencat auto. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:fil     Precision PID-based Autothrottle para sa GeoFS. Nagtatampok ng compact glassmorphic panel at auto-retard Landing Mode. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:el      Αυτόματο γκάζι με βάση PID ακριβείας για GeoFS. Διαθέτει συμπαγή γυάλινη μορφοποίηση και λειτουργία αυτόματης επιβράδυνσης προσγείωσης. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:hr      Precizni autothrottle temeljen na PID-u za GeoFS. Sadrži kompaktnu staklomorfnu ploču i način slijetanja s automatskim usporavanjem. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:sk      Presný Autothrottle založený na PID pre GeoFS. Obsahuje kompaktný sklomorfný panel a režim pristátia s automatickým spomalením. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:bg      Прецизен PID базиран Autothrottle за GeoFS. Разполага с компактен стъкломорфен панел и режим на кацане с автоматично забавяне. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:sr      Прецизни ПИД-базирани аутоматски гас за ГеоФС. Садржи компактну стакломорфну ​​плочу и режим слетања са аутоматским успоравањем. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:lt      Tikslus PID pagrįstas automatinis droselis, skirtas GeoFS. Turi kompaktišką stiklo morfinę plokštę ir automatiškai lėtinantį tūpimo režimą. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:lv      Precīza, uz PID balstīta automātiskā drosele GeoFS. Tam ir kompakts stikla formas panelis un automātiski palēnināts piezemēšanās režīms. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:et      Täpne PID-põhine automaatne gaasipedaal GeoFS-i jaoks. Sellel on kompaktne klaasmorfne paneel ja automaatselt aeglustav maandumisrežiim. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:sl      Precision Autothrottle na osnovi PID za GeoFS. Vsebuje kompaktno steklomorfno ploščo in način pristajanja s samodejnim zamikom. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:ca      Autoaccelerador basat en PID de precisió per a GeoFS. Compta amb un panell de vidre compacte i un mode d'aterratge amb retard automàtic. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:af      Presisie PID-gebaseerde Autothrottle vir GeoFS. Beskik oor 'n kompakte glasmorfiese paneel en outo-vertraagde landingsmodus. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:sw      Precision PID-msingi Autothrottle kwa GeoFS. Inaangazia paneli kompakt ya glasi na Hali ya Kutua inayorudisha nyuma kiotomatiki. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:zu      I-Precision PID-based Autothrottle ye-GeoFS. Ifaka iphaneli ye-glassmorphic ehlangene kanye ne-Auto-retard Landing Mode. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:mn      GeoFS-д зориулсан нарийн PID-д суурилсан автомат тохируулагч. Авсаархан шилэн хавтан болон автоматаар удаашруулдаг буух горимтой. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:my      GeoFS အတွက် တိကျသော PID-based Autothrottle ကျစ်လစ်သိပ်သည်းသော ဖန်သားပုံစံ အကန့်နှင့် အလိုအလျောက် နောက်ကျသော ကမ်းတက်မုဒ်တို့ ပါဝင်ပါသည်။ © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:km      Autothrottle ដែលមានមូលដ្ឋានលើភាពជាក់លាក់ PID សម្រាប់ GeoFS ។ លក្ខណៈ​ពិសេស​នៃ​បន្ទះ glassmorphic បង្រួម និង​របៀប​ចុះចត​ថយក្រោយ​ដោយ​ស្វ័យ​ប្រវត្តិ។ © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:lo      Autothrottle ທີ່ອີງໃສ່ Precision PID ສໍາລັບ GeoFS. ມີແຜງແກ້ວສະມໍຟິກຂະໜາດກະທັດຮັດ ແລະ ໂໝດຈອດລົດອັດຕະໂນມັດ. © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.
// @description:ur      جیو ایف ایس کے لیے پی آئی ڈی پر مبنی آٹو تھروٹل۔ ایک کمپیکٹ گلاس مورفک پینل اور آٹو ریٹارڈ لینڈنگ موڈ کی خصوصیات ہیں۔ © 2026 AMFI-Disable. Part of the GeoFS-V3.9_Ecosystem.

// @require             https://update.greasyfork.org/scripts/581510/code.js
// @require             https://update.greasyfork.org/scripts/581511/code.js

// @homepageURL         https://sites.google.com/view/geofs-v39-ecosystem/home
// @connect             greasyfork.org
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          safari
// @compatible          brave
// @compatible          opera
// @copyright           2026, AMFI-Disable (https://greasyfork.org/users/1594049)

// @namespace           https://greasyfork.org/users/1594049
// @version             2.0.1
// @author              AMFI-Disable
// @icon                https://geofs-assets.evengao6688.workers.dev/icons/autothrottle.png
// @match               https://www.geo-fs.com/geofs.php*
// @grant               none
// @license             MIT
// @downloadURL https://update.greasyfork.org/scripts/581512/GeoFS-V39_Autothrottle.user.js
// @updateURL https://update.greasyfork.org/scripts/581512/GeoFS-V39_Autothrottle.meta.js
// ==/UserScript==

/**
 * GeoFS-V3.9_Autothrottle | Standalone
 * 
 * Implements a high-precision PID-based speed maintenance system. 
 * Features automatic Mach/Knots conversion, Landing Mode (Auto-Retard) 
 * with touchdown detection, and joystick input suppression.
 * 
 * Part of the GeoFS-V3.9_Ecosystem.
 * 
 * © 2026 AMFI-Disable. Licensed under the MIT License.
 */

(() => {
    function main () {
        geofs.autothrottle = {
            on: !1,

            /**
             * System Bootstrapper: Foundation & Callbacks
             * Injects styles, registers frame callbacks, and prepares the HUD panel.
             */
            init: () => {
                geofs.autothrottle.initStyles();
                // Register high-frequency physics tick
                geofs.autothrottle.callbackID = geofs.api.addFrameCallback(geofs.autothrottle.tickWrapper);
                
                /**
                 * User Interface: Autopilot Bar Integration
                 * Injects a stylized A/THR button into the Autopilot bar to serve as the
                 * primary toggle for the standalone control panel.
                 */
                const $bar = $(`
                    <div class="ext-autothrottle-bar">
                        <div class="ext-autothrottle-control-pad ext-autothrottle-pad" id="autothrottle-button" tabindex="0" onclick="geofs.autothrottle.toggle()" style="cursor: pointer; pointer-events: all;">
                            <div class="control-pad-label transp-pad" style="pointer-events: none;">A/THR</div>
                        </div>
                        <div class="ext-autothrottle-controls" style="display: none;">
                            <div class="ext-autothrottle-control" style="position: relative;">
                                <div id="V39-at-rev" style="display: none; font-size: 8px; color: #ef4444; font-weight: 900; position: absolute; top: -12px; left: 50%; transform: translateX(-50%); letter-spacing: 1px; text-shadow: 0 0 5px #ef4444;">[REV]</div>
                                <a class="ext-autothrottle-numberDown numberDown ext-autothrottle-control">-</a><input class="ext-autothrottle-numberValue numberValue ext-autothrottle-speed" min="0" data-smallstep="5" data-stepthreshold="100" step="10" data-method="setSpeed" maxlength="4" max="9999" value="0"><a class="ext-autothrottle-numberUp numberUp">+</a>
                                <span class="ext-autothrottle-switch ext-autothrottle-speedMode">
                                    <a class="ext-autothrottle-switchLeft switchLeft green-pad" data-method="setAutothrottleSpeedMode" value="knots" id="knotsMode">KTS</a>
                                    <a class="ext-autothrottle-switchRight switchRight" data-method="setAutothrottleSpeedMode" value="mach" id="machMode">M.</a>
                                </span>
                            </div>
                            <div class="geofs-autopilot-control" style="display: inline-block; vertical-align: bottom; margin-left: 5px; text-align: center;">
                                <span style="display: block; font-size: 10px; font-weight: bold; color: #aaa; margin-bottom: 2px; text-transform: uppercase; letter-spacing: 0.5px;">LND</span>
                                <span class="ext-autothrottle-switch ext-autothrottle-mode" id="autothrottle-landing-mode-switch">
                                    <a class="ext-autothrottle-switchLeft switchLeft green-pad" data-method="setArm" value="false" id="armOff">OFF</a>
                                    <a class="ext-autothrottle-switchRight switchRight" data-method="setArm" value="true" id="armOn">ON</a>
                                </span>
                            </div>
                        </div>
                        <div class="mdl-tooltip" id="autothrottle-tooltip" for="autothrottle-button">Toggle autothrottle on/off</div>
                        <div class="mdl-tooltip" id="autothrottle-landing-mode-tooltip" for="autothrottle-landing-mode-switch">Landing Mode (Auto-Retard on touchdown)</div>
                    </div>
                `).appendTo(".geofs-autopilot-bar");

                if (window.componentHandler) {
                    if (document.querySelector("#autothrottle-tooltip")) {
                        componentHandler.upgradeElement(document.querySelector("#autothrottle-tooltip"));
                    }
                    if (document.querySelector("#autothrottle-landing-mode-tooltip")) {
                        componentHandler.upgradeElement(document.querySelector("#autothrottle-landing-mode-tooltip"));
                    }
                }
                
                // Auto-select on focus/click
                $(document).on("focus click", ".ext-autothrottle-speed", (e) => {
                    e.target.select();
                });

                $(document).on("change input", ".ext-autothrottle-speed", (e) => {
                    const val = parseFloat(e.target.value);
                    if (!isNaN(val)) geofs.autopilot.setSpeed(val);
                });

                /**
                 * System Synchronization Events
                 * Handlers for engagement/disengagement state changes.
                 */
                $(document).on("autothrottleOn", () => {
                    geofs.autopilot.on && geofs.autopilot.turnOff();
                    clearTimeout(geofs.autothrottle.panelTimeout);
                    geofs.autopilot.setArm(!1); // Standard safety: Start with Landing Mode OFF.
                    $("#autothrottle-button").removeClass("red-pad").addClass("green-pad");
                    $(".ext-autothrottle-controls").show();
                    geofs.autothrottle.on = !0;
                    
                    // Mode Validation: Validate KIAS, MACH, or KNOTS, and sync green active lights.
                    let mode = geofs.autopilot.speedMode;
                    if (!mode || (mode !== "mach" && mode !== "kias" && mode !== "knots")) {
                        mode = "kias";
                    } else if (mode === "knots") {
                        mode = "kias";
                    }
                    geofs.autopilot.setAutothrottleSpeedMode(mode === "mach" ? "mach" : "knots");

                    const isMach = mode == "mach";
                    
                    // Capture input speed first to prevent wiping out user target speed
                    const $input = $(".ext-autothrottle-speed");
                    let targetVal = parseFloat($input.val());
                    if (isNaN(targetVal) || targetVal <= 0) {
                        targetVal = isMach ? (geofs.animation.values.mach || 0.8) : Math.round(geofs.animation.values.kias || 250);
                    } else {
                        // Protect against mode/value mismatch
                        if (isMach && targetVal > 50) {
                            const kias = geofs.animation.values.kias;
                            const mach = geofs.animation.values.mach;
                            if (kias && kias > 50 && mach) {
                                targetVal = (targetVal / kias) * mach;
                            } else {
                                targetVal = targetVal / 661.47;
                            }
                        } else if (!isMach && targetVal < 10) {
                            const kias = geofs.animation.values.kias;
                            const mach = geofs.animation.values.mach;
                            if (kias && kias > 50 && mach) {
                                targetVal = (targetVal / mach) * kias;
                            } else {
                                targetVal = targetVal * 661.47;
                            }
                            targetVal = Math.round(targetVal);
                        }
                    }
                    
                    geofs.autopilot.setSpeed(targetVal);
                    $input.val(isMach ? targetVal.toFixed(6) : Math.round(targetVal));
                    
                    if (window.V39_NOTIF) {
                        V39_NOTIF.success(`🛫 Autothrottle Engaged - Holding ${targetVal.toFixed(isMach ? 2 : 0)} ${isMach ? 'Mach' : 'Knots'}`);
                    }
                    document.dispatchEvent(new CustomEvent('V39_autothrottleStateChanged', { detail: { active: !0 } }));
                });

                // Triggered when the system is disengaged.
                $(document).on("autothrottleOff", () => {
                    $("#autothrottle-button").removeClass("green-pad").addClass("red-pad");
                    $(".ext-autothrottle-controls").hide();
                    geofs.autothrottle.on = !1;
                    
                    geofs.autothrottle.panelTimeout = setTimeout(() => {
                        $("#autothrottle-button").removeClass("red-pad");
                    }, 3000);
                    
                    if (geofs.autothrottle.opSyncActive) {
                        geofs.autothrottle.opSyncActive = false;
                        document.dispatchEvent(new CustomEvent('V39_opSyncStateChanged', { detail: { active: false } }));
                        
                        if (globalThis.isThrustActive && window.toggleThrustMode) {
                            window.toggleThrustMode();
                        }
                        if (globalThis.isCeilingActive && window.toggleCeilingMode) {
                            window.toggleCeilingMode();
                        }
                    }
                    
                    if (geofs.autothrottle.reverseEngaged) {
                        geofs.autothrottle.reverseEngaged = false;
                        if (geofs.aircraft.instance.definition && geofs.autothrottle._origReverse !== undefined) {
                            geofs.aircraft.instance.definition.reverse = geofs.autothrottle._origReverse;
                        }
                    }

                    // Remove REV visual indicator in case it was active during disengagement
                    $("#V39-at-rev").hide();
                    // Reset our tracking values to prevent spikes on subsequent engagements
                    geofs.autothrottle._lastFrameTime = null;
                    geofs.autothrottle._prevKias = null;
                    geofs.autothrottle._currentAccelKts = 0;
                    
                    geofs.autopilot.setSpeedMode(geofs.autopilot.speedMode);
                    geofs.autothrottle.on = !1;
                    
                    if (window.V39_NOTIF) {
                        V39_NOTIF.info("🛬 Autothrottle Disengaged - Control Returned to Pilot");
                    }
                    document.dispatchEvent(new CustomEvent('V39_autothrottleStateChanged', { detail: { active: !1 } }));
                });

                // Safety: Automatically disengage if the main Autopilot is turned on.
                $(document).on("autopilotOn", () => {
                    geofs.autopilot.setSpeedMode("knots");
                    geofs.autopilot.setSpeed(geofs.animation.values.kias);
                    geofs.autothrottle.on && $(document).trigger("autothrottleOff")
                });

                /**
                 * Input Suppression: Joystick Compatibility
                 * While Autothrottle is active, physical throttle axis inputs are suppressed
                 * to prevent conflicting commands between the pilot and the PID controller.
                 */
                const o = controls.axisSetters.throttle.process;
                controls.axisSetters.throttle.process = (e, t) => {
                    if (geofs.autothrottle.on) return;
                    o(e, t);
                };
            },
            /**
             * Injects the necessary CSS for the legacy bar button and panel states.
             * This ensures the addon looks correct even if the main design system is slow to load.
             */
            initStyles: () => {
                const style = document.createElement("style");
                style.innerHTML = `
                   .ext-autothrottle-pad {
                       width: 60px;
                       margin: 0px 10px;
                   }
                   .ext-autothrottle-bar {
                       white-space: nowrap;
                       display: flex;
                       align-items: flex-start;
                       pointer-events: all;
                   }
                   .ext-autothrottle-control-pad {
                       border: 1px solid #888;
                       background-color: #000;
                       box-shadow: 0px 0px 5px #000;
                       border-radius: 15px;
                       cursor: pointer !important;
                   }
                   .ext-autothrottle-controls {
                       vertical-align: bottom;
                       display: none;
                       margin-right: 10px;
                   }
                   .ext-autothrottle-control {
                       position: relative;
                       text-align: center;
                       margin: 0px 5px;
                       color: white;
                       line-height: 25px;
                       display: inline-block;
                   }
                   .ext-autothrottle-control span {
                       display: block;
                       text-align: center;
                       text-shadow: #000 1px 1px 3px;
                       font-size: 12px;
                       top: 0px;
                       position: relative;
                   }
                   .ext-autothrottle-bar .ext-autothrottle-switch .ext-autothrottle-switchRight {
                       top: 0px !important;
                       border-radius: 0px 15px 15px 0px;
                       left: 0px;
                   }
                   .ext-autothrottle-bar .ext-autothrottle-switch .ext-autothrottle-switchLeft {
                       top: 0px !important;
                       border-radius: 15px 0px 0px 15px;
                       border-right: 5px;
                       right: -3px;
                   }
                   .ext-autothrottle-bar .ext-autothrottle-switch a {
                       user-select: none;
                       -webkit-user-select: none;
                       position: relative;
                       display: inline-block;
                       width: 35px;
                       height: 17px;
                       line-height: 19px;
                       cursor: pointer;
                       color: white;
                       background: #000;
                       margin: 2px 0px;
                       display: inline-block;
                       border: 1px solid white;
                       box-shadow: 0px 0px 5px #000;
                   }
                   .ext-autothrottle-bar .ext-autothrottle-control {
                       position: relative;
                       text-align: center;
                       margin: 0px 5px;
                       color: white;
                       line-height: 25px;
                       display: inline-block;
                   }
                   .ext-autothrottle-bar .ext-autothrottle-speed {
                       width: 50px !important;
                   }
                   .ext-autothrottle-numberDown {
                       border-radius: 15px 0px 0px 15px;
                       line-height: 23px;
                       right: -5px;
                       position: relative !important;
                   }
                   .ext-autothrottle-numberUp {
                       border-radius: 0px 15px 15px 0px;
                       line-height: 26px;
                       left: -5px;
                       position: relative !important;
                   }
                   .ext-autothrottle-control .ext-autothrottle-numberDown,.ext-autothrottle-control .ext-autothrottle-numberUp {
                       user-select: none;
                       -webkit-user-select: none;
                       vertical-align: top;
                       cursor: pointer;
                       text-align: center;
                       color: white;
                       background: #000;
                       margin: 0px;
                       width: 30px;
                       display: inline-block;
                       border: 1px solid white;
                       height: 25px;
                       box-shadow: 0px 0px 5px #000;
                   }
                   .ext-autothrottle-control .ext-autothrottle-numberValue {
                       font-family: 'LCD-Bold', monospace;
                       font-size: 20px !important;
                       letter-spacing: 1px;
                       display: inline-block;
                       vertical-align: top;
                       padding: 0px 5px;
                       margin: 0px;
                       background: #000;
                       border: 1px solid;
                       border-radius: 0px;
                       height: 25px;
                       line-height: 26px;
                       box-shadow: 0px 0px 5px #000;
                       color: white;
                       width: 120px; /* overriden in ext-autothrottle-speed */
                       text-align: right;
                    }
                    .green-pad {
                       border-color: #10b981 !important;
                       box-shadow: 0 0 10px rgba(16, 185, 129, 0.4) !important;
                    }
                    .red-pad {
                       border-color: #ef4444 !important;
                       box-shadow: 0 0 10px rgba(239, 68, 68, 0.4) !important;
                    }
                `;
                document.head.appendChild(style);
            },
            /**
             * Toggles the system state between ON and OFF.
             * Triggers the corresponding document events for synchronization.
             * Includes a pre-engagement validation check to ensure modes are selected.
             */
            toggle: () => {
                if (geofs.autothrottle.error) return;
                
                if (!geofs.autothrottle.on) {
                    // Electrical System Dependency: Block engagement if no power.
                    if (window.failureSimulator?.fails?.electrical) {
                        if (window.V39_NOTIF) V39_NOTIF.critical("⚡ AUTOTHROTTLE OFFLINE - NO ELECTRICAL POWER");
                        return;
                    }

                    // Auto-initialize Speed Mode to Knots if not set or invalid
                    const mode = geofs.autopilot.speedMode;
                    const isModeValid = (mode === "mach" || mode === "knots");
                    if (!isModeValid) {
                        geofs.autopilot.setAutothrottleSpeedMode('knots');
                    }

                    // Auto-initialize Landing Mode to OFF if not set
                    const isArmValid = (typeof geofs.autothrottle.armed !== "undefined");
                    if (!isArmValid) {
                        geofs.autopilot.setArm(!1);
                    }
                }
                
                geofs.autothrottle.on ? $(document).trigger("autothrottleOff") : $(document).trigger("autothrottleOn");
            },
            /**
             * Core Feedback Engine (PID Controller)
             * Calculates the differential throttle command required to reach the 
             * target indicated airspeed or Mach number.
             * @param {number} a - Integrated delta time (seconds).
             * @param {number} b - Frame delta time (milliseconds).
             */
            tick: (a, b) => {
                // Physics scaling: Normalize delta based on simulation frequency
                var A = clamp(Math.floor(b / geofs.api.renderingSettings.physicsDeltaMs), 1, 10)
                  , B = a / A;
                var c = geofs.animation.values
                , d = geofs.autopilot
                , e = d.values.speed
                , f = c.kias;

                // Mode logic: Convert Mach target to knots for internal PID processing
                geofs.autopilot.speedMode == "mach" && (e = geofs.utils.machToKnots(d.values.speed),
                f = geofs.utils.machToKnots(c.mach));

                // --- 1. Reverse Thrust Engine ---
                const currentMach = c.mach || (f / 661.47);
                const reverseThreshold = clamp(0.8 - (currentMach * 0.05), 0.1, 0.8);
                
                if (e < f * reverseThreshold && !geofs.autothrottle.reverseEngaged) {
                    geofs.autothrottle.reverseEngaged = true;
                    // Force the aircraft definition to support reverse thrust so controls.update doesn't clamp negative throttle
                    if (geofs.aircraft.instance.definition) {
                        geofs.autothrottle._origReverse = geofs.aircraft.instance.definition.reverse;
                        geofs.aircraft.instance.definition.reverse = true;
                    }
                    $("#V39-at-rev").show();
                } else if (f <= e * 1.05 && geofs.autothrottle.reverseEngaged) {
                    geofs.autothrottle.reverseEngaged = false;
                    // Restore original reverse property of aircraft definition
                    if (geofs.aircraft.instance.definition && geofs.autothrottle._origReverse !== undefined) {
                        geofs.aircraft.instance.definition.reverse = geofs.autothrottle._origReverse;
                    }
                    $("#V39-at-rev").hide();
                }

                /**
                 * --- 2. [Integration] Seamless OP Engines Bridge ---
                 */
                const mass = geofs.aircraft.instance.setup.mass || 1000; // Default to 1 ton if missing
                const OP_LIMIT_KNOTS = (mass < 10000) ? 200 : 500;
                
                // Keep OP Engines engaged if targeting supersonic, OR if air-braking from supersonic
                if (e > OP_LIMIT_KNOTS || (geofs.autothrottle.reverseEngaged && f > OP_LIMIT_KNOTS)) {
                    // Auto-activate OP Engines if target speed exceeds physical aircraft limits
                    if (!globalThis.isThrustActive && window.toggleThrustMode) {
                        window.toggleThrustMode();
                        if (window.V39_NOTIF) V39_NOTIF.warn(`🚀 Physical limit (${OP_LIMIT_KNOTS}kts) exceeded. OP Engines engaged.`);
                    }
                    
                    // Auto-activate Ceiling Bypass to handle extreme high-altitude atmospheric heights
                    if (!globalThis.isCeilingActive && window.toggleCeilingMode) {
                        window.toggleCeilingMode();
                    }
                    
                    if (!geofs.autothrottle.opSyncActive) {
                        geofs.autothrottle.opSyncActive = true;
                        document.dispatchEvent(new CustomEvent('V39_opSyncStateChanged', { detail: { active: true } }));
                    }
                    
                    if (globalThis.isThrustActive) {
                        const activeSpeed = geofs.autothrottle.reverseEngaged ? f : e; // Use current speed for base multiplier if braking
                        const rawError = Math.abs(e - f); // Absolute error
                        const baseMult = activeSpeed / 500;
                        
                        // Scale errorBoost aggressively for massive hypersonic target differences
                        let errorBoost = rawError / 100;
                        if (rawError > 1000) {
                            errorBoost = (rawError / 10) * (1 + (rawError / 10000));
                        }
                        
                        const targetMult = clamp(baseMult + errorBoost, 1, 1000000000);
                        
                        // Smoothly slide the multiplier towards the optimal target
                        window.opMultiplier += (targetMult - window.opMultiplier) * 0.15;
                        
                        window.opMultiplier = clamp(window.opMultiplier, 1, 1000000000);
                        
                        // Broadcast live updates to sync the Overpowered Engines UI
                        document.dispatchEvent(new CustomEvent('V39_opMultiplierUpdated', { detail: { value: window.opMultiplier } }));
                    }
                } else {
                    // Target is achievable within standard flight envelope
                    if (geofs.autothrottle.opSyncActive) {
                        geofs.autothrottle.opSyncActive = false;
                        document.dispatchEvent(new CustomEvent('V39_opSyncStateChanged', { detail: { active: false } }));
                        
                        // Gracefully relinquish control and disable overpowered engines
                        if (globalThis.isThrustActive && window.toggleThrustMode) {
                             window.toggleThrustMode();
                             if (window.V39_NOTIF) V39_NOTIF.warn("🛬 Returned to standard flight envelope. OP Engines disengaged.");
                        }
                        
                        // Restore standard atmospheric limits
                        if (globalThis.isCeilingActive && window.toggleCeilingMode) {
                             window.toggleCeilingMode();
                        }
                    }
                }

                const mult = (globalThis.isThrustActive && window.opMultiplier) ? window.opMultiplier : 1.0;
                const error = Math.abs(e - f); // Absolute Difference
                
                // Track real-time acceleration in knots/second
                const now = geofs.utils.now();
                if (!geofs.autothrottle._lastFrameTime) {
                    geofs.autothrottle._lastFrameTime = now;
                    geofs.autothrottle._prevKias = f;
                    geofs.autothrottle._currentAccelKts = 0;
                }
                const dt = Math.max((now - geofs.autothrottle._lastFrameTime) / 1000, 0.001);
                geofs.autothrottle._lastFrameTime = now;

                const dKias = f - geofs.autothrottle._prevKias;
                geofs.autothrottle._prevKias = f;

                if (dt > 0 && Math.abs(dKias) < 2000) {
                    const rawAccel = dKias / dt;
                    geofs.autothrottle._currentAccelKts = geofs.autothrottle._currentAccelKts * 0.8 + rawAccel * 0.2;
                }
                
                // Base Formula: More permissive fractional damping (50 instead of 12) for high-multiplier authority
                let damping = (50 / (mult + 49)); 
                
                // Hypersonic Scaling: If error is huge, smoothly transition damping towards 1.0 (no damping) to unleash full thrust
                const errorRatio = clamp(error / 1000, 0, 1);
                damping = damping * (1 - errorRatio) + 1.0 * errorRatio;
                
                // Boost Factor: Increase authority when far from target speed
                damping *= (1 + 0.2 * Math.sin(Math.min(error / 150, Math.PI / 2)));
                
                // PID Update: Inject dynamic dampening into the controller
                const pid = d.PIDs.throttle;
                
                if (geofs.autothrottle.reverseEngaged) {
                    pid.set(e, -1, 1); // Expand bounds to allow negative throttle computation during deceleration
                } else {
                    pid.set(e, 0, 1);
                }
                
                // State Sync: Apply dampening to Proportional and Integral components
                let throttleCmd = pid.compute(f, B);
                
                if (geofs.autothrottle.reverseEngaged) {
                    // Invert negative PID output to positively spool engines in reverse mode
                    throttleCmd = Math.abs(throttleCmd);
                }
                
                // Acceleration Guard: Force thrust reduction if acceleration is excessive (limit to 100 knots/sec)
                const currentAccel = geofs.autothrottle._currentAccelKts || 0;
                if (mult > 1 && currentAccel > 100) {
                     throttleCmd *= (100 / currentAccel); // Proportional cut to maintain exactly 100 kts/sec
                }

                if (geofs.autothrottle.reverseEngaged) {
                     controls.throttle = clamp(-throttleCmd * damping, -1, 0); // Apply negative throttle for reverse thrust
                } else {
                     controls.throttle = clamp(throttleCmd * damping, 0, 1);
                }
            },
            /**
             * Tick Orchestrator & Safety Guard
             * Manages the execution context for the PID loop and implements 
             * the Landing Mode (Auto-Retard) logic.
             */
            tickWrapper: (a) => {
                if (geofs.autothrottle.on) {
                    // Electrical System Dependency: Immediate emergency cut if power is lost.
                    if (window.failureSimulator?.fails?.electrical) {
                        if (window.V39_NOTIF) V39_NOTIF.critical("⚡ AUTOTHROTTLE DISENGAGED - ELECTRICAL FAILURE");
                        $(document).trigger("autothrottleOff");
                        return;
                    }

                    // Touchdown Guard: Immediate engine cut upon ground contact if ARMED
                    if (geofs.aircraft.instance.groundContact && geofs.autothrottle.armed) {
                        controls.throttle = 0;
                        $(document).trigger("autothrottleOff");
                        return;
                    }
                    var b = a - geofs.utils.now();
                    var c = b / 1E3;
                    try {
                        geofs.autothrottle.tick(c, b);
                    } catch (err) {
                        geofs.autothrottle.handleError(err);
                    }
                }
            },
            /**
             * Standardized error handling to prevent the script from crashing the simulator.
             */
            handleError: (a) => {
                console.error(a);
                ui.notification.show('An error with autothrottle occured, autothrottle is now disabled. Check console for more details.');
                geofs.debug.log("meatbroc autothrottle error");
                geofs.api.removeFrameCallback(geofs.autothrottle.callbackID);
                $(document).trigger("autothrottleOff");
                geofs.autothrottle.error = !0;
            },
            _ktsSpeedAttributes: {smallstep: "5", stepthreshold: "100", step: "10", maxlength: "4", max: "9999"},
            _machSpeedAttributes: {smallstep: "0.01", decimals: "2", max: "10"}
        };
        geofs.autothrottle.init();
        /**
         * Autopilot API Extensions
         * Overrides default GeoFS autopilot functions to integrate the Autothrottle's 
         * enhanced speed and landing modes.
         */

        /**
         * Custom Landing Mode (Arming) toggle.
         * Renamed to "Landing Mode" in the UI for better user understanding.
         */
        geofs.autopilot.setArm = (a) => {
            const b = JSON.parse(a);
            geofs.autothrottle.armed = b;
            $("#armOn").toggleClass("green-pad active", b);
            $("#armOff").toggleClass("green-pad active", !b);
        };

        /**
         * Manages switching between KNOTS and MACH speed hold modes.
         * Updates the UI inputs to reflect the correct precision (e.g., 2 decimals for Mach).
         */
        geofs.autopilot.setAutothrottleSpeedMode = function (e) {
            const isMach = "mach" == e;
            $("#machMode").toggleClass("green-pad active", isMach);
            $("#knotsMode").toggleClass("green-pad active", !isMach);
            
            const $input = $(".ext-autothrottle-speed");
            let currentTarget = parseFloat($input.val());
            if (isNaN(currentTarget) || currentTarget <= 0) {
                currentTarget = geofs.autopilot.values.speed || (isMach ? 0.8 : 250);
            }
            
            const kias = geofs.animation.values.kias;
            const mach = geofs.animation.values.mach;
            const prevMode = this.speedMode; // "mach" or "kias" / "knots"

            if (isMach && prevMode !== "mach") {
                // Transitioning Knots -> Mach: convert knots value to mach
                if (kias && kias > 50 && mach) {
                    currentTarget = (currentTarget / kias) * mach;
                } else {
                    currentTarget = currentTarget / 661.47;
                }
            } else if (!isMach && prevMode === "mach") {
                // Transitioning Mach -> Knots: convert mach value to knots
                if (kias && kias > 50 && mach) {
                    currentTarget = (currentTarget / mach) * kias;
                } else {
                    currentTarget = currentTarget * 661.47;
                }
                currentTarget = Math.round(currentTarget);
            }

            this.setSpeedMode(isMach ? "mach" : "kias");
            this.setSpeed(currentTarget);
            
            // UI Sync: Update attributes before value to ensure correct clamping/formatting.
            $input.removeAttr("max");
            $input.attr(isMach ? geofs.autothrottle._machSpeedAttributes : geofs.autothrottle._ktsSpeedAttributes);
            $input.val(isMach ? currentTarget.toFixed(6) : Math.round(currentTarget)); // Increased precision to maintain exact user values

            if (window.V39_NOTIF) {
                V39_NOTIF.info(`🔄 Speed Mode Switched to ${isMach ? 'Mach' : 'Knots'} (${currentTarget.toFixed(isMach ? 2 : 0)} ${isMach ? 'M' : 'kts'})`);
            }
        }

        if (window.V39_NOTIF) {
            window.V39_NOTIF.success("GeoFS-V3.9_Autothrottle V2.0.1 Loaded.");
        }
        console.log("[GeoFS-V3.9_Autothrottle] >> Autothrottle System Initialized.");
    }
    window.executeOnEventDone("geofsInitialized", main);
})();


