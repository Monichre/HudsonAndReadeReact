import * as Contentful from 'contentful'
import _ from 'lodash'
import AppStore from '../Stores/AppStore'

var config = require('../config').config

export function getStore(callback) {

    
    const cms_client = Contentful.createClient({
        space: config.auth.space,
        accessToken: config.auth.accessToken
    })

    cms_client.getEntries()
        .then((response) => {

            let response_items = response.items
            console.log(response_items)
            
            let pages = _.filter(response_items, (item) => item.sys.contentType.sys.id === 'page')
            let nav_items = _.map(pages, (page) => page.fields.title.replace(/ /g, '').toLowerCase())
            console.log(pages)
          
            let articles =  _.filter(response_items, (item) => item.sys.contentType.sys.id === 'blogPost')
            articles = articles.sort(function(a,b){
                return Date.UTC(new Date(a.sys.createdAt)) - Date.UTC(new Date(b.sys.createdAt))
            })
            console.log(articles)

            AppStore.data.featured = articles.slice(0, 3)
            
            

  
            // AppStore.data.featured = _.sortBy(articles, (article) => article.sys.createdAt).slice(0, 3)
            // AppStore.data.fashion = _.filter(articles, (article) => article.fields.category[0].fields.title === 'Fashion Posts')
            // AppStore.data.travel = _.filter(articles, (article) => article.fields.category[0].fields.title === 'Travel Posts')
            // AppStore.data.health = _.filter(articles, (article) => article.fields.category[0].fields.title === 'Health Posts')
       
            
            
            AppStore.data.articles = articles
            AppStore.data.nav_items = nav_items
            AppStore.data.pages = pages

   
            
            AppStore.data.ready = true
            AppStore.emitChange()
            
            
            if (callback) {
                callback(false, AppStore)
            }
        })

}

export function getPageData(page_slug, post_slug) {

    if (!page_slug || page_slug === 'blog'){
        page_slug = 'Home'
    }
        
    const data = AppStore.data
    const pages = data.pages
    const page = _.find(pages, (page) => page.fields.title === page_slug)
    console.log(page)
 
	let article
    const articles = data.articles
    if (data.video_entries){
        data.video_entries.forEach(entry => articles.push(entry))
    }
    // if (data.affiliate_entries){
    //     data.affiliate_entries.forEach(entry => articles.push(entry))
    // }
    if (post_slug) {
		
        article = _.find(articles, (article) => article.fields.title === post_slug)
		AppStore.data.article = article
    }

    AppStore.data.page = page
    AppStore.emitChange()
}

export function getMoreItems() {

    AppStore.data.loading = true
    AppStore.emitChange()

    setTimeout(function() {
        let item_num = AppStore.data.item_num
        let more_item_num = item_num + 5
        AppStore.data.item_num = more_item_num
        AppStore.data.loading = false
        AppStore.emitChange()
    }, 300)
}
