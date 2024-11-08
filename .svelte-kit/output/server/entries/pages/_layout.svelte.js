import { c as attr, e as escape_html, b as bind_props, p as pop, a as push, h as head, d as stringify, g as ensure_array_like, s as spread_attributes, i as slot } from "../../chunks/index2.js";
import { I as Icon, B as BiMenu, S as SiTelegram } from "../../chunks/index.js";
function Navigation($$payload, $$props) {
  push();
  let model = $$props["model"];
  $$payload.out += `<div${attr("class", `w-full h-16 overflow-hidden flex flex-col bg-white shadow-sm  p-4 transition-all duration-200 md:px-20  md:flex-row ${""}`)}><a href="#main" class="flex flex-row items-center text-2xl uppercase font-semibold gap-2"><img class="h-10"${attr("src", model.icon)} alt="portfolio icon" srcset=""> <p class="w-full text-center">Demin</p> <button class="md:hidden">`;
  Icon($$payload, { size: "40", src: BiMenu });
  $$payload.out += `<!----></button></a> <div${attr("class", `flex flex-col flex-1 gap-3  justify-center  transition-all duration-200 items-center text-lg font-medium md:opacity-100 md:flex-row  ${" opacity-0"}`)}><a href="#skill">${escape_html(model.skills)}</a> <a href="#about">${escape_html(model.aboutMe)}</a> <a href="#project">${escape_html(model.project)}</a> <a href="#testi">${escape_html(model.contactMe)}</a></div> <div class="w-full flex flex-row justify-center md:w-max"><a href="https://t.me/tango_rain" class="flex flex-row items-center justify-center px-28 py-3 w-max text-white bg-black rounded md:p-4 text-sm gap-2">Telegram `;
  Icon($$payload, { color: "ffFFff", src: SiTelegram });
  $$payload.out += `<!----></a></div></div>`;
  bind_props($$props, { model });
  pop();
}
const logo = "data:image/svg+xml,%3csvg%20width='77'%20height='87'%20viewBox='0%200%2077%2087'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2040.5H39C41.4853%2040.5%2043.5%2042.5147%2043.5%2045C43.5%2047.4853%2041.4853%2049.5%2039%2049.5H4.5V40.5Z'%20stroke='%23181818'%20stroke-width='9'/%3e%3ccircle%20cx='58'%20cy='45'%20r='7'%20fill='%23181818'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%209H52C60.8366%209%2068%2016.1634%2068%2025V62C68%2070.8366%2060.8366%2078%2052%2078H9V66H0V78V87H9H52C65.8071%2087%2077%2075.8071%2077%2062V25C77%2011.1929%2065.8071%200%2052%200H9H0V9V60H9V9Z'%20fill='%23181818'/%3e%3c/svg%3e";
function MetaTags($$payload, $$props) {
  push();
  let {
    title = void 0,
    titleTemplate = void 0,
    robots = "index,follow",
    additionalRobotsProps = void 0,
    description = void 0,
    mobileAlternate = void 0,
    languageAlternates = void 0,
    twitter = void 0,
    facebook = void 0,
    openGraph = void 0,
    canonical = void 0,
    keywords = void 0,
    additionalMetaTags = void 0,
    additionalLinkTags = void 0
  } = $$props;
  let updatedTitle = titleTemplate ? title ? titleTemplate.replace(/%s/g, title) : title : title;
  let robotsParams = "";
  if (additionalRobotsProps) {
    const {
      nosnippet,
      maxSnippet,
      maxImagePreview,
      maxVideoPreview,
      noarchive,
      noimageindex,
      notranslate,
      unavailableAfter
    } = additionalRobotsProps;
    robotsParams = `${nosnippet ? ",nosnippet" : ""}${maxSnippet ? `,max-snippet:${maxSnippet}` : ""}${maxImagePreview ? `,max-image-preview:${maxImagePreview}` : ""}${noarchive ? ",noarchive" : ""}${unavailableAfter ? `,unavailable_after:${unavailableAfter}` : ""}${noimageindex ? ",noimageindex" : ""}${maxVideoPreview ? `,max-video-preview:${maxVideoPreview}` : ""}${notranslate ? ",notranslate" : ""}`;
  }
  head($$payload, ($$payload2) => {
    if (updatedTitle) {
      $$payload2.out += "<!--[-->";
      $$payload2.title = `<title>${escape_html(updatedTitle)}</title>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (robots !== false) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="robots"${attr("content", `${stringify(robots)}${stringify(robotsParams)}`)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (description) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="description"${attr("content", description)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (canonical) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<link rel="canonical"${attr("href", canonical)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (keywords?.length) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="keywords"${attr("content", keywords.join(", "))}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (mobileAlternate) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<link rel="alternate"${attr("media", mobileAlternate.media)}${attr("href", mobileAlternate.href)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (languageAlternates && languageAlternates.length > 0) {
      $$payload2.out += "<!--[-->";
      const each_array = ensure_array_like(languageAlternates);
      $$payload2.out += `<!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let languageAlternate = each_array[$$index];
        $$payload2.out += `<link rel="alternate"${attr("hreflang", languageAlternate.hrefLang)}${attr("href", languageAlternate.href)}>`;
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (twitter) {
      $$payload2.out += "<!--[-->";
      if (twitter.cardType) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:card"${attr("content", twitter.cardType)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.site) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:site"${attr("content", twitter.site)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.title) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:title"${attr("content", twitter.title)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.description) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:description"${attr("content", twitter.description)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.creator) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:creator"${attr("content", twitter.creator)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.creatorId) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:creator:id"${attr("content", twitter.creatorId)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.image) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:image"${attr("content", twitter.image)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.imageAlt) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:image:alt"${attr("content", twitter.imageAlt)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.player) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:player"${attr("content", twitter.player)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.playerWidth) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:player:width"${attr("content", twitter.playerWidth.toString())}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.playerHeight) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:player:height"${attr("content", twitter.playerHeight.toString())}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.playerStream) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:player:stream"${attr("content", twitter.playerStream)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.appNameIphone) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:app:name:iphone"${attr("content", twitter.appNameIphone)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.appIdIphone) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:app:id:iphone"${attr("content", twitter.appIdIphone)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.appUrlIphone) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:app:url:iphone"${attr("content", twitter.appUrlIphone)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.appNameIpad) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:app:name:ipad"${attr("content", twitter.appNameIpad)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.appIdIpad) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:app:id:ipad"${attr("content", twitter.appIdIpad)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.appUrlIpad) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:app:url:ipad"${attr("content", twitter.appUrlIpad)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.appNameGoogleplay) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:app:name:googleplay"${attr("content", twitter.appNameGoogleplay)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.appIdGoogleplay) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:app:id:googleplay"${attr("content", twitter.appIdGoogleplay)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter.appUrlGoogleplay) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:app:url:googleplay"${attr("content", twitter.appUrlGoogleplay)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (facebook) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="fb:app_id"${attr("content", facebook.appId)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (openGraph) {
      $$payload2.out += "<!--[-->";
      if (openGraph.url || canonical) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:url"${attr("content", openGraph.url || canonical)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (openGraph.type) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:type"${attr("content", openGraph.type.toLowerCase())}> `;
        if (openGraph.type.toLowerCase() === "profile" && openGraph.profile) {
          $$payload2.out += "<!--[-->";
          if (openGraph.profile.firstName) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="profile:first_name"${attr("content", openGraph.profile.firstName)}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.profile.lastName) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="profile:last_name"${attr("content", openGraph.profile.lastName)}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.profile.username) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="profile:username"${attr("content", openGraph.profile.username)}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (openGraph.profile.gender) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="profile:gender"${attr("content", openGraph.profile.gender)}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        } else {
          $$payload2.out += "<!--[!-->";
          if (openGraph.type.toLowerCase() === "book" && openGraph.book) {
            $$payload2.out += "<!--[-->";
            if (openGraph.book.authors && openGraph.book.authors.length) {
              $$payload2.out += "<!--[-->";
              const each_array_1 = ensure_array_like(openGraph.book.authors);
              $$payload2.out += `<!--[-->`;
              for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                let author = each_array_1[$$index_1];
                $$payload2.out += `<meta property="book:author"${attr("content", author)}>`;
              }
              $$payload2.out += `<!--]-->`;
            } else {
              $$payload2.out += "<!--[!-->";
            }
            $$payload2.out += `<!--]--> `;
            if (openGraph.book.isbn) {
              $$payload2.out += "<!--[-->";
              $$payload2.out += `<meta property="book:isbn"${attr("content", openGraph.book.isbn)}>`;
            } else {
              $$payload2.out += "<!--[!-->";
            }
            $$payload2.out += `<!--]--> `;
            if (openGraph.book.releaseDate) {
              $$payload2.out += "<!--[-->";
              $$payload2.out += `<meta property="book:release_date"${attr("content", openGraph.book.releaseDate)}>`;
            } else {
              $$payload2.out += "<!--[!-->";
            }
            $$payload2.out += `<!--]--> `;
            if (openGraph.book.tags && openGraph.book.tags.length) {
              $$payload2.out += "<!--[-->";
              const each_array_2 = ensure_array_like(openGraph.book.tags);
              $$payload2.out += `<!--[-->`;
              for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                let tag = each_array_2[$$index_2];
                $$payload2.out += `<meta property="book:tag"${attr("content", tag)}>`;
              }
              $$payload2.out += `<!--]-->`;
            } else {
              $$payload2.out += "<!--[!-->";
            }
            $$payload2.out += `<!--]-->`;
          } else {
            $$payload2.out += "<!--[!-->";
            if (openGraph.type.toLowerCase() === "article" && openGraph.article) {
              $$payload2.out += "<!--[-->";
              if (openGraph.article.publishedTime) {
                $$payload2.out += "<!--[-->";
                $$payload2.out += `<meta property="article:published_time"${attr("content", openGraph.article.publishedTime)}>`;
              } else {
                $$payload2.out += "<!--[!-->";
              }
              $$payload2.out += `<!--]--> `;
              if (openGraph.article.modifiedTime) {
                $$payload2.out += "<!--[-->";
                $$payload2.out += `<meta property="article:modified_time"${attr("content", openGraph.article.modifiedTime)}>`;
              } else {
                $$payload2.out += "<!--[!-->";
              }
              $$payload2.out += `<!--]--> `;
              if (openGraph.article.expirationTime) {
                $$payload2.out += "<!--[-->";
                $$payload2.out += `<meta property="article:expiration_time"${attr("content", openGraph.article.expirationTime)}>`;
              } else {
                $$payload2.out += "<!--[!-->";
              }
              $$payload2.out += `<!--]--> `;
              if (openGraph.article.authors && openGraph.article.authors.length) {
                $$payload2.out += "<!--[-->";
                const each_array_3 = ensure_array_like(openGraph.article.authors);
                $$payload2.out += `<!--[-->`;
                for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
                  let author = each_array_3[$$index_3];
                  $$payload2.out += `<meta property="article:author"${attr("content", author)}>`;
                }
                $$payload2.out += `<!--]-->`;
              } else {
                $$payload2.out += "<!--[!-->";
              }
              $$payload2.out += `<!--]--> `;
              if (openGraph.article.section) {
                $$payload2.out += "<!--[-->";
                $$payload2.out += `<meta property="article:section"${attr("content", openGraph.article.section)}>`;
              } else {
                $$payload2.out += "<!--[!-->";
              }
              $$payload2.out += `<!--]--> `;
              if (openGraph.article.tags && openGraph.article.tags.length) {
                $$payload2.out += "<!--[-->";
                const each_array_4 = ensure_array_like(openGraph.article.tags);
                $$payload2.out += `<!--[-->`;
                for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
                  let tag = each_array_4[$$index_4];
                  $$payload2.out += `<meta property="article:tag"${attr("content", tag)}>`;
                }
                $$payload2.out += `<!--]-->`;
              } else {
                $$payload2.out += "<!--[!-->";
              }
              $$payload2.out += `<!--]-->`;
            } else {
              $$payload2.out += "<!--[!-->";
              if (openGraph.type.toLowerCase() === "video.movie" || openGraph.type.toLowerCase() === "video.episode" || openGraph.type.toLowerCase() === "video.tv_show" || openGraph.type.toLowerCase() === "video.other" && openGraph.video) {
                $$payload2.out += "<!--[-->";
                if (openGraph.video?.actors && openGraph.video.actors.length) {
                  $$payload2.out += "<!--[-->";
                  const each_array_5 = ensure_array_like(openGraph.video.actors);
                  $$payload2.out += `<!--[-->`;
                  for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
                    let actor = each_array_5[$$index_5];
                    if (actor.profile) {
                      $$payload2.out += "<!--[-->";
                      $$payload2.out += `<meta property="video:actor"${attr("content", actor.profile)}>`;
                    } else {
                      $$payload2.out += "<!--[!-->";
                    }
                    $$payload2.out += `<!--]--> `;
                    if (actor.role) {
                      $$payload2.out += "<!--[-->";
                      $$payload2.out += `<meta property="video:actor:role"${attr("content", actor.role)}>`;
                    } else {
                      $$payload2.out += "<!--[!-->";
                    }
                    $$payload2.out += `<!--]-->`;
                  }
                  $$payload2.out += `<!--]-->`;
                } else {
                  $$payload2.out += "<!--[!-->";
                }
                $$payload2.out += `<!--]--> `;
                if (openGraph.video?.directors && openGraph.video.directors.length) {
                  $$payload2.out += "<!--[-->";
                  const each_array_6 = ensure_array_like(openGraph.video.directors);
                  $$payload2.out += `<!--[-->`;
                  for (let $$index_6 = 0, $$length = each_array_6.length; $$index_6 < $$length; $$index_6++) {
                    let director = each_array_6[$$index_6];
                    $$payload2.out += `<meta property="video:director"${attr("content", director)}>`;
                  }
                  $$payload2.out += `<!--]-->`;
                } else {
                  $$payload2.out += "<!--[!-->";
                }
                $$payload2.out += `<!--]--> `;
                if (openGraph.video?.writers && openGraph.video.writers.length) {
                  $$payload2.out += "<!--[-->";
                  const each_array_7 = ensure_array_like(openGraph.video.writers);
                  $$payload2.out += `<!--[-->`;
                  for (let $$index_7 = 0, $$length = each_array_7.length; $$index_7 < $$length; $$index_7++) {
                    let writer = each_array_7[$$index_7];
                    $$payload2.out += `<meta property="video:writer"${attr("content", writer)}>`;
                  }
                  $$payload2.out += `<!--]-->`;
                } else {
                  $$payload2.out += "<!--[!-->";
                }
                $$payload2.out += `<!--]--> `;
                if (openGraph.video?.duration) {
                  $$payload2.out += "<!--[-->";
                  $$payload2.out += `<meta property="video:duration"${attr("content", openGraph.video.duration.toString())}>`;
                } else {
                  $$payload2.out += "<!--[!-->";
                }
                $$payload2.out += `<!--]--> `;
                if (openGraph.video?.releaseDate) {
                  $$payload2.out += "<!--[-->";
                  $$payload2.out += `<meta property="video:release_date"${attr("content", openGraph.video.releaseDate)}>`;
                } else {
                  $$payload2.out += "<!--[!-->";
                }
                $$payload2.out += `<!--]--> `;
                if (openGraph.video?.tags && openGraph.video.tags.length) {
                  $$payload2.out += "<!--[-->";
                  const each_array_8 = ensure_array_like(openGraph.video.tags);
                  $$payload2.out += `<!--[-->`;
                  for (let $$index_8 = 0, $$length = each_array_8.length; $$index_8 < $$length; $$index_8++) {
                    let tag = each_array_8[$$index_8];
                    $$payload2.out += `<meta property="video:tag"${attr("content", tag)}>`;
                  }
                  $$payload2.out += `<!--]-->`;
                } else {
                  $$payload2.out += "<!--[!-->";
                }
                $$payload2.out += `<!--]--> `;
                if (openGraph.video?.series) {
                  $$payload2.out += "<!--[-->";
                  $$payload2.out += `<meta property="video:series"${attr("content", openGraph.video.series)}>`;
                } else {
                  $$payload2.out += "<!--[!-->";
                }
                $$payload2.out += `<!--]-->`;
              } else {
                $$payload2.out += "<!--[!-->";
              }
              $$payload2.out += `<!--]-->`;
            }
            $$payload2.out += `<!--]-->`;
          }
          $$payload2.out += `<!--]-->`;
        }
        $$payload2.out += `<!--]-->`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (openGraph.title || updatedTitle) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:title"${attr("content", openGraph.title || updatedTitle)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (openGraph.description || description) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:description"${attr("content", openGraph.description || description)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (openGraph.images && openGraph.images.length) {
        $$payload2.out += "<!--[-->";
        const each_array_9 = ensure_array_like(openGraph.images);
        $$payload2.out += `<!--[-->`;
        for (let $$index_9 = 0, $$length = each_array_9.length; $$index_9 < $$length; $$index_9++) {
          let image = each_array_9[$$index_9];
          $$payload2.out += `<meta property="og:image"${attr("content", image.url)}> `;
          if (image.alt) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:image:alt"${attr("content", image.alt)}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (image.width) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:image:width"${attr("content", image.width.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (image.height) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:image:height"${attr("content", image.height.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (image.secureUrl) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:image:secure_url"${attr("content", image.secureUrl.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (image.type) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:image:type"${attr("content", image.type.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        }
        $$payload2.out += `<!--]-->`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (openGraph.videos && openGraph.videos.length) {
        $$payload2.out += "<!--[-->";
        const each_array_10 = ensure_array_like(openGraph.videos);
        $$payload2.out += `<!--[-->`;
        for (let $$index_10 = 0, $$length = each_array_10.length; $$index_10 < $$length; $$index_10++) {
          let video = each_array_10[$$index_10];
          $$payload2.out += `<meta property="og:video"${attr("content", video.url)}> `;
          if (video.width) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:video:width"${attr("content", video.width.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (video.height) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:video:height"${attr("content", video.height.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (video.secureUrl) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:video:secure_url"${attr("content", video.secureUrl.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (video.type) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:video:type"${attr("content", video.type.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        }
        $$payload2.out += `<!--]-->`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (openGraph.audio && openGraph.audio.length) {
        $$payload2.out += "<!--[-->";
        const each_array_11 = ensure_array_like(openGraph.audio);
        $$payload2.out += `<!--[-->`;
        for (let $$index_11 = 0, $$length = each_array_11.length; $$index_11 < $$length; $$index_11++) {
          let audio = each_array_11[$$index_11];
          $$payload2.out += `<meta property="og:audio"${attr("content", audio.url)}> `;
          if (audio.secureUrl) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:audio:secure_url"${attr("content", audio.secureUrl.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (audio.type) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<meta property="og:audio:type"${attr("content", audio.type.toString())}>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        }
        $$payload2.out += `<!--]-->`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (openGraph.locale) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:locale"${attr("content", openGraph.locale)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (openGraph.siteName) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:site_name"${attr("content", openGraph.siteName)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (additionalMetaTags && Array.isArray(additionalMetaTags)) {
      $$payload2.out += "<!--[-->";
      const each_array_12 = ensure_array_like(additionalMetaTags);
      $$payload2.out += `<!--[-->`;
      for (let $$index_12 = 0, $$length = each_array_12.length; $$index_12 < $$length; $$index_12++) {
        let tag = each_array_12[$$index_12];
        $$payload2.out += `<meta${spread_attributes({
          ...tag.httpEquiv ? { ...tag, "http-equiv": tag.httpEquiv } : tag
        })}>`;
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (additionalLinkTags?.length) {
      $$payload2.out += "<!--[-->";
      const each_array_13 = ensure_array_like(additionalLinkTags);
      $$payload2.out += `<!--[-->`;
      for (let $$index_13 = 0, $$length = each_array_13.length; $$index_13 < $$length; $$index_13++) {
        let tag = each_array_13[$$index_13];
        $$payload2.out += `<link${spread_attributes({ ...tag })} onload="this.__e=event" onerror="this.__e=event">`;
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  pop();
}
function _layout($$payload, $$props) {
  push();
  let data = $$props["data"];
  data.init.ru_nav.icon = logo;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Demin portfolio</title>`;
    $$payload2.out += `<link rel="icon"${attr("href", logo)}>`;
  });
  $$payload.out += `<div class="Some_Easter_Egg"><header class="sticky top-0 w-full">`;
  Navigation($$payload, { model: data.init.ru_nav });
  $$payload.out += `<!----></header> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div> `;
  MetaTags($$payload, {
    title: "Demin Portfolio",
    description: "Сайт портфолио разработчика ",
    openGraph: {
      title: "Demin Ivan Developer",
      description: "Разработчик мобильных и веб приложений, разработчик веб сайтов",
      images: [
        {
          url: "https://plfukaeerhozeefmisde.supabase.co/storage/v1/object/public/portfolio/ill.svg?"
        }
      ]
    }
  });
  $$payload.out += `<!----> <footer class="w-full bg-black px-20 py-10 text-white flex flex-row text-xl"><p>DEMIN portfolio</p> <div class="flex-1"></div> <a class="text" href="mailto:1ingego1@gmail.com">1ingego1@gmail.com</a></footer>`;
  bind_props($$props, { data });
  pop();
}
export {
  _layout as default
};
