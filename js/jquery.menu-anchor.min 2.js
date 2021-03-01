/*!
 * Copyright 2015 Maas Dianto <maas.dianto@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
!function(t){t.MenuAnchor=function(n,e){var i=this;t("body");i.settings=t.extend({window:window.top,pluralId:"menu-anchor-",contentPostfix:"-content",scroll:!0},e),i.scroll=!0,i.init=function(){t(n).find("[id^="+i.settings.pluralId+"]").each(function(n,e){t(e).click(function(n){n.preventDefault(),i.settings.scroll&&(i.scroll=!1);var s=t("#"+e.id+i.settings.contentPostfix).position();t(i.settings.window.document).find("html, body").animate({scrollTop:s.top-50},{duration:"slow",complete:function(){i.settings.scroll&&(i.scroll=!0),i.setSelectedLink(e.id)},error:function(){i.settings.scroll&&(i.scroll=!0),i.setSelectedLink(e.id)}})})}),i.settings.scroll&&t(i.settings.window).scroll(function(){i.scroll&&i.setSelectedLink()})},i.setSelectedLink=function(e){var s=-1,o="";t(n).find("[id^="+i.settings.pluralId+"]").each(function(n,e){if("undefined"!=typeof i.settings.window){t("#"+e.id).hasClass("selected")&&t("#"+e.id).removeClass("selected");var c=t("#"+e.id+i.settings.contentPostfix).offset(),l=i.settings.window.pageYOffset,d=c.top-l;(d>=0&&s>=d||0>=s||""===o)&&(s=d,o=e.id)}}),e&&(o=e),""!==o&&t("#"+o).addClass("selected")},i.init(),i.setSelectedLink()},t.fn.MenuAnchor=function(n){return this.each(function(){new t.MenuAnchor(this,n)})}}(jQuery);